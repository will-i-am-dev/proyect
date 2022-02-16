import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from '../components/forms/input'

export default {
  title: 'Components/Inputs/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: { type: 'text' }
    },
    variant: {
      options: ['primary', 'outline'],
      control: { type: 'select' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    isLoading: {
      control: { type: 'boolean' }
    }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  placeholder: 'Ingrese el texto...',
  leftIcon: 'asdasd'
}
export const IsLoading = Template.bind({})
WithIcon.args = {
  placeholder: 'Ingrese el texto...',
  isLoading: true
}
