import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-answer-options',
	template: `
		<mat-radio-group class="answers-radio-group">
			<mat-radio-button
				class="answer-radio-button d-block"
				*ngFor="let option of answersList"
				[value]="option"
				(change)="setChoice(option)"
			>
				{{ option }}
			</mat-radio-button>
		</mat-radio-group>
		<button
			mat-flat-button
			color="primary"
			class="m-4"
			(click)="sendAnswer(choice)"
		>
			NEXT
		</button>
	`,
	styles: [],
})
export class AnswerOptionsComponent {
	@Input() answersList: String[] = [];
	@Output() answerEvent = new EventEmitter<String>();

	choice: String = '';

	setChoice(value: String) {
		this.choice = value;
	}

	sendAnswer(value: String) {
		this.answerEvent.emit(value);
		console.log(this.choice);
	}
}
