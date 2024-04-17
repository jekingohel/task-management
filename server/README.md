# Task Management Application (Backend)

A RESTful API is created to handle CRUD operations for tasks.

## Requirements

*   Node.js
*   MongoDB
*   Redis

### i18n

Language is automatically detected from the Accept-Language header in the request. If the header is not present, the default locale is set to en.

## How to run

### Database cleaning and seeding

Three available commands: `fresh`, `clean`, and `seed`.

```bash
npm run command
```

*   `fresh` Cleans and then seeds the database with dynamic data.
*   `clean` Cleans the database.
*   `seed` Seeds the database with dynamic data.

### Running in development

```bash
npm run dev
```

### Running tests

```bash
npm run test
```

### Code Formatting

```bash
npm run format
```

### Code Linting

```bash
npm run lint
```
