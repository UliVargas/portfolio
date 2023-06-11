import { createContext } from 'react'

interface ContextProps {
  // Estado
  theme: string

  // Acciones
  changeTheme: (theme: string) => void
}

export const ThemeContext = createContext({} as ContextProps)
