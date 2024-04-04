## Getting started

This project provides a solid foundation for building RESTful APIs using JavaScript with async/await. It's designed to be a quick and efficient way to kickstart the development of a web API for Task management task.

## Features

*   Multiple environment (development, production)
*   Custom email/password user system with basic security and blocking for preventing brute force attacks
*   Compressed responses
*   Secured HTTP headers
*   Cross-Origin Resource Sharing (CORS) support
*   Cache (Redis)
*   HTTP request logger in development mode
*   i18n (for sending emails in multiple languages)
*   User roles
*   Pagination
*   User profile
*   Users list for admin area
*   Login access log with IP, browser and country location (for country it looks for the header `cf-ipcountry` that CloudFlare creates when protecting your website)
*   Testing with mocha/chai for API endpoints
*   NPM scripts for cleaning and seeding the MongoDB database
*   Mailer example with Nodemailer and Mailgun
*   Ability to refresh token
*   JSON Web Tokens (JWT) for secure authentication

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
