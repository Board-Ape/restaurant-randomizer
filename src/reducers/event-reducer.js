const eventName = (state=[], action) => {
  switch (action.type) {
    case "ADD_EVENT_NAME":
      return [...state, {name: action.name, id: action.id}]
    default:
      return state
  }
}
 export default eventName;
