import { Meta, StoryObj } from '@storybook/react'
import { Heading, type HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum solares',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: { type: 'select' },
      defaultValue: 'md',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'As H1 heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas pode ser alterado com a propriedade `as`',
      },
    },
  },
}
