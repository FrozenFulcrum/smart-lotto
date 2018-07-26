import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { members } from '../../../../../models/members.model';
import { contributions } from '../../../../../models/contributions.model';
import { PoolManagerService } from '../../services/pool-manager/pool-manager.service';


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
						<ion-list>
							<ion-item *ngFor="let member of memberlist | async">{{members.emailAddress}}</ion-item>
						</ion-list>
					</ion-card-content>
				</ion-card>

				<ion-fab bottom right>
					<button ion-fab>
						<ion-icon name="add"></ion-icon>
					</button>
				</ion-fab>
			</ion-content>
    `
})
export class PoolManagerComponent {

	memberList: Observable<members[]>;

	constructor(private poolManagerService: PoolManagerService) {
		//this.memberList = this.poolManagerService.getMembersList()
		//.snapshotChanges()
		//.map(
		//	changes => {
		//		return changes.map(c => ({
		//			key: c.payload.key, ...c.payload.val()
		//		}))
		//	});
	}
}
