import { Component } from '@angular/core';

@Component({
    selector: 'results-component',
        template: `
        <!--<ion-header>
          <ion-navbar>
            <ion-title></ion-title>
          </ion-navbar>
        </ion-header>
        -->
        <ion-content padding>
            <ion-card>
                <ion-card-header>
                    Lotto Max
                </ion-card-header>
                <ion-card-content>
                    Lotto Max Winning Numbers: 9 20 47 1 32 58 90
                </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-header>
                    649
                </ion-card-header>
                <ion-card-content>
                    649 Winning Numbers: 1 2 3 4 5 6
                </ion-card-content>
            </ion-card>
        </ion-content>
    `
})
export class ResultsComponent {

	constructor() {}

}
