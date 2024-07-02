import React from 'react'
import { Preview } from '@storybook/react';



window.React = React


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story, { globals } ) => {
      console.log('globals', globals)

      return (
        <Story />
    )},
  ],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'system',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: ['circlehollow', 'circlehollow', 'circlehollow'],
        // Array of plain string values or MenuItem shape (see below)
        items: [
          { 
            title: 'Light',
            value: 'light',
            icon: 'circlehollow'
          }, 
          {
            title: 'Dark',
            value: 'dark',
            icon: 'circle'
          }, 
          {
            title: 'System',
            value: 'system',
            icon: 'globe'
          }],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
};



export default preview
