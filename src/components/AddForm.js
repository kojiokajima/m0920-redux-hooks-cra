import React, { useRef } from 'react'
import { connect } from 'react-redux'
import {useSelector, useDispatch} from 'react-redux'

// const AddForm = ({ newToDo }) => {
const AddForm = () => {
  const refContainer = useRef(null)
  const dispatch = useDispatch()

  const addToDo = (content) => {
    dispatch({ type: 'NEW_TO_DO', payload: content })
    // console.log(payload)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // newToDo({ content: refContainer.current.value })

    addToDo({ content: refContainer.current.value })
    // dispatch({ type: 'NEW_TO_DO', payload: refContainer.current.value })



    refContainer.current.value = ''
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new todo:</label>
        <input type='text' ref={refContainer} />
      </form>
    </div>
  )
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     newToDo: (content) => {
//       dispatch({ type: 'NEW_TO_DO', payload: content })
//       console.log(content)
//     },
//   }
// }

// export default connect(null, mapDispatchToProps)(AddForm)
export default AddForm
