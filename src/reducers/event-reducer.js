const eventName = (store=[], action) => {
  switch (action.type) {
  case "ADD_EVENT_NAME":
    return [...store, {name: action.name, id: action.id}];
  default:
    return store;
  }
};

export default eventName;
