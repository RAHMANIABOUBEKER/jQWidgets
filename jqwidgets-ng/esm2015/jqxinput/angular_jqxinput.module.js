import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxinput';
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxInputComponent } from './angular_jqxinput';
let jqxInputModule = class jqxInputModule {
};
jqxInputModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FormsModule
        ],
        declarations: [jqxInputComponent],
        exports: [jqxInputComponent]
    })
], jqxInputModule);
export { jqxInputModule };
