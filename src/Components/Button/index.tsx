import './style.scss'
interface ButtonProps {
  status?: string;
  isFullWidth?: boolean;
  children?: string
}
const Button = (props: ButtonProps) => {
  const { status, isFullWidth = false } = props
  const renderClass = `btn btn-${status} ${isFullWidth ? 'btn-block' : ''}`

  return <button className={renderClass}> {props.children} </button>
}
export default Button
