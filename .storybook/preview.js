import { setup } from '@storybook/vue3'
import { createRouter, createWebHistory } from 'vue-router'
import "../src/assets/main.css"

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="margin: 2em;"><story /></div>'
    })
  ]
};

// opsæt Vue Router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/cat/:id',
      component: { template: '<div>Cat Details</div>' }
    }
  ]
});

setup(app => {
  app.use(router)
});

export default preview;