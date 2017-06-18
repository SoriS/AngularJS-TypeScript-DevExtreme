

import { TodoItem } from "./TodoItem";

export class ControllerDev {

     
    dataTodoItem: TodoItem[] = [{
        "nameTask": "Test1",
        "completed": false,
        "dateCreate": new Date()
    }];
    text: string = ""
    dataGridOptions = {
        columns: [
            "nameTask",
            {
                dataField: "completed",
                dataType: "boolean",
                editorOptions: {
                    activeStateEnable: true,
                    disabled: false,
                    readOnly: false
                }

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
        mode: 'text',
        showClearButton: true,
        placeholder: "Enter name task here...",
        onEnterKey: true,
        validationMessageMode: 'always',
        bindingOptions: {
            value: 'vm.text'
        }
    }
    buttonOptions = {
        text: 'Submit Task',
        hint: 'Submit',
        type: 'default',
        icon: 'add',
        onClick: this.addTask()
    }
    static self: ControllerDev = null;
    addTask(): any {
        return () => {
            var newTodo: string = this.text;
            if (!newTodo.length) {
                return;
            }
            this.dataTodoItem.push(new TodoItem(newTodo))
            this.text = "";
            console.log(this.dataTodoItem)
        }

    }

}
