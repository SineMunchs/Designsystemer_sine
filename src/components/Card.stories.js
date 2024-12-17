import Card from './card.vue';

export default {
  title: 'Components/Card',
  component: Card,

  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subHeader: { control: 'text' },
    mediaHref: { control: 'text' },
    supportingText: { control: 'text' },
    buttonText: { control: 'text' }
  }
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args" />'
});

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