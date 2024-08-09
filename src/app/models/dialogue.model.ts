export interface Dialogue {
	dialogueId: number;
	chapter?: Chapter;
	place?: Place;
	character?: HpCharacter;
	dialogue: String;
}

export type Chapter = {
	chapterId: number;
	chapterName: String;
	movie: Movie;
	movieChapter: number;
};

export type Movie = {
	movieId: number;
	movieTitle: String;
	year: number;
	runtime: number;
	budget: String;
	boxOffice: String;
};

export type Place = {
	placeId: number;
	placeName: String;
	placeCategory: String;
};

export type HpCharacter = {
	characterId: number;
	characterName: String;
	species: String;
	gender: String;
	house: String;
	patronus: String;
	wandWood: String;
	wandCore: String;
};
