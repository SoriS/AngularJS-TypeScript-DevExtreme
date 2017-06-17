import 'devextreme/ui/data_grid';
import 'devextreme/integration/angular'
import {module} from "angular"
import {ControllerDev} from "./controller"


export let appDev = module('appDev',["dx"])
    .controller("controllerDev",ControllerDev)
