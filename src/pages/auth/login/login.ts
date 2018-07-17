import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


import { AuthService } from '../shared/services/auth/auth.service';

@IonicPage()
@Component({
    selector: 'login-page',
    template: `
    <ion-header>
	    <ion-navbar>
	      <ion-title>Login</ion-title>
	    </ion-navbar>
  	</ion-header>
	  <ion-content>
			<auth-form
				(submitted)="onLogin($event)">
	      <button ion-button type="submit">
	        Sign in
	      </button>
				<div class="error" *ngIf="error">
					{{ error }}
        </div>
        <p>Sign up for an account</p>
			</auth-form>
		</ion-content>
    `
})
export class LoginPage {

	constructor(private authService: AuthService,
		public navCtrl: NavController
	){}

	onLogin(event) {
		console.log('Login ', event);
	}
}
