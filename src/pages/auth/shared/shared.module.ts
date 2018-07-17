import { NgModule  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {  IonicModule } from 'ionic-angular';

import { AuthFormComponent } from './components/auth-form/auth-form.component';


@NgModule({
    declarations: [
        AuthFormComponent
    ],
    imports: [
        IonicModule,
        ReactiveFormsModule
    ],
    exports: [
        AuthFormComponent
    ]
})
export class SharedModule {
}