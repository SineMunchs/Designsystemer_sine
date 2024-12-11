import Card from './Card.vue';

// Default export with component metadata
export default {
  title: 'Components/Card',
  component: Card,
  // Optional: Add tags, parameters, decorators, etc.
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subHeader: { control: 'text' },
    mediaHref: { control: 'text' },
    supportingText: { control: 'text' },
    buttonText: { control: 'text' }
  }
};

// Create a template for your stories
const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args" />'
});

// Create different stories using the template
export const Default = Template.bind({});
Default.args = {
  title: 'Example Card',
  subHeader: 'Subtitle here',
  supportingText: 'This is the supporting text for the card.',
  buttonText: 'Click Me',
  mediaHref: 'https://picsum.photos/350/200'
};

export const NoMedia = Template.bind({});
NoMedia.args = {
  title: 'Card without Media',
  subHeader: 'Subtitle here',
  supportingText: 'This is a card example without media content.',
  buttonText: 'Learn More'
};

export const NoButton = Template.bind({});
NoButton.args = {
  title: 'Card without Button',
  subHeader: 'Subtitle here',
  supportingText: 'This is a card example without a button.',
  mediaHref: 'https://picsum.photos/350/200'
};