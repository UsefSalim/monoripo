import React, { useRef, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './modal';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/actions';
import { DatePicker, InputSelect } from '@/dataEntry';

export default {
    title: 'Containers/Modal',
    component: Modal,
    // subcomponents: { ModalHeader, ModalBody, ModalFooter },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg', 'xl'],
            control: 'select',
        },
    },
} as Meta<typeof Modal>;

export const Default: StoryObj<typeof Button> = {
    render: (args) => {
        const [modalOpen, setModelOpen] = useState(false);
        const [modalOpenoverflow, setModalOpenoverflow] = useState(false);
        const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | undefined>('md');
        const [value, setvalue] = useState(null);
        const [button, setButton] = useState(false);
        const selectRef = useRef<any | null>(null);

        return (
            <div
                style={{
                    width: '100%',
                }}
            >
                <div style={{ marginBottom: 30, width: '20%' }}>
                    <div style={{ display: 'flex', gap: 12 }}>
                        <Button
                            color='primary'
                            onClick={() => {
                                setSize('sm');
                                setModelOpen(true);
                            }}
                        >
                            open sm
                        </Button>
                        <Button
                            color='primary'
                            onClick={() => {
                                setSize('md');
                                setModelOpen(true);
                            }}
                        >
                            open md
                        </Button>
                        <Button
                            color='primary'
                            onClick={() => {
                                setSize('lg');
                                setModelOpen(true);
                            }}
                        >
                            open lg
                        </Button>
                        <Button
                            color='primary'
                            onClick={() => {
                                setSize('md');
                                setModalOpenoverflow(true);
                            }}
                        >
                            open overflow
                        </Button>
                    </div>
                    {modalOpen ? (
                        <Modal setOpen={() => setModelOpen(false)} size={size ?? args?.size}>
                            <ModalHeader
                                setOpen={() => setModelOpen(false)}
                                onClick={() => console.log('goback click')}
                                title={'Header title'}
                                showGobackbtn={true}
                            />
                            <ModalBody>
                                <br />L extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit
                                ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du De Finibus Bonorum et
                                Malorum de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la
                                traduction anglaise de H. Rackham (1914). Lextrait standard de Lorem Ipsum utilisé
                                depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et
                                1.10.33 du De Finibus Bonorum et Malorum de Cicéron sont aussi reproduites dans leur
                                version originale, accompagnée de la traduction anglaise de H. Rackham (1914). Lextrait
                                standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les
                                curieux. Les sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum de Cicéron
                                sont aussi reproduites dans leur version originale, accompagnée de la traduction
                                anglaise de H. Rackham (1914).
                                <InputSelect
                                    value={value}
                                    onChange={(e: any) => {
                                        setvalue(e);
                                    }}
                                    options={[
                                        { label: 'jhgsd', value: 'dkjjdhasd' },
                                        { label: 'jhgsd', value: 'dkjjdhasd' },
                                        { label: 'jhgsd', value: 'dkjjdhasd' },
                                        { label: 'jhgsd', value: 'dkjjdhasd' },
                                        { label: 'jhgsd', value: 'dkjjdhasd' },
                                        { label: 'jhgsd', value: 'dkjjdhasd' },
                                        { label: 'jhgsd', value: 'dkjjdhasd' },
                                        { label: 'jhgsd', value: 'dkjjdhasd' },
                                        { label: 'jhgsd', value: 'dkjjdhasd' },
                                        { label: 'jhgsd', value: 'dkjjdhasd' },
                                        { label: 'jhgsd', value: 'dkjjdhasd' },
                                        { label: 'jhgsd', value: 'dkjjdhasd' },
                                    ]}
                                    isClearable
                                    menuPosition='fixed'
                                    ref={selectRef}
                                    autoFocus={true}
                                    inPortail
                                />
                            </ModalBody>

                            <ModalFooter>
                                <Button onClick={() => setModalOpenoverflow(true)} color='tertiary'>
                                    Tertiary button
                                </Button>
                                <Button color='primary' onClick={() => setModelOpen(!modalOpen)}>
                                    close
                                </Button>
                            </ModalFooter>
                        </Modal>
                    ) : (
                        <></>
                    )}
                    {modalOpenoverflow ? (
                        <Modal setOpen={() => setModalOpenoverflow(false)} size={'lg'}>
                            <ModalHeader
                                setOpen={() => setModalOpenoverflow(false)}
                                onClick={() => console.log('goback click')}
                                title={'Header title'}
                                showGobackbtn={true}
                            />
                            <ModalBody>
                                <InputSelect
                                    options={[
                                        { value: 'value1', label: 'label1' },
                                        { value: 'value2', label: 'label2' },
                                        { value: 'value3', label: 'label3' },
                                    ]}
                                    inPortail
                                />
                                <DatePicker onChange={() => console.log('')} intoPortal />
                            </ModalBody>
                            <ModalFooter>
                                <Button color='tertiary'>Tertiary button</Button>
                                <Button color='primary' onClick={() => setModalOpenoverflow(!modalOpenoverflow)}>
                                    close
                                </Button>
                            </ModalFooter>
                        </Modal>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        );
    },
};
