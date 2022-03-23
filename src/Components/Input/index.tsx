import { FC } from 'react';
import './style.scss';
interface InputProps {
  status?: string;
  isFullWidth?: boolean;
  children?: string;
}
const Input: FC<InputProps> = (props: InputProps) => {
  const { status = 'default', isFullWidth = false } = props;
  const renderClass = `input input-${status} ${isFullWidth ? 'input-block' : ''}`;
  return <input className={renderClass}> {props.children} </input>;
};
export default Input;
