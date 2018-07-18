import { NgModule } from '@angular/core';
import { TabsPage } from './tabs';
import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../../auth/shared/shared.module';
import * as components from '../shared/shared.module';

import { ResultsComponent } from '../shared/components/results/results.component';
import { PoolManagerComponent } from '../shared/components/pool-manager/pool-manager.component';


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