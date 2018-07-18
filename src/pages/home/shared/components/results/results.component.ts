import { Component } from '@angular/core';

@Component({
    selector: 'results-component',
        template: `
        <h4>Results Component</h4>
        <h4>Lotto Max Winning Numbers: 9 20 47 1 32 58 90</h4>
        <h4>649 Winning Numbers: 1 2 3 4 5 6</h4>
        <div class='lottomax-winning-numbers'>9 20 47 1 32 58 90</div>
        <div class='649-winning-numbers'>1 2 3 4 5 6</div>
    `
})
export class ResultsComponent {

	constructor() {}

}
