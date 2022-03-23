import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import User from '../Components/User';

export default {
  title: 'Components/User',
  component: User,
} as ComponentMeta<typeof User>;
const data: any = [{ username: 'Nguyen Van A', email: 'chauhoang.dh@hmail.com' }];

export const EmptyUser: ComponentStory<typeof User> = () => <User />;
export const DefaultUser: ComponentStory<typeof User> = () => <User data={data} />;
