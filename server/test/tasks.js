/* eslint handle-callback-err: "off"*/

process.env.NODE_ENV = 'test'

const Task = require('../app/models/task')
const faker = require('faker')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
// eslint-disable-next-line no-unused-vars
const should = chai.should()
const loginDetails = {
  email: 'user@user.com',
  password: '12345'
}
let tokens = ''

const createdTaskIDs = []

chai.use(chaiHttp)

describe('*********** TASKS ***********', () => {
  describe('/POST login', () => {
    it('it should GET token', (done) => {
      chai
        .request(server)
        .post('/login')
        .send(loginDetails)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.an('object')
          res.body.should.have.property('token')
          tokens = res.body.token
          done()
        })
    })
  })
  describe('/GET tasks', () => {
    it('it should NOT be able to consume the route since no token was sent', (done) => {
      chai
        .request(server)
        .get('/tasks')
        .end((err, res) => {
          res.should.have.status(401)
          done()
        })
    })
    it('it should GET all tasks', (done) => {
      chai
        .request(server)
        .get('/tasks')
        .set('Authorization', `Bearer ${tokens}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.an('object')
          res.body.docs.should.be.a('array')
          done()
        })
    })
  })
  describe('/POST task', () => {
    it('it should NOT POST a task without title and description', (done) => {
      const task = {}
      chai
        .request(server)
        .post('/tasks')
        .set('Authorization', `Bearer ${tokens}`)
        .send(task)
        .end((err, res) => {
          res.should.have.status(422)
          res.body.should.be.a('object')
          res.body.should.have.property('errors')
          done()
        })
    })
    it('it should POST a task', (done) => {
      const task = {
        title: faker.random.words(),
        description: faker.lorem.sentence(),
        status: 'todo'
      }
      chai
        .request(server)
        .post('/tasks')
        .set('Authorization', `Bearer ${tokens}`)
        .send(task)
        .end((err, res) => {
          res.should.have.status(201)
          res.body.should.be.a('object')
          res.body.should.include.keys('_id', 'title', 'description', 'status')
          createdTaskIDs.push(res.body._id)
          done()
        })
    })
  })
  describe('/GET/:id task', () => {
    it('it should GET a task by the given id', (done) => {
      const id = createdTaskIDs.slice(-1).pop()
      chai
        .request(server)
        .get(`/tasks/${id}`)
        .set('Authorization', `Bearer ${tokens}`)
        .end((error, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('title')
          res.body.should.have.property('_id').eql(id)
          done()
        })
    })
  })
  describe('/PATCH/:id task', () => {
    it('it should UPDATE a task given the id', (done) => {
      const id = createdTaskIDs.slice(-1).pop()
      const updatedTask = {
        title: faker.random.words(),
        description: faker.lorem.sentence(),
        status: 'inprogress'
      }
      chai
        .request(server)
        .patch(`/tasks/${id}`)
        .set('Authorization', `Bearer ${tokens}`)
        .send(updatedTask)
        .end((error, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('_id').eql(id)
          res.body.should.have.property('title').eql(updatedTask.title)
          res.body.should.have
            .property('description')
            .eql(updatedTask.description)
          res.body.should.have.property('status').eql(updatedTask.status)
          done()
        })
    })
  })
  describe('/DELETE/:id task', () => {
    it('it should DELETE a task given the id', (done) => {
      const task = {
        title: faker.random.words(),
        description: faker.lorem.sentence(),
        status: 'todo'
      }
      chai
        .request(server)
        .post('/tasks')
        .set('Authorization', `Bearer ${tokens}`)
        .send(task)
        .end((err, res) => {
          res.should.have.status(201)
          res.body.should.be.a('object')
          res.body.should.include.keys('_id', 'title', 'description', 'status')
          const taskId = res.body._id
          chai
            .request(server)
            .delete(`/tasks/${taskId}`)
            .set('Authorization', `Bearer ${tokens}`)
            .end((error, result) => {
              result.should.have.status(200)
              result.body.should.be.a('object')
              result.body.should.have.property('msg').eql('DELETED')
              done()
            })
        })
    })
  })

  after(() => {
    createdTaskIDs.forEach((id) => {
      Task.findByIdAndRemove(id, (err) => {
        if (err) {
          console.log(err)
        }
      })
    })
  })
})
