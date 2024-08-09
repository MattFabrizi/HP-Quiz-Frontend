import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-result',
	template: `
		<div class="container position-absolute top-50 start-50 translate-middle">
			<div class="row justify-content-center">
				<mat-card class="col-md-8 p-0 text-center">
					<h1 class="p-3">
						Wow! <br />
						Correct answers: {{ res }} out of 10
					</h1>
				</mat-card>
			</div>
		</div>
	`,
	styles: [],
})
export class ResultComponent {
	constructor(private route: ActivatedRoute) {}
	res = this.route.snapshot.paramMap.get('n');
}
