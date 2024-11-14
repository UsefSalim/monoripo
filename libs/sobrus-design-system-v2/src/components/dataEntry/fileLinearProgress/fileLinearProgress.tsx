import React, { Dispatch, FC, ReactNode, useEffect, useRef, useState } from 'react';
import emptyFile from '@/assets/emptyFile.png';
import fileHover from '@/assets/fileInputHover.svg';
import { formatBytes } from '@/functions';
import { Container, Row, Col } from '@/grid';
import { useHover, useOutSideClick } from '@/hooks/hooks';
import ReactDOM from 'react-dom';
import { LazyLoadImage } from '@/contentDisplay';
import { CircularProgress, Tooltip } from '@/feedbacks';
import { IconButton } from '@/actions';
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';
import classNames from 'classnames';

import './fileLinearProgress.scss';

interface FileProgressProps {
    files?: File[] | null;
    maxSize: number;
    preview?: boolean;
    handleRemoveFile: (files: File[] | null) => void;
    errorMessage?: ReactNode;
    progressValues?: number[] | string[];
    filesLinks?: string[];
    remove?: boolean;
    disableOnSelect?: boolean;
    inputRef: React.RefObject<HTMLInputElement>;
}

export const FileProgress: FC<FileProgressProps> = ({
    progressValues,
    maxSize,
    files,
    preview,
    handleRemoveFile,
    errorMessage,
    filesLinks,
    remove,
    disableOnSelect,
    inputRef,
}) => {
    const wrapperRef = useRef(null);
    const [open, setOpen] = useState<File | null | string>(null);
    useOutSideClick(wrapperRef, () => setOpen(null));
    return (
        <Container>
            {open ? (
                ReactDOM.createPortal(
                    <div className='sob-v2-modal-container'>
                        <div className='sob-v2-modal'>
                            <div className='imagepreview__container' ref={wrapperRef}>
                                <LazyLoadImage src={typeof open === 'string' ? open : URL.createObjectURL(open)} />
                            </div>
                        </div>
                    </div>,
                    document.body,
                )
            ) : (
                <></>
            )}
            <Row>
                {files ? (
                    files?.map((file, index) => {
                        return (
                            <Col xs={files.length > 1 ? 6 : 12} key={file.name + index}>
                                <ImageViewer
                                    {...{
                                        setOpen,
                                        progressValues: progressValues ? progressValues[index] : undefined,
                                        file,
                                        maxSize,
                                        preview,
                                        handleRemoveFile,
                                        files,
                                        errorMessage,
                                        fileLink: filesLinks ? filesLinks[index] : undefined,
                                        remove,
                                        disableOnSelect,
                                        inputRef,
                                    }}
                                />
                            </Col>
                        );
                    })
                ) : (
                    <></>
                )}
            </Row>
        </Container>
    );
};

interface ImageViewerProps {
    progressValue?: number | string;
    file: File;
    maxSize: number;
    preview?: boolean;
    setOpen: Dispatch<React.SetStateAction<File | null | string>>;
    handleRemoveFile: (files: File[] | null) => void;
    files?: File[] | null;
    errorMessage?: ReactNode;
    fileLink?: string;
    remove?: boolean;
    disableOnSelect?: boolean;
    inputRef: React.RefObject<HTMLInputElement>;
}

const ImageViewer = ({
    progressValue,
    maxSize,
    file,
    files,
    preview,
    setOpen,
    handleRemoveFile,
    errorMessage,
    fileLink,
    remove,
    disableOnSelect,
    inputRef,
}: ImageViewerProps) => {
    const [hoverRef, isHovred] = useHover<HTMLDivElement>();
    const classes = classNames('sob-v2-fileLinearProgress', disableOnSelect ? 'sob-v2-fileLinearProgress-mt' : '');
    useEffect(() => {
        function adjustFileNameWidth() {
            const FilepreviewContainer = document.querySelector('.sob-v2-fileLinearProgress__Container') as HTMLElement;
            const titleContainer = document.querySelector('.sob-v2-linearProgress-container') as HTMLElement;

            if (!FilepreviewContainer || !titleContainer) {
                return; // Exit the function if elements are missing
            }
            const containerWidth = FilepreviewContainer.offsetWidth;
            const availableWidth = containerWidth - 200;
            const remWidth = availableWidth / 16;
            titleContainer.style.maxWidth = `${remWidth}rem`;
        }

        // Call immediately and on load to ensure it executes after the DOM is fully ready
        setTimeout(adjustFileNameWidth, 10);

        window.addEventListener('resize', adjustFileNameWidth);

        return () => {
            window.removeEventListener('resize', adjustFileNameWidth);
        };
    }, [files]);
    const handleDownload = (url: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className={classes}>
            <div
                className='sob-v2-fileLinearProgress__Container'
                onClick={() => {
                    disableOnSelect && inputRef && inputRef.current?.click();
                }}
            >
                <div
                    onMouseOver={(e) => e.stopPropagation()}
                    className={`${
                        preview
                            ? 'sob-v2-fileLinearProgress__imagePrevewContainer'
                            : 'sob-v2-fileLinearProgress__imageContainer'
                    }`}
                >
                    {preview ? (
                        <div
                            className='sob-v2-fileLinearProgress__previeHover'
                            ref={hoverRef}
                            onClick={(e) => {
                                e.stopPropagation();
                                preview && setOpen(fileLink || file);
                            }}
                        >
                            <img className='sob-v2-file__Previewimg' src={fileLink || URL.createObjectURL(file)} />
                            <img className='sob-v2-file__Previewimg__hover' src={fileHover} />
                        </div>
                    ) : (
                        <img className='sob-v2-file__img' src={emptyFile} />
                    )}
                    {!preview ? (
                        <div className='sob-v2-fileLinearProgress__image__extention'>
                            {file?.name?.split('.')[file?.name?.split('.').length - 1]?.toUpperCase() ?? ''}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className='sob-v2-linearProgress-container'>
                    <p data-tooltip-id={file?.name} className='file-name'>
                        {file?.name ? file?.name : ''}
                    </p>
                    <Tooltip id={file?.name} content={<p>{file?.name}</p>} />
                    <div className='file__infos'>
                        {file?.size > maxSize ? (
                            <p className='file-error'>{errorMessage}</p>
                        ) : (
                            <p className='file-size'>{file?.size ? formatBytes(file?.size) : ''}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className='sob-v2-linearProgress-actions__container'>
                {!preview && fileLink ? (
                    <IconButton size='sm' color='tertiary' onClick={() => handleDownload(fileLink)}>
                        <AiOutlineEye size={21} />
                    </IconButton>
                ) : (
                    <></>
                )}
                {remove && (file?.size > maxSize || !progressValue || +progressValue === 0) ? (
                    <IconButton
                        size='sm'
                        onClick={(e) => {
                            e.stopPropagation();
                            const t = files?.filter((el) => el.lastModified !== file.lastModified);
                            handleRemoveFile(t && t.length > 0 ? t : null);
                        }}
                        color='danger-tertiary'
                    >
                        <AiOutlineDelete size={21} color='#E74C3C' />
                    </IconButton>
                ) : progressValue && +progressValue > 0 ? (
                    <div className='sob-v2-linearProgress__progress'>
                        <CircularProgress value={+progressValue} />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};
