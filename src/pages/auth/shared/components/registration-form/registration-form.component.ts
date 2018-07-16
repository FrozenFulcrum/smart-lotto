import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'registration-form',
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
							First Name
							<input
								formControlName="firstName" 
								type="text">
						</label>
						<label>
							Last Name
							<input 
								formControlName="lastName"
								type="text">
						</label>
					</div>
					<ng-content select="button"></ng-content>
				</form>
			</div>
    `
})
export class RegistrationFormComponent {


    form: FormGroup = this.fb.group({
				email: ['', Validators.required],
				firstName: '',
				lastName: ''
    });

    constructor(private fb: FormBuilder) {}
    
}