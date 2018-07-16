import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'registration-form',
    template: `
        <div>
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
                <div>
                    <label>
                        Email
                        <input formControlName="email" type="email">
                    </label>
                </div>
            </form>
        </div>
    `
})
export class RegistrationFormComponent {


    form: FormGroup = this.fb.group({
        email: ['', Validators.required]
    });

    constructor(private fb: FormBuilder) {}
    
}