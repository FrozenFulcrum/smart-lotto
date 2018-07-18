import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AuthService } from '../shared/services/auth/auth.service';

@IonicPage()
@Component({
    selector: 'register-page',
    template: `
    <ion-header>
	    <ion-navbar hideBackButton="true">
	      <ion-title>Register</ion-title>
	    </ion-navbar>
  	</ion-header>
	  <ion-content>
			<auth-form
				(submitted)="onRegister($event)">
        <button ion-button>
	        Sign up
	      </button>
				<div class="error" *ngIf="error">
					{{ error }}
        </div>
        <button ion-button
          clear block
          (click)="onLogin()">Already have an account?</button>
			</auth-form>
		</ion-content>
    `
})
export class RegisterPage {

	error = '';

	constructor(
		private authService: AuthService,
		public navCtrl: NavController
	){}

	async onRegister(event) {
    const { email, password } = event.value;
    await this.authService.createUser(email, password);
    this.navCtrl.setRoot('TabsPage');
  }

  onLogin() {
    this.navCtrl.push('LoginPage');
  }

}
