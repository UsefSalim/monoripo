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
