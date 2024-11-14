import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { FormGroup, FormFeedback, FileInput } from '@/dataEntry';
import { Card } from '@/containers';

export default {
    title: 'Data entry/File dropzone',
    component: FileInput,
    subcomponents: { FormFeedback, FormGroup },
    argTypes: {
        type: {
            options: ['image', 'file'],
            control: 'select',
        },
        selectedFiles: { control: false },
        setSelectedFile: { control: false },
        imageSource: { control: false },
    },
} as Meta<typeof FileInput>;

// Default FileInput Story
export const Default: StoryObj<typeof FileInput> = {
    render: (args) => {
        const [selectedFile, setSelectedFile] = useState<File[] | null>(null);

        const handleFileUpload = (file: File[] | null) => {
            setSelectedFile(file);
        };

        return (
            <Card>
                <FormGroup>
                    <FileInput {...args} selectedFiles={selectedFile} onFileUpload={(file) => handleFileUpload(file)} />
                    <FormFeedback>Sweet! that name is available</FormFeedback>
                </FormGroup>
            </Card>
        );
    },
    args: {
        progressValues: [50],
        text: 'Glissez-déposez vos fichiers ici',
        accept: '.pdf, .png, .jpeg, .jpg',
        maxSize: 2242880,
        multiple: false,
        preview: false,
        disableOnSelect: true,
        remove: false,
        filesLinks: ['https://test.com'],
    },
};
