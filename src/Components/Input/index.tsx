import { FC } from 'react';
import './style.scss';
interface InputProps {
  isFullWidth?: boolean;
  isPw?: boolean;
  type: string;
}
const Input: FC<InputProps> = (props: InputProps) => {
  const { type = 'text', isFullWidth = false, isPw = false } = props;
  const renderClass = `input ${isFullWidth ? 'input-block' : ''}`;
  console.log(renderClass);

  return <input type={isPw ? 'password' : type} className={renderClass}></input>;
};
export default Input;
