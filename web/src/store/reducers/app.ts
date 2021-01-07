const initialState: AppReducerState = {
  alert: {
    severity: "error",
    open: false,
    message: "",
    secondsToHide: 5,
  }
}

const app = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    default:
      return state
  }
}

export default app
