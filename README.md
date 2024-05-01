# Task Management Application
This project is a full-stack task management application designed to allow users to create, update, and delete tasks. Tasks are represented with a title, description, and status (e.g., "To Do," "In Progress," "Done"). Users can view a list of tasks and filter them by status.

[![Watch the video](https://cdn.loom.com/sessions/thumbnails/3bfe9d67927241b29e8662e290c20ae7-00001.jpg)](https://www.loom.com/share/3bfe9d67927241b29e8662e290c20ae7)


## Front-End
### User Interface
The front-end provides a user-friendly interface with the following components:
- A form to create a new task with fields for title, description, and status.
- A list of tasks with options to update the status or delete a task.
- A filter or dropdown to filter tasks by status (e.g., "All," "To Do," "In Progress," "Done").

### User Experience
Smooth and responsive user interactions are implemented, including form validation to ensure tasks cannot be created without a title.

### Responsive Design
The application is responsive and works well on both desktop and mobile devices.

## Back-End
### API Development
A RESTful API is created to handle CRUD operations for tasks.
The API is built using a back-end technology in Node.js.
### Data Storage
A database is implemented to store task data, using MongoDB database system.

### Validation
Server-side validation ensures that task data is valid before saving it to the database. Tasks must have a title and a valid status.

### Error Handling
Errors are properly handled, including sending appropriate error messages and status codes in response.
