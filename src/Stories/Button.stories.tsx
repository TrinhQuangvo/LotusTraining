import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './../Components/Button'
export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>

export const Primary: ComponentStory<typeof Button> = () => (
  <Button backgroundColor='#ff0' label='Button' />
)

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button backgroundColor='red' label='😄👍😍💯' />
)

export const Tertiary: ComponentStory<typeof Button> = () => (
  <Button backgroundColor='blue' label='📚📕📈🤓' />
)
