export class TodoItem {
    constructor(
        nameTask: string,
        completed?: boolean,
        dateCreate?: Date
    ) {
        this.nameTask = nameTask
        this.completed = completed || false;
        this.dateCreate = dateCreate || new Date();
    }
    nameTask: string
    completed: boolean
    dateCreate: Date
}
