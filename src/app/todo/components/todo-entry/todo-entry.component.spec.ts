import { Store } from '@ngxs/store'
import { render } from '@testing-library/angular'
import { RemoveTodo, UpdateTodo } from '../../todo.actions'
import { Todo } from '../../todo.model'

import { TodoEntryComponent } from './todo-entry.component'

describe('TodoEntryComponent', () => {
  it('delets todo on click', async () => {
    const dispatch = jest.fn()

    const component = await render(TodoEntryComponent, {
      componentProperties: { todo: { title: '', body: '', isCompleted: false } },
      providers: [{ provide: Store, useValue: { dispatch } }],
    })

    const deleteButton = component.getByText(/Löschen/)
    await deleteButton.click()

    expect(dispatch).toBeCalledWith(expect.any(RemoveTodo))
  })

  it('marks as complete on click', async () => {
    const dispatch = jest.fn()
    const todo = new Todo('', '', false)

    const component = await render(TodoEntryComponent, {
      componentProperties: { todo },
      providers: [{ provide: Store, useValue: { dispatch } }],
    })

    const completedButton = component.getByText(/Erledigt/)
    completedButton.click()

    expect(dispatch).toHaveBeenCalledWith(expect.any(UpdateTodo))
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining(new UpdateTodo(todo.index, { isCompleted: true })),
    )
  })

  it('marks as uncomplete on click', async () => {
    const dispatch = jest.fn()
    const todo = new Todo('', '', true)

    const component = await render(TodoEntryComponent, {
      componentProperties: { todo },
      providers: [{ provide: Store, useValue: { dispatch } }],
    })

    const uncompletedButton = component.getByText(/Ausstehend/)
    uncompletedButton.click()

    expect(dispatch).toHaveBeenCalledWith(expect.any(UpdateTodo))
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining(new UpdateTodo(todo.index, { isCompleted: false })),
    )
  })
})
