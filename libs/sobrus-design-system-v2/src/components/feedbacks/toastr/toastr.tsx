import React, { FC, ReactNode } from 'react';
import { ToastContainer, ToastContainerProps as DefaultToastContainerProps, toast } from 'react-toastify';
import { VscCheck, VscInfo, VscWarning, VscChromeClose } from 'react-icons/vsc';
import { RiErrorWarningLine } from 'react-icons/ri';

import './toastr.scss';
/**
 *
  * Push notifications to your visitors with a toast, a lightweight and easily customizable alert message and color...

  * It's based on React-toastify https://fkhadra.github.io/react-toastify/introduction
 *
 * ###Usage
 *
 *```JSX
 *
 * import {Toast, notify} from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (
 *      <div style={{ width: "100%", backgroundColor: "#F8F8F8", padding: 30 }}>
            <Toast></Toast>
            <Button onClick={() => {
                notify({ type: "warning", msg: "chi 7aja trat avec succès", delay: 5000 })
            }}>Open Toast</Button>
        </div>
 *    );
*   }
 * ```
 *
 */

export type ToastContainerProps = DefaultToastContainerProps;

export interface NotifyProps {
    /**
     * Set the toast type.
     * `One of: 'info', 'success', 'warning', 'danger', 'default'`
     */
    type?: 'danger' | 'success' | 'info' | 'warning' | 'default';
    msg?: ReactNode;
    delay?: number;
    /**
     * Set the default position to use.
     * `One of: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'`
     * `Default: 'top-right'`
     */
    position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
    /**
     * Hide or show the progress bar.
     * `Default: false`
     */
    hideProgressBar?: boolean;
    /**
     * Remove the toast when clicked.
     * `Default: true`
     */
    closeOnClick?: boolean;
    /**
     * Pause the timer when the mouse hover the toast.
     * `Default: true`
     */
    pauseOnHover?: boolean;
    /**
     * Whether or not to display the newest toast on top.
     * `Default: false`
     */
    newestOnTop?: boolean;
    /**
     * An optional css class to set.
     */
    closeToast?: () => void;
}

const notify = ({
    type = 'info',
    msg,
    delay = 5000,
    position = 'top-right',
    hideProgressBar = true,
    closeOnClick = true,
    pauseOnHover = true,
    closeToast,
}: Partial<NotifyProps>) => {
    let params = {
        background: '#ECF9F8 0% 0% no-repeat padding-box',
        icon: <VscCheck color='#fff' size={40} />,
        iconColor: '#1BBAAC',
    };

    switch (type) {
        case 'success':
            params = {
                background: '#ECF9F8 0% 0% no-repeat padding-box',
                icon: <VscCheck color='#fff' size={40} />,
                iconColor: '#1BBAAC',
            };
            break;
        case 'danger':
            params = {
                background: '#F8EEEB 0% 0% no-repeat padding-box',
                icon: <RiErrorWarningLine color='#fff' size={40} />,
                iconColor: '#F05A29',
            };
            break;
        case 'info':
            params = {
                background: '#EBF3F8 0% 0% no-repeat padding-box',
                icon: <VscInfo color='#fff' size={40} />,
                iconColor: '#55ACED',
            };
            break;
        case 'warning':
            params = {
                background: '#FFF8EB 0% 0% no-repeat padding-box',
                icon: <VscWarning color='#fff' size={40} />,
                iconColor: '#EAA207',
            };
            break;
        default:
            params = {
                background: '#EBF3F8 0% 0% no-repeat padding-box',
                icon: <VscInfo color='#fff' size={40} />,
                iconColor: '#55ACED',
            };
            break;
    }

    return toast(
        <div className='sob-v2-toastr__container' style={{ background: params?.background }}>
            <div className='sob-v2-toastr__icon' style={{ backgroundColor: params?.iconColor }}>
                {params?.icon}
            </div>
            <div className='sob-v2-toastr__msg'>
                <p>{msg}</p>
            </div>
            <div className='sob-v2-toastr__close' onClick={closeToast}>
                {<VscChromeClose color={params?.iconColor} />}
            </div>
        </div>,
        {
            position: position,
            autoClose: delay,
            hideProgressBar,
            closeOnClick,
            pauseOnHover,
            progressStyle: { background: params?.iconColor },
        },
    );
};

const Toast: FC<ToastContainerProps> = ({ ...props }) => {
    return <ToastContainer {...props} />;
};
export { Toast, notify, toast };
