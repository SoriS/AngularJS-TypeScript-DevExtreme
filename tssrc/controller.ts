import { TodoItem } from "./TodoItem";

export class ControllerDev {

    dataTodoItem: TodoItem[] = [{
        "nameTask": "Test1",
        "completed": false,
        "dateCreate": new Date()
    }];
    text:string = ""

    dataGridOptions = {

        columns: [
            "nameTask",
            {
                dataField: "completed",
                dataType: 'string'
            },
            {
                dataField: "dateCreate",
                dataType: "date",
                format: "yyyy/MM/dd HH:mm:ss"
            }],
        editing: {
            mode: 'popup',
            allowUpdating: true,
            allowAdding: true,
            allowDeleting: true
        },
        bindingOptions: {
            dataSource: 'vm.dataTodoItem'
        }

    }
    textOptions = {
        mode:'text',
        showClearButton: true,
        placeholder: "Enter name task here...",
        onEnterKey: true,
        validationMessageMode: 'always',
        bindingOptions: {
            value: 'vm.text'
        }
    }
    addTask(): void {
        var newTodo: string = this.text
        if (!newTodo.length) {
            return;
        }
        this.dataTodoItem.push(new TodoItem(newTodo, false))
        this.text = "";
        console.log(this.dataTodoItem)
    }

}
