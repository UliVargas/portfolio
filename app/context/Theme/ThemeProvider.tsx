import { ReactNode, useReducer } from 'react'

import { themeReducer } from './themeReducer'
import { ThemeContext } from './ThemeContext'

export interface InitialState {
  theme: string
}

const initialState: InitialState = {
  theme: 'light'
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState)

  const changeTheme = (theme: string) => {
    dispatch({
      type: 'UI - ChangeTheme',
      payload: theme
    })

    localStorage.setItem('theme', theme)
  }

  return (
    <ThemeContext.Provider
      value={{
        // Estado
        ...state,

        // Acciones
        changeTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
