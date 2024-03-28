const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

// Sample user data
const userData = require('../1.users/user')

// Function to generate fake tasks
const generateFakeTasks = (numTasks) => {
  const tasks = []
  for (let i = 0; i < numTasks; i++) {
    const task = {
      _id: new ObjectID(), // Generate a new ObjectID for each task
      title: faker.lorem.words(), // Generate a random title
      description: faker.lorem.sentence(), // Generate a random description
      status: faker.random.arrayElement(['todo', 'inprogress', 'done']), // Random status
      user: userData[i % userData.length]._id, // Use user ID from provided data
      order: i + 1, // Incremental order number starting from 1
      createdAt: faker.date.past(), // Random past date
      updatedAt: faker.date.recent() // Random recent date
    }
    tasks.push(task)
  }
  return tasks
}

// Generate fake tasks
const numTasksToGenerate = 10 // Change this number as needed
const fakeTasks = generateFakeTasks(numTasksToGenerate)

module.exports = fakeTasks
