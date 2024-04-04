const faker = require('faker')
const ObjectID = require('mongodb').ObjectID

// Sample user data
const userData = require('../1.users/user')
const projectsData = require('../3.project/project')

// Function to generate fake project
const generateFakeFavoriteProjects = (numProjects) => {
  const projects = []
  for (let i = 0; i < numProjects; i++) {
    const project = {
      _id: new ObjectID(), // Generate a new ObjectID for each project
      user: userData[i % userData.length]._id, // Use user ID from provided data
      projects: projectsData[i % projectsData.length]._id, // Use user ID from provided data
      createdAt: faker.date.past(), // Random past date
      updatedAt: faker.date.recent() // Random recent date
    }
    projects.push(project)
  }
  return projects
}

// Generate fake projects
const numProjectsToGenerate = 10 // Change this number as needed
const fakeFavoriteProjects = generateFakeFavoriteProjects(numProjectsToGenerate)

module.exports = fakeFavoriteProjects
