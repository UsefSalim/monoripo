import type { Preview } from '@storybook/react';
import { ConfigComponent } from '../src/components/config/configComponent/configComponent';
import React from 'react';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'custom', // Set the default background
            values: [
                { name: 'light', value: '#ffffff' }, // Light background
                { name: 'dark', value: '#000000' }, // Dark background
                { name: 'custom', value: '#f0f0f0' }, // Custom background
            ],
        },
    },
    decorators: [
        (StoryFn) => (
            <ConfigComponent solution='med'>
                <StoryFn />
            </ConfigComponent>
        ),
    ],
};

export default preview;
