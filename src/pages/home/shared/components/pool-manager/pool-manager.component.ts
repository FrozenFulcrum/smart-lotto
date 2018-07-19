import { Component } from '@angular/core';

@Component({
    selector: 'pool-manager-component',
		template: `
		<!--
			<ion-header>
				<ion-navbar>
					<ion-title>Memberships</ion-title>
				</ion-navbar>
			</ion-header>
			-->
			<ion-content padding>
				<ion-card>
					<ion-card-header>
						Lotto Pool Name Here
					</ion-card-header>
					<ion-card-content>
						Lotto Pool Member 1
						Lotto Pool Member 1	
					</ion-card-content>
				</ion-card>

				<button ion-fab top right>Static FAB</button>
				<ion-fab bottom right>
					<button ion-fab>Non static FAB</button>
				</ion-fab>
			</ion-content>
    `
})
export class PoolManagerComponent {

	constructor() {}
}
