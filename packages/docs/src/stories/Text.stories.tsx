import { Meta, StoryObj } from '@storybook/react'
import { Text, type TextProps } from '@ignite-ui/react'
import { fontSizes } from '@ignite-ui/tokens'

const options = Object.entries(fontSizes).map(([key, value]) => key)

export default {
  title: 'Surfaces/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum solares',
    size: 'md',
  },
  argTypes: {
    size: {
      options,
      control: { type: 'select' },
      defaultValue: 'md',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'As strong',
    as: 'strong',
  },
}
