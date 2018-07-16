import { NgModule  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './components/login-form/login-form.component'
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';


@NgModule({
    declarations: [
        LoginFormComponent,
        RegistrationFormComponent
    ],
    imports: [
        ReactiveFormsModule
    ],
    exports: [
        LoginFormComponent,
        RegistrationFormComponent
    ]
})
export class SharedModule {
}