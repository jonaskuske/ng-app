import { FormsModule } from '@angular/forms'

import { of } from 'rxjs'

import { NgxsModule } from '@ngxs/store'
import { render, RenderResult } from '@testing-library/angular'
import { FormAddTodoComponent } from '../../components/form-add-todo/form-add-todo.component'
import { TodoEntryComponent } from '../../components/todo-entry/todo-entry.component'
import { Todo } from '../../todo.model'
import { TodoState } from '../../todo.state'

import { TodoMasterComponent } from './todo-master.component'

async function mockSelector<Comp = any>(component: RenderResult<Comp>, prop: string, value: any) {
  Object.defineProperty(component.fixture.componentInstance, prop, { writable: true })
  component.fixture.componentInstance[prop] = of(value)
  component.fixture.detectChanges()
}

describe('TodoMasterComponent', () => {
  it('shows fallback message if none are completed', async () => {
    const component = await render(TodoMasterComponent, {
      declarations: [TodoEntryComponent, FormAddTodoComponent],
      imports: [FormsModule, NgxsModule.forRoot([TodoState])],
    })

    await mockSelector(component, 'completedTodos$', [])
    expect(component.getByTestId('none-completed')).toBeVisible()
  })

  it('shows fallback message if none are uncompleted', async () => {
    const component = await render(TodoMasterComponent, {
      declarations: [TodoEntryComponent, FormAddTodoComponent],
      imports: [FormsModule, NgxsModule.forRoot([TodoState])],
    })

    await mockSelector(component, 'uncompletedTodos$', [])
    const c = component.getByTestId('none-uncompleted')

    expect(c).toBeVisible()
  })

  it('renders completed todos', async () => {
    const component = await render(TodoMasterComponent, {
      declarations: [TodoEntryComponent, FormAddTodoComponent],
      imports: [FormsModule, NgxsModule.forRoot([TodoState])],
    })

    const todo = new Todo('TEST_TODO', '', true)
    await mockSelector(component, 'completedTodos$', [todo])

    expect(component.getByText(new RegExp(todo.title)))
  })

  it('renders uncompleted todos', async () => {
    const component = await render(TodoMasterComponent, {
      declarations: [TodoEntryComponent, FormAddTodoComponent],
      imports: [FormsModule, NgxsModule.forRoot([TodoState])],
    })

    const todo = new Todo('TEST_TODO', '', false)
    await mockSelector(component, 'uncompletedTodos$', [todo])

    expect(component.getByText(new RegExp(todo.title)))
  })
})
