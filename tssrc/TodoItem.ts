export class TodoItem {
    constructor(
        nameTask: string,
        completed: boolean,
        dateCreate?: Date
    ) {
        this.nameTask = nameTask
        this.completed = completed;
        this.dateCreate = dateCreate || new Date();
    }
    nameTask: string
    completed: boolean
    dateCreate: Date
}
