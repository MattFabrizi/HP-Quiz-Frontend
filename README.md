# HP Quiz Project - Frontend

The frontend is developed using Angular and styled with Bootstrap. It interacts with the backend services to generate multiple-choice quiz questions based on the Harry Potter movies.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Description

This project accesses the resources exposed by the backend and creates a multiple-choice quiz for users. The quiz presents random dialogues from the Harry Potter films, and the user must choose the correct character who said the line.

### Key Features:
- **Home Component**: The user starts the quiz by clicking the **Start** button, which navigates to the quiz using Angular's router link.
- **Question Component**: Generates 10 multiple-choice questions in succession. For each question, the correct answer is displayed alongside randomly chosen wrong answers.
- **Result Component**: Once the user completes the quiz, this component shows the final score, indicating how many answers were correct.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend Interaction

The frontend communicates with the backend through the following endpoints:

- **GET `/quiz/dialogue`**: Fetches a random dialogue and related details for the quiz question.
- **GET `/random/hpCharacters`**: Retrieves a random list of character names to generate the incorrect options for the quiz.

[HP Quiz Project - Backend](https://github.com/MattFabrizi/HP-Quiz-Rest)
