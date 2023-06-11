import type { ButtonHTMLAttributes, FC } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>
}
