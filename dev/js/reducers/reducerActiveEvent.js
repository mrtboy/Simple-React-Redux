export default (state=null, action) => {
  switch(action.type) {
    case 'EVENT_SELECTED':
      return action.payload;
  }
  return state;
};