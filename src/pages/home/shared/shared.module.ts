//import { AuthService } from './services/auth/auth.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from 'ionic-angular';
import { ResultsComponent } from './components/results/results.component';
import { PoolManagerComponent } from './components/pool-manager/pool-manager.component';

//import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
    declarations: [
       ResultsComponent,
       PoolManagerComponent
    ],
    imports: [
			IonicModule,
			ReactiveFormsModule
    ],
    exports: [
        ResultsComponent,
        PoolManagerComponent
    ]
})
export class SharedModule {
	
}