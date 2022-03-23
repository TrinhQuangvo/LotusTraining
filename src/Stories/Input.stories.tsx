import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '../Components/Input';
export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;
export const Text: ComponentStory<typeof Input> = () => <Input type="text"></Input>;
export const TextFullWidth: ComponentStory<typeof Input> = () => <Input type="text" isFullWidth={true}></Input>;

export const Password: ComponentStory<typeof Input> = () => <Input type="password"></Input>;
export const PasswordFullWidth: ComponentStory<typeof Input> = () => <Input type="password" isFullWidth={true}></Input>;

export const Email: ComponentStory<typeof Input> = () => <Input type="email"></Input>;
export const EmailFullWidth: ComponentStory<typeof Input> = () => <Input type="email" isFullWidth={true}></Input>;
