import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-question-counter',
	template: `
		<div class="row justify-content-center">
			<div class="col-md-3 text-center">
				<h1>{{ qCounter }}/10</h1>
			</div>
		</div>
	`,
	styles: [],
})
export class QuestionCounterComponent {
	@Input() qCounter: number = 0;
}
