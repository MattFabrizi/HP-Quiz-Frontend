import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="row justify-content-center align-items-center h-100">
      <mat-card class="col-md-4 p-0 text-center">
        <h1>
          Test your HP Knowledge
        </h1>
        <button mat-flat-button color="primary" [routerLink]="['/question']">START</button>
      </mat-card>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent {

}
