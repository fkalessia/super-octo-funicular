import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal } from '../../features/goals/goalSlice'
function GoalItem({ goal }) {
  const dispatch = useDispatch()
  return (
    <>
      <div className="card mt-4">
        <div className="card-header">
          {goal.user} - {new Date(goal.createdAt).toLocaleString('tr-TR')}
        </div>
        <div className="card-body">{goal.text}</div>
        <button onClick={() => dispatch(deleteGoal(goal._id))} className="btn btn-danger">
          X
        </button>
      </div>
    </>
  )
}

export default GoalItem
