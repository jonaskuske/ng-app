export class Todo {
  index?: number
  constructor(public title: string, public body: string, public isCompleted: boolean = false) {}
}
