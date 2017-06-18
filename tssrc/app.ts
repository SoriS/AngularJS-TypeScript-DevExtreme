import 'devextreme/ui/data_grid';
import 'devextreme/ui/text_box';
import 'devextreme/integration/angular';
import 'devextreme/ui/button'
import 'devextreme/data/local_store'
import { module } from "angular"
import { ControllerDev } from "./controller"



export let appDev = module('appDev', ["dx"])
    .controller("controllerDev", ControllerDev)
