import { NgModule } from '@angular/core';

import { LoginFormComponent } from './components/login-form/login-form.component'
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

@NgModule({
    declarations: [
        LoginFormComponent,
        RegistrationFormComponent
    ],
    exports: [
        LoginFormComponent,
        RegistrationFormComponent
    ]
})
export class SharedModule {
}