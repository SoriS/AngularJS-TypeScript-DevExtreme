export class TodoItem {
    constructor(
        nameTask: string,
        completed: boolean
    ) {
        this.nameTask = nameTask
        this.completed = completed;
    }
    nameTask: string
    completed: boolean

}
