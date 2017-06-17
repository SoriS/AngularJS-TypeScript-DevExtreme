
import { TodoItem } from "./TodoItem";

export class ControllerDev {
    text: string = ""

    dataTodoItem: TodoItem[] = [{
        "nameTask": "Test1",
        "completed": false
    }];
    dataGridOptions = {
        dataSource: this.dataTodoItem,
        
        columns: [
            "nameTask",
            {
                dataField: "completed",
                dataType: 'string'
            }],
        editing: {
            allowUpdating: true,
            allowAdding: true,
            allowDeleting: true
        }
    }



    addTask(): void {

        var newTodo: string = this.text.trim()
        if (!newTodo.length) {
            return;
        }

        this.dataTodoItem.push(new TodoItem(newTodo, false))
        this.text = '';
        console.log(this.dataTodoItem)
    }

}
