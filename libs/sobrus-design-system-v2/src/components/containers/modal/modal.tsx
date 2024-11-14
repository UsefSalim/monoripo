import React, { MouseEvent, useRef, Dispatch, ReactNode, forwardRef, useEffect } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { RiCloseFill } from 'react-icons/ri';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { IconButton } from '@/actions';
import { DivGlobalProps } from '@/components/types';
import { Zoom } from '@/animations';
import './modal.scss';
export interface ModalProps extends DivGlobalProps {
    /**
     * Function to handle closing the modal.
     * This should update the state that controls the `open` status of the modal.
     */
    setOpen: Dispatch<React.SetStateAction<boolean>>;
    /**
     * Defines the size of the modal.
     * Available sizes are 'sm' (small), 'md' (medium), 'lg' (large), and 'xl' (extra-large).
     * Default is 'md'.
     */
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Modal Component
 *
 * The `Modal` component displays content in a popup overlay with customizable sizes.
 * It provides an optional closing mechanism by clicking outside the modal.
 *
 * ### Props:
 * - `setOpen`: Function to handle modal close action.
 * - `size`: Optional. The size of the modal (sm, md, lg, xl). Default is 'md'.
 * - `children`: The content to display inside the modal.
 * - `className`: Optional. Additional class names for styling the modal.
 *
 * ### Usage:
 * ```JSX
 *
 * import { Modal, ModalHeader, ModalBody, ModalFooter } from "@sobrus-com/sobrus-design-system";
 *
 * const Example = () => {
 *    const [modalOpen, setModalOpen] = React.useState(true);
 *
 *    return (
 *      <Modal setOpen={setModalOpen} size="md">
 *        <ModalHeader setOpen={setModalOpen} title="Modal Title" />
 *        <ModalBody>
 *          <p>Your modal body content...</p>
 *        </ModalBody>
 *        <ModalFooter>
 *          <button>Close</button>
 *        </ModalFooter>
 *      </Modal>
 *    );
 * }
 * ```
 */
const Modal = forwardRef<HTMLDivElement, ModalProps>(
    ({ setOpen, children, size = 'md', onClick, className, ...props }, ref) => {
        useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = '';
            };
        }, []);
        const classes = classNames('sob-v2-modal', `sob-v2-modal-${size}`, className);
        const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
            onClick?.(e);
        };
        return (
            <>
                {ReactDOM.createPortal(
                    <div className='sob-v2-modal-container' ref={ref} onClick={() => setOpen(false)}>
                        <div className={classes} {...props}>
                            <Zoom onClick={handleModalClick} in timeout={300} className='sob-v2-card'>
                                <div>{children}</div>
                            </Zoom>
                        </div>
                    </div>,
                    document.body,
                )}
            </>
        );
    },
);
Modal.displayName = 'Modal';

export interface ModalHeaderProps extends Omit<DivGlobalProps, 'title'> {
    /**
     * The title of the modal header.
     */
    title?: ReactNode;
    /**
     * If true, hides the close button on the modal header.
     */
    hideCloseBtn?: boolean;
    /**
     * If true, shows the "Go back" button.
     */
    showGobackbtn?: boolean;
    /**
     * Function to control the open/close state of the modal.
     */
    setOpen: Dispatch<React.SetStateAction<boolean>>;
    /**
     * Callback function triggered when the "Go back" button is clicked.
     */
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

/**
 * ModalHeader Component
 *
 * Displays the modal header, including a title, a close button, and optionally a "Go back" button.
 *
 * ### Props:
 * - `title`: The title to display in the header.
 * - `hideCloseBtn`: Optional. If true, hides the close button.
 * - `showGobackbtn`: Optional. If true, shows a "Go back" button.
 * - `setOpen`: Function to control modal open/close state.
 * - `onClick`: Optional. Function for "Go back" button click events.
 */
const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
    ({ className, hideCloseBtn, showGobackbtn = false, setOpen, onClick, title, ...props }, ref) => {
        const classes = classNames('sob-v2-modal-header', className);

        return (
            <div className={classes} ref={ref} {...props}>
                <div className='sob-v2-modal-header--back-container'>
                    {showGobackbtn ? (
                        <IconButton size='sm' onClick={onClick} type='button'>
                            <MdOutlineKeyboardArrowLeft size={22} />
                        </IconButton>
                    ) : null}
                    {title ? <p className='sob-v2-modalHeader--title'>{title}</p> : <div></div>}
                </div>

                {!hideCloseBtn ? (
                    <IconButton size='sm' onClick={() => setOpen(false)} type='button'>
                        <RiCloseFill size={22} />
                    </IconButton>
                ) : null}
            </div>
        );
    },
);
ModalHeader.displayName = 'ModalHeader';

/**
 * ModalBody Component
 *
 * Displays the body content of the modal.
 *
 * ### Props:
 * - `children`: The content to display inside the modal body.
 * - `className`: Optional. Custom class names for the modal body.
 */
const ModalBody = forwardRef<HTMLDivElement, DivGlobalProps>(({ className, children, style, ...props }, ref) => {
    const classes = classNames('sob-v2-modal-body', className);

    return (
        <div ref={ref} {...props} className={classes} style={style}>
            {children}
        </div>
    );
});
ModalBody.displayName = 'ModalBody';

/**
 * ModalFooter Component
 *
 * Displays the footer content of the modal, typically used for actions like submit/cancel buttons.
 *
 * ### Props:
 * - `children`: The content to display inside the modal footer.
 * - `className`: Optional. Custom class names for the modal footer.
 */
const ModalFooter = forwardRef<HTMLDivElement, DivGlobalProps>(({ className, children, style, ...props }, ref) => {
    const classes = classNames('sob-v2-modalFooter', className);

    return (
        <div ref={ref} {...props} className={classes} style={style}>
            {children}
        </div>
    );
});
ModalFooter.displayName = 'ModalFooter';

export { ModalHeader, ModalBody, Modal, ModalFooter };
