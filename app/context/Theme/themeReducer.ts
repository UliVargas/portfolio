import { InitialState } from './ThemeProvider'

type ActionTypes = {
  type: 'UI - ChangeTheme'
  payload: string
}

export const themeReducer = (
  state: InitialState,
  action: ActionTypes
): InitialState => {
  switch (action.type) {
    case 'UI - ChangeTheme':
      return {
        ...state,
        theme: action.payload
      }
    default:
      return state
  }
}
