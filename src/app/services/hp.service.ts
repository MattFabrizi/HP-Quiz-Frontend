import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class HpService {
	baseUrl: string = 'http://localhost:8080/';

	constructor(private httpClient: HttpClient) {}

	getCharacterNames(): Observable<any> {
		return this.httpClient.get(this.baseUrl + 'random/hpCharacters');
	}

	getDialogue(): Observable<any> {
		return this.httpClient.get(this.baseUrl + 'quiz/dialogue');
	}
}
