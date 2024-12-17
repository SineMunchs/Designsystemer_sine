// src/components/logo.stories.js
import Logo from './Logo.vue'

export default {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the logo'
    }
  }
}

// Create a reusable template
const Template = (args) => ({
  components: { Logo },
  setup() {
    return { args }
  },
  template: '<Logo v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  size: 'medium'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large'
}