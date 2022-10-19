import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, type TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Description</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Placeholder',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
