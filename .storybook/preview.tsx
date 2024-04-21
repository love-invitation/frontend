import '../src/styles/globals.css';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => {
      return (
        <>
          <div id='modal' />
          <Story />
        </>
      );
    },
  ],
};

export default preview;