import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Modal } from '../components/modal/modal'

export default {
  title: 'Components/Modals/modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Default = Template.bind({})
