import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular/umd';

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
	    <auth-form>
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
}
