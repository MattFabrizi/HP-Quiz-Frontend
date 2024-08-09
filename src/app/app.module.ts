import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { QuestionComponent } from './components/question/question.component';
import { HttpClientModule } from '@angular/common/http';
import { AnswerOptionsComponent } from './components/answer-options/answer-options.component';
import { FormsModule } from '@angular/forms';
import { QuestionCounterComponent } from './components/question-counter/question-counter.component';
import { ResultComponent } from './components/result/result.component';
import { provideRouter } from '@angular/router';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		QuestionComponent,
		AnswerOptionsComponent,
		QuestionCounterComponent,
		ResultComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCardModule,
		NgbModule,
		MatRadioModule,
		HttpClientModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
