const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

// Sample user data
const userData = require('../1.users/user')

const dummyData = [
  {
    id: '1',
    title: 'Develop Homepage Design',
    description: 'Create a visually appealing design for the project homepage.',
    status: 'todo',
    createdAt: '2024-04-08T09:30:00'
  },
  {
    id: '2',
    title: 'Implement User Authentication',
    description:
      'Set up user authentication system using OAuth 2.0 for security.',
    status: 'in-progress',
    createdAt: '2024-04-07T15:45:00'
  },
  {
    id: '3',
    title: 'Refactor Database Schema',
    description:
      'Optimize database schema for improved performance and scalability.',
    status: 'in-progress',
    createdAt: '2024-04-06T11:20:00'
  },
  {
    id: '4',
    title: 'Write API Documentation',
    description:
      'Document RESTful API endpoints for developers and stakeholders.',
    status: 'done',
    createdAt: '2024-04-05T14:10:00'
  },
  {
    id: '5',
    title: 'Bug Fixing',
    description: 'Identify and fix bugs reported by QA team.',
    status: 'todo',
    createdAt: '2024-04-04T16:55:00'
  },
  {
    id: '6',
    title: 'Performance Testing',
    description:
      'Conduct performance testing to ensure system stability under load.',
    status: 'in-progress',
    createdAt: '2024-04-03T10:30:00'
  },
  {
    id: '7',
    title: 'UI/UX Review',
    description:
      'Gather feedback from stakeholders and users for UI/UX improvements.',
    status: 'todo',
    createdAt: '2024-04-02T13:20:00'
  },
  {
    id: '8',
    title: 'Deploy to Production',
    description: 'Prepare and deploy application to production environment.',
    status: 'in-progress',
    createdAt: '2024-04-01T17:45:00'
  },
  {
    id: '9',
    title: 'Security Audit',
    description:
      'Perform security audit to identify vulnerabilities and implement fixes.',
    status: 'done',
    createdAt: '2024-03-31T09:00:00'
  },
  {
    id: '10',
    title: 'Client Meeting',
    description:
      'Hold a meeting with the client to discuss project progress and updates.',
    status: 'done',
    createdAt: '2024-03-30T14:30:00'
  },
  {
    id: '11',
    title: 'Feature Development',
    description:
      'Develop new features based on client requirements and feedback.',
    status: 'todo',
    createdAt: '2024-03-29T16:20:00'
  },
  {
    id: '12',
    title: 'Database Backup',
    description: 'Take regular backups of the database to prevent data loss.',
    status: 'done',
    createdAt: '2024-03-28T11:10:00'
  },
  {
    id: '13',
    title: 'Code Review',
    description:
      'Conduct code review sessions to ensure code quality and best practices.',
    status: 'in-progress',
    createdAt: '2024-03-27T14:40:00'
  },
  {
    id: '14',
    title: 'Integration Testing',
    description:
      'Test the integration of different system components for seamless functionality.',
    status: 'todo',
    createdAt: '2024-03-26T10:15:00'
  },
  {
    id: '15',
    title: 'Stakeholder Meeting',
    description:
      'Schedule a meeting with stakeholders to gather requirements and feedback.',
    status: 'done',
    createdAt: '2024-03-25T13:25:00'
  },
  {
    id: '16',
    title: 'Documentation Update',
    description:
      'Update project documentation with latest changes and additions.',
    status: 'in-progress',
    createdAt: '2024-03-24T16:50:00'
  },
  {
    id: '17',
    title: 'User Training',
    description:
      'Provide training sessions for end-users on how to use the application.',
    status: 'todo',
    createdAt: '2024-03-23T09:55:00'
  },
  {
    id: '18',
    title: 'Performance Optimization',
    description:
      'Optimize code and queries for better performance and responsiveness.',
    status: 'in-progress',
    createdAt: '2024-03-22T12:35:00'
  },
  {
    id: '19',
    title: 'Quality Assurance',
    description: 'Perform comprehensive QA testing to ensure software quality.',
    status: 'done',
    createdAt: '2024-03-21T14:15:00'
  },
  {
    id: '20',
    title: 'Infrastructure Setup',
    description:
      'Set up infrastructure including servers, databases, and networking.',
    status: 'todo',
    createdAt: '2024-03-20T17:30:00'
  }
]

// Function to generate fake tasks
const generateFakeTasks = () => {
  const tasks = []
  dummyData.forEach((task, index) => {
    const taskObj = {
      _id: new ObjectID(), // Generate a new ObjectID for each task
      title: task.title,
      description: task.description,
      status: task.status, // Random status
      user: userData[0]._id, // Use user ID from provided data
      order: index + 1, // Incremental order number starting from 1
      createdAt: faker.date.past(), // Random past date
      updatedAt: faker.date.recent() // Random recent date
    }
    tasks.push(taskObj)
  })
  return tasks
}

// Generate fake tasks
const fakeTasks = generateFakeTasks()

module.exports = fakeTasks
