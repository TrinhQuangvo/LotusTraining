import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './../Components/Button'
export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>

export const Danger: ComponentStory<typeof Button> = () => (
  <Button status='danger' >Danger Button </Button>
)
export const DangerFullWidth: ComponentStory<typeof Button> = () => (
  <Button status='danger' isFullWidth={true} >Danger Button But Full Width</Button>
)
export const Warning: ComponentStory<typeof Button> = () => (
  <Button status='warning'>Warning Button</Button>
)
export const WarningFullWidth: ComponentStory<typeof Button> = () => (
  <Button status='warning' isFullWidth={true} >Warning Button But Full Width</Button>
)
export const Success: ComponentStory<typeof Button> = () => (
  <Button status='success'>Success Button</Button>
)
export const SuccessFullWidth: ComponentStory<typeof Button> = () => (
  <Button status='success' isFullWidth={true} >Success Button But Full Width</Button>
)
export const DefaultButton: ComponentStory<typeof Button> = () => (
  <Button>Default Button</Button>
)
export const DefaultFullWidth: ComponentStory<typeof Button> = () => (
  <Button status='default' isFullWidth={true} >Default Button But Full Width</Button>
)
