import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AuthService } from '../shared/services/auth/auth.service';

@IonicPage()
@Component({
    selector: 'register-page',
    template: `
    <ion-header>
	    <ion-navbar>
	      <ion-title>Register</ion-title>
	    </ion-navbar>
  	</ion-header>
	  <ion-content>
			<auth-form
				(submitted)="onRegister($event)">
	      <button ion-button type="submit">
	        Sign up
	      </button>
				<div class="error" *ngIf="error">
					{{ error }}
        </div>
        <p>Already have an account?</p>
			</auth-form>
		</ion-content>
    `
})
export class RegisterPage {

	error = 'The error is defined!';
	
	constructor(
		private authService: AuthService,
		public navCtrl: NavController
	){}

	onRegister(event) {
		console.log('Register event ', event);
	}

}
