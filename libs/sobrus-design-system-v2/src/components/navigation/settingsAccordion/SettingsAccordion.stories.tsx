import { Meta, StoryFn } from '@storybook/react';
import {
    SettingsAccordion,
    SettingsAccordionItem,
    SettingsAccordionItemHeading,
    SettingsAccordionItemButton,
    SettingsAccordionPanelItem,
    SettingsAccordionPanel,
} from '@/navigation';

export default {
    title: 'Navigation/Settings Menu',
    component: SettingsAccordion,
    subcomponents: {
        SettingsAccordionItem,
        SettingsAccordionItemHeading,
        SettingsAccordionItemButton,
        SettingsAccordionPanelItem,
        SettingsAccordionPanel,
    },
    parameters: {
        docs: {
            description: {
                component:
                    '⚠️ **Deprecated**: Use `vtabs` instead. This component will be removed in a future release.',
            },
        },
    },
} as Meta<typeof SettingsAccordion>;
