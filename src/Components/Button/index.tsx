import { FC } from 'react';
import './style.scss'
interface ButtonProps {
  status?: string;
  isFullWidth?: boolean;
  children?: string
}
const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { status = 'default', isFullWidth = false } = props
  const renderClass = `btn btn-${status} ${isFullWidth ? 'btn-block' : ''}`

  return <button className={renderClass}> {props.children} </button>
}
export default Button
