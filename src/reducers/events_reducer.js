const eventsReducer = (state = [{ id:1, date:'2017-04-01'}], action) => {

  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default eventsReducer;
