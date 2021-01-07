//reducers
declare interface AppState {
  appReducer: AppReducerState;
}

declare interface AppReducerState {

}

declare interface ActionTypes {
  type: string;
  payload?: any;
  error?: string;
}
