import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { FormAddTodoComponent } from './form-add-todo.component'

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [FormAddTodoComponent],
  exports: [FormAddTodoComponent],
})
export class FormAddTodoModule {}
