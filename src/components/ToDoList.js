import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ToDos from './ToDos'
import AddForm from './AddForm'
import FilterToDos from './FilterToDos'

const ToDoList = (props) => {
  // const { toDoList, removeToDo, markToDo } = props

  //  stateの中にはstoreのstateが入る
  const toDoList = useSelector((state) => state.toDoList) // mapStateToPropsみたいなもん
  const dispatch = useDispatch()


  const [filterVal, setFilterVal] = useState('SHOW_ALL')

  // const deleteToDo = (id) => {
  //   dispatch({ type: 'DELETE_TO_DO', payload: id })
  // }
  
  // const doneToDo = (id) => {
  //   dispatch({ type: 'DONE_TO_DO', payload: id })
  // }

  const deleteToDo = (id) => {
    dispatch({ type: 'DELETE_TO_DO', payload: id })
  }
  const doneToDo = (id) => {
    dispatch({ type: 'DONE_TO_DO', payload: id })
  }

  const getVisibleToDos = (toDoList, filterVal) => {
    switch (filterVal) {
      case 'SHOW_COMPLETED':
        return toDoList.filter((item) => item.isDone)
      case 'SHOW_ACTIVE':
        return toDoList.filter((item) => !item.isDone)
      case 'SHOW_ALL':
        return toDoList
      default:
        break
    }
  }

  const visibleList = getVisibleToDos(toDoList, filterVal)

  const getCurrentView = (filterVal) => {
    switch (filterVal) {
      case 'SHOW_COMPLETED':
        return 'No completed task. Start doing something yo!!'
      case 'SHOW_ACTIVE':
        return "No more Todo's!! Yatta!!!"
      default:
        return 'Start doing something yo!!'
    }
  }

  const displayMessage = getCurrentView(filterVal)

  const filterFunc = (action) => {
    setFilterVal(action)
  }

  return (
    <>
      <FilterToDos filterFunc={filterFunc} filterVal={filterVal} />
      <ToDos
        toDoList={visibleList}
        doneToDo={doneToDo}
        deleteToDo={deleteToDo}
        filterVal={filterVal}
        emptyText={displayMessage}
      />
      <AddForm />
    </>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     toDoList: state.toDoList,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeToDo: (id) => {
//       dispatch({ type: 'DELETE_TO_DO', payload: id })
//     },
//     markToDo: (id) => {
//       dispatch({ type: 'DONE_TO_DO', payload: id })
//     },
//   }
// }

export default ToDoList
