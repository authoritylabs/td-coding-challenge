### Prerequisites

Node v14+
NPM v6+

### Install Dependencies

Run `npm install` to install project dependencies

### Run Application

This project prints a list of API usage for the number of GET and POST requests made by user with id 77 for the last 7 days.

Run `npm start` to run the program.

The following is an example of output printed to the terminal:
```
[
  { daysAgo: 0, gets: 100, posts: 100 },
  { daysAgo: 1, gets: 20, posts: 50 },
  { daysAgo: 2, gets: 50, posts: 0 },
  { daysAgo: 3, gets: 800, posts: 0 },
  { daysAgo: 4, gets: 10000, posts: 0 },
  { daysAgo: 5, gets: 0, posts: 0 },
  { daysAgo: 6, gets: 5, posts: 3 }
]
```

### Tests

Run `npm test` to run all unit tests.
