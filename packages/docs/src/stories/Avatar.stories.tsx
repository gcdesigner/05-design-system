import { Meta, StoryObj } from '@storybook/react'
import { Avatar, type AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gcdesigner.png',
    alt: 'Gabriel Costa',
  },
  argTypes: {
    src: {
      control: 'text',
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
