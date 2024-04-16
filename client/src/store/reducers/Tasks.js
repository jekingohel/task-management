import * as actionType from "store/actions/actionTypes"
import StoreTemplate from "store/StoreTemplate"

const container = {}

const defaultState = function () {
  return {
    collection: defaultTasks()
  }
}

const defaultTasks = function () {
  return {}
}

const sortTasks = function (source) {
  // get the regular tasks only
  let regular = source.filter((item, index) => {
    return item.order !== null
  })

  // sort the regular tasks by id
  regular.sort((a, b) => {
    return a.order > b.order
  })

  return [...regular]
}

const sortTasksObject = function (source) {
  let collection = Object.values(source).filter((val) => val)
  collection = sortTasks(collection)

  let tasks = {}
  for (let index in collection) {
    tasks[collection[index]._id] = collection[index]
  }

  return tasks
}

const Tasks = StoreTemplate(defaultState(), container)

container[actionType.ACTION_TASKS_ADD_TASK] = function (state, payload) {
  let itemID = null

  for (let index in state.collection) {
    if (`${state.collection[index]._id}` === `${payload.task._id}`) {
      itemID = index
      break
    }
  }

  if (itemID === null) {
    state.collection[payload.task._id] = {
      ...payload.task
    }
  } else {
    const properties = Object.keys(payload.task)
    for (let key of properties) {
      state.collection[itemID][key] = payload.task[key]
    }
  }

  // next line will inform redux about this change
  state.collection = {
    ...sortTasksObject(state.collection)
  }

  return {
    ...state
  }
}

container[actionType.ACTION_TASKS_UPDATE_TASK] = function (state, payload) {
  const properties = Object.keys(payload.task)

  for (let key of properties) {
    state.collection[payload.task._id][key] = payload.task[key]
  }

  // // next line will inform redux about this change
  state.collection = {
    ...sortTasksObject(state.collection)
  }

  return {
    ...state
  }
}

container[actionType.ACTION_TASKS_REMOVE_TASK] = function (state, payload) {
  if (state.collection[payload._id]) {
    delete state.collection[payload._id]
  }

  state.collection = {
    ...state.collection
  }

  return {
    ...state
  }
}

container[actionType.ACTION_TASKS_SET_COLLECTION] = function (state, payload) {
  payload.collection = sortTasks(payload.collection)

  const collection = {}
  for (let index in payload.collection) {
    collection[`${payload.collection[index]._id}`] = payload.collection[index]
  }

  state.collection = {
    ...collection
  }

  return {
    ...state
  }
}

container[actionType.ACTION_TASKS_GLOBAL_RESET] = function () {
  return defaultState()
}

export default Tasks
