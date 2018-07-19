import { NgModule } from '@angular/core';
import { TabsPage } from './tabs';
import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../../auth/shared/shared.module';
import * as components from '../shared/shared.module';

@NgModule({
    declarations: [
      TabsPage
    ],
    imports: [
        SharedModule,
        IonicPageModule.forChild(TabsPage),
        components.SharedModule
    ]
})
export class LoginModule {
}