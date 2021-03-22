const initState = {
  toDoList: [
    { id: 1, content: 'Bake a cake', isDone: false },
    { id: 2, content: 'Buy Sweet Potato', isDone: false },
  ],
}

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_TO_DO':
      return {
        ...state,
        toDoList: state.toDoList.filter((item) => item.id !== action.payload),
      }
    case 'NEW_TO_DO':
      action.payload.id = Math.random()
      action.payload.isDone = false
      return {
        ...state,
        toDoList: [...state.toDoList, action.payload],
      }
    case 'DONE_TO_DO':
      return {
        ...state,
        toDoList: state.toDoList.map((item) => {
          item.id === action.payload && (item.isDone = !item.isDone)
          return item
        }),
      }
    default:
      break
  }
  return state
}

export default listReducer
