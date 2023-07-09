import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActonCreators from '../store/action-creators'

export const useActions = () => {
  const dispatch = useDispatch()
  // console.log(ActonCreators)
  return bindActionCreators(ActonCreators, dispatch)
}
