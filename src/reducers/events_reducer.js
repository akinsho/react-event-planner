const eventsReducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default eventsReducer;
