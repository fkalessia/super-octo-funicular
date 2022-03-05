import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../../components/GoalForm'
import Spinner from '../../components/Spinner'
import GoalItem from '../../components/GoalItem'
import { getGoals, reset } from '../../features/goals/goalSlice'
function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector((state) => state.goals)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }
    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Welcome {user && user.name}</h1>
            <p>Goals Dasboard</p>
          </div>
        </div>
        <GoalForm />
        <div className="row">
          <div className="col-12">
            {goals.length > 0 ? (
              <>
                {goals.map((goal) => (
                  <GoalItem key={goal._id} goal={goal} />
                ))}
              </>
            ) : (
              <>
                <h3>you have not set any goals</h3>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
