import { NgModule } from '@angular/core';
import { RegisterPage } from './register';
import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        RegisterPage
    ],
    imports: [
        SharedModule,
        IonicPageModule.forChild(RegisterPage)
    ]
})
export class LoginModule {
}