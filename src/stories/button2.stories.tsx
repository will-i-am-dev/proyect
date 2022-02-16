import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../components/buttons/button2'

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' }
    },
    variant: {
      options: ['primary',
        'outline',
        'ghost',
        'light',
        'dark'],
      control: { type: 'select' } // Automatically inferred when 'options' is defined
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
  variant: 'primary'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: (
    <div className='flex gap-2 items-center'>

      <span>Search</span>
    </div>
  )
}
