import axios from 'axios'

//create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(
    `${process.env.REACT_APP_API_ENDPOINT}/api/goals`,
    goalData,
    config
  )

  return response.data
}

//get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/goals`, config)

  return response.data
}

// delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.delete(
    `${process.env.REACT_APP_API_ENDPOINT}/api/goals/${goalId}`,
    config
  )

  return response.data
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal
}

export default goalService
