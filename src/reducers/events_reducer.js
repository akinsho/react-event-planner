const eventsReducer = (state = [ { name: 'party', date: '2017-04-03' } ], action) => {

  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default eventsReducer;
