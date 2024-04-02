const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

// Sample user data
const userData = require('../1.users/user')

// Function to generate fake project
const generateFakeProjects = (numProjects) => {
  const projects = []
  for (let i = 0; i < numProjects; i++) {
    const project = {
      _id: new ObjectID(), // Generate a new ObjectID for each project
      title: faker.lorem.words(), // Generate a random title
      user: userData[i % userData.length]._id, // Use user ID from provided data
      createdAt: faker.date.past(), // Random past date
      updatedAt: faker.date.recent() // Random recent date
    }
    projects.push(project)
  }
  return projects
}

// Generate fake projects
const numProjectsToGenerate = 10 // Change this number as needed
const fakeProjects = generateFakeProjects(numProjectsToGenerate)

module.exports = fakeProjects
