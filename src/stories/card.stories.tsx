import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card } from '../components/common/card'

export default {
  title: 'Components/Cards/Card',
  component: Card,
  argTypes: {
    children: {
      control: { type: 'text' }
    },
    variant: {
      options: ['primary',
        'dark'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    }
  }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
}
