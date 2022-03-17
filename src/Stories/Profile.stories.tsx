import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Profile from '../Components/Profile';

export default {
  title: 'Components/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;
const data: any = [{ name: 'Nguyen Van A', age: '17', add: 'Ha Noi', phone: '123456' }];
export const ImageProfile = () => <Profile />;
export const DefaultProfile = () => <Profile data={data} />;
