import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
  }

  return (
    <>
      <div className="row">
        <div className="col-5">
          <div className="card">
            <div className="card-header">Add New Goal</div>
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="text"
                    name="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-sm btn-dark">
                  Add Goal
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GoalForm
