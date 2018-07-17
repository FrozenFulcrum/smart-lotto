import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'auth-form',
		template: `
		<div class="auth-form">
			<form [formGroup]="form" (ngSubmit)="onSubmit()">
				<div>
					<label>
						Email
						<input
							formControlName="email" 
							type="email">
					</label>
					<label>
						Password
						<input
							formControlName="password" 
							type="password">
					</label>
				</div>
				<ng-content select="button"></ng-content>
				<ng-content select="p"></ng-content>
			</form>
		</div>
    `
})
export class AuthFormComponent {
	form: FormGroup = this.fb.group({
		email: ['', Validators.required],
		password: ''
	});

constructor(private fb: FormBuilder) {}
}