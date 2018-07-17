import { AuthService } from './services/auth/auth.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from 'ionic-angular';

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
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [
				AuthService
			]
		}
	}
}