import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular/umd';

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
	    <auth-form>
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
}
