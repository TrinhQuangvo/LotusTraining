import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkout from '../Components/Checkout';

export default {
  title: '../Components/Checkout',
  component: Checkout,
} as ComponentMeta<typeof Checkout>;
const data: any = [{ name: 'Macbook Pro 14', price: 2200, currency: 'USD' }];
export const DefaultCheckout = () => <Checkout data={data} />;
export const EmptyCheckout = () => <Checkout />;
