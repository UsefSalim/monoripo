import React, { FC, useRef, Dispatch, ReactNode, useEffect } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { useOutSideClick } from '@/hooks/hooks';
import { IconButton } from '@/actions';
import { DivGlobalProps } from '@/components/types';
import { IoCloseOutline } from 'react-icons/io5';

import './sideModal.scss';

export interface SideModalProps extends DivGlobalProps {
    /**
     *  open modal Handler
     */
    setOpen: Dispatch<React.SetStateAction<boolean>>;
    /**
     * The size of the component
     */
    size?: 'md' | 'lg';
    /**
     * The size of the component
     */
    open?: boolean;
}

/**
  * Display user details or any kind of data in modal.
 *
 * ###Usage
 *
 *```JSX
 *
 * import { SideModal, SideModalHeader, SideModalBody } from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
  const [modalOpen, setModelOpen] = useState(false);
    return (
        <div
            style={{
                width: '100%',
                backgroundColor: 'rgb(248, 248, 248)',
                minHeight: '20vh',
                padding: 30,
            }}
        >
            <div style={{ marginBottom: 30, width: '20%' }}>
                <Button color='primary' onClick={() => setModelOpen(true)}>
                    open
                </Button>

                <SideModal setOpen={() => setModelOpen(false)} open={modalOpen} size={args?.size}>
                    <SideModalHeader
                        setOpen={setModelOpen}
                        bgIcon='#66CFC3'
                        icon={<img src={icon} />}
                        title='Modal title'
                    />
                    <SideModalBody>
                        <div>
                            <p>Empty Content</p>
                        </div>
                    </SideModalBody>
                </SideModal>
            </div>
        </div>
    );
 * ```
 *
 */

const SideModal: FC<SideModalProps> = ({ setOpen, children, size = 'md', className, open, ...props }) => {
    const wrapperRef = useRef(null);
    useOutSideClick(wrapperRef, () => setOpen(false));
    const classesCard = classNames('sob-v2-sideModal-popup', `sob-v2-sideModal-popup-${size}`, className);
    useEffect(() => {
        if (open) document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);
    return (
        <>
            {open ? (
                ReactDOM.createPortal(
                    <div className='sob-v2-sideModal-popupContainer'>
                        <div {...props} className={classesCard} ref={wrapperRef}>
                            {children}
                        </div>
                    </div>,
                    document.body,
                )
            ) : (
                <></>
            )}
        </>
    );
};

const SideModalBody: FC<DivGlobalProps> = ({ className, children, ...props }) => {
    const classes = classNames('sob-v2-sideModalBody', className);

    return (
        <div {...props} className={classes}>
            {children}
        </div>
    );
};

export interface SideModalHeaderProps {
    /**
     * Override or extend the styles applied to the component.
     */
    className?: string;
    /**
     * 	The title of the component.
     */
    title?: ReactNode;
    /**
     * 	The  background color of icon.
     */
    bgIcon?: string;
    /**
     * 	The icon of the component.
     */
    icon?: ReactNode;
    /**
     *  open modal Handler
     */
    setOpen: Dispatch<React.SetStateAction<boolean>>;
}

const SideModalHeader: FC<SideModalHeaderProps> = ({ className, icon, title, bgIcon, setOpen }) => {
    const classes = classNames('sob-v2-sideModalHeader', className);

    return (
        <div className={classes}>
            {icon ? <IconButton style={{ backgroundColor: bgIcon }}>{icon}</IconButton> : <></>}
            <p className='sob-v2-sideModalHeader-text'>{title}</p>
            <IconButton className='sob-v2-sideModalHeader-close' onClick={() => setOpen((prev) => !prev)}>
                <IoCloseOutline size={24} color='#627282' />
            </IconButton>
        </div>
    );
};

export { SideModal, SideModalBody, SideModalHeader };
