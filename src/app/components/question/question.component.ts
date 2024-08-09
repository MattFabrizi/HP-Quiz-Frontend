import { Component, inject, OnInit } from '@angular/core';
import { HpService } from '../../services/hp.service';
import { Dialogue } from 'src/app/models/dialogue.model';
import { Choice } from 'src/app/models/choice.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-question',
	template: `
		<div class="container">
			<div class="row text-center justify-content-center p-5">
				<h1>WHO SAID IT?</h1>
			</div>
		</div>
		<div class="container position-absolute top-50 start-50 translate-middle">
			<app-question-counter [qCounter]="qCounter" />
			<div class="row justify-content-center">
				<mat-card class="col-md-8 p-0 text-center">
					<h1 class="p-3">{{ dialogueObject.dialogue }}</h1>
					<hr />
					<app-answer-options
						[answersList]="answersList"
						(answerEvent)="addChoice($event)"
					/>
				</mat-card>
			</div>
		</div>
	`,
	styles: [],
})
export class QuestionComponent implements OnInit {
	private hpService = inject(HpService);
	private router: Router = inject(Router);
	wrongAnswers: String[] = [];
	answersList: String[] = [];
	rightAnswer: String = '';
	dialogueObject: Dialogue = {
		dialogueId: 0,
		dialogue: '',
	};
	choices: Choice[] = [];
	qCounter = 1;
	result = 0;

	ngOnInit() {
		this.getAnswers();
	}

	addChoice(choice: String) {
		this.choices.push({
			answer: choice,
			correct: choice == this.rightAnswer ? true : false,
		});
		this.answersList = [];
		this.getAnswers();
		if (this.qCounter == 10) {
			this.getResult();
		}
		this.qCounter++;
	}

	getAnswers() {
		this.hpService.getCharacterNames().subscribe({
			next: (nameList) => {
				this.wrongAnswers = nameList;
				this.hpService.getDialogue().subscribe({
					next: (dialogueFetch) => {
						this.dialogueObject = dialogueFetch;
						this.rightAnswer = dialogueFetch.character.characterName;
						// console.log(this.rightAnswer);
						this.mixAnswers(this.rightAnswer);
					},
				});
			},
		});
	}

	mixAnswers(rightAnswer: String) {
		let i = 0;
		while (this.answersList.length < 4) {
			if (this.wrongAnswers[i] != rightAnswer) {
				this.answersList.push(this.wrongAnswers[i]);
			}
			i++;
		}
		this.answersList[this.getRandomInt(4)] = rightAnswer;
	}

	getRandomInt(max: number) {
		return Math.floor(Math.random() * max);
	}

	getResult() {
		this.choices.forEach((choice) => {
			if (choice.correct) {
				this.result += 1;
			}
		});
		this.router.navigate(['/result', this.result]);
	}
}
