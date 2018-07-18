import { Component } from '@angular/core';

@Component({
    selector: 'results-component',
        template: `
        <ion-header>
          <ion-navbar>
            <ion-title>Results</ion-title>
          </ion-navbar>
        </ion-header>
        
        <ion-content padding>
            <h4>Lotto Max Winning Numbers: 9 20 47 1 32 58 90</h4>
            <h4>649 Winning Numbers: 1 2 3 4 5 6</h4>
        </ion-content>
    `
})
export class ResultsComponent {

	constructor() {}

}
