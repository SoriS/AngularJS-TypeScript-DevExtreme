

import { TodoItem } from "./TodoItem"
import DataStore from 'devextreme/data/data_source'
import LocalStore from 'devextreme/data/local_store'
export class ControllerDev {
    dataTodoItem: TodoItem[] = [{
        "nameTask": "Test1",
        "completed": false,
        "dateCreate": new Date()
    }];

    datastore = new DataStore({
        store: {
            type: "local",
            name: "MyLocalData",
            key: "id"
        }
    })
    store = new LocalStore({
        name: "MyLocalData",
        key: "id",

    });
    text: string = ""


    dataGridOptions = {
        columns: [
            "nameTask",
            {
                dataField: "completed",
                dataType: "boolean",
                editorOptions: {
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

        dataSource: this.datastore //"vm.store" //'vm.dataTodoItem'

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
    addTask(): any {
        return () => {
            var newTodo: string = this.text;
            if (!newTodo.length) {
                return;
            }
            this.datastore.store().insert(new TodoItem(newTodo))
            this.datastore.reload()
            //this.instances.grid.addRow();
            this.text = "";
            console.log(this.dataTodoItem)
        }

    }

}
