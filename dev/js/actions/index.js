export const selectEvent = (event) => {
  console.log("You Clicked in event: ", event.name);
  return {
    type: "EVENT_SELECTED",
    payload: event
  }
};
