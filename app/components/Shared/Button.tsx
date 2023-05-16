import type { ButtonHTMLAttributes, FC } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

export const Button: FC<Props> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>
}
