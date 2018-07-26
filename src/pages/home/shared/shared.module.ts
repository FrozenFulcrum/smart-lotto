import { PoolManagerService } from './services/pool-manager/pool-manager.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
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
    static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [
				PoolManagerService
			]
		}
	}
}