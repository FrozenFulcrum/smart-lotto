import { Component, Output, EventEmitter } from '@angular/core';
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
				<ng-content></ng-content>
			</form>
		</div>
    `
})
export class AuthFormComponent {

	@Output()
	submitted = new EventEmitter<FormGroup>();

	form: FormGroup = this.fb.group({
		email: ['', Validators.required],
		password: ''
	});

	constructor(private fb: FormBuilder) {}

	onSubmit() {
		if (this.form.valid) {
			this.submitted.emit(this.form);
		}
	}

}
