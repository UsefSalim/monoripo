/* eslint-disable react/display-name */
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { FileProgress } from '@/dataEntry';
import defaultFileSource from '@/assets/upload-file.png';
import defaultImageSource from '@/assets/addFile.svg';
import classNames from 'classnames';
import { InputGlobalProps } from '@/components/types';
import { SpinnerLoading } from '@/feedbacks';

import './fileInput.scss';

export interface FileInputProps extends Omit<InputGlobalProps, 'type' | 'value' | 'onChange'> {
    text?: ReactNode;
    /** (in development) loaded value of the file for animate the progress bar*/
    progressValues?: number[] | string[];
    /** showed icon in the center of input*/
    imgSource?: string;
    /** max size file in octets */
    maxSize?: number;

    /** max size file in octets */
    type?: 'image' | 'file';
    /** max size file in octets */
    multiple?: boolean;
    selectedFiles?: File[] | null;
    // setSelectedFile: Dispatch<React.SetStateAction<FileList | null>>;
    preview?: boolean;
    onFileUpload: (file: File[] | null, type?: 'upload' | 'delete' | 'error') => void;
    errorMessage?: ReactNode;
    disableOnSelect?: boolean;
    removeOnClick?: boolean;
    filesLinks?: string[];
    remove?: boolean;
    loading?: boolean;
}

/**
 *
 *
 * ###Usage
 * this behaves like input type=file
 * accept ref
 *
 *```JSX
 *
 * import {FileInput} from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
        const [file, setfile] = useState(null);

        return (
        <FileInput id="fileId" onChange={(e) => {setfile(e.target.files[0])}} />
        );
   }
 * ```
 *
 *
 */

const MAX_SIZE = 5242880; /** 5242880octet = 5Mo */
const FileInput: FC<FileInputProps> = ({
    text = 'Sélectionnez ou Glissez-déposez vos fichiers ici',
    errorMessage = 'L’image est trop volumineuse',
    progressValues,
    maxSize = MAX_SIZE,
    type = 'image',
    multiple = false,
    style,
    imgSource,
    className,
    preview,
    onFileUpload,
    selectedFiles,
    disableOnSelect,
    filesLinks,
    removeOnClick = true,
    remove = true,
    loading = false,
    id,
    name,
    ...props
}) => {
    const [files, setFiles] = useState<File[] | null>(null);
    const classes = classNames(
        'sob-v2-fileInput',
        disableOnSelect && files ? 'sob-v2-fileInput__disable' : '',
        className,
    );
    // const defaultPreview = type === 'image' ? true : type === 'file' ? false : type === 'image' && !preview && false;
    useEffect(() => {
        if (selectedFiles) {
            setFiles(selectedFiles);
        }
    }, [selectedFiles]);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;

        if (fileList && fileList.length > 0) {
            const selectedFile = Array.from(fileList);
            setFiles(selectedFile);
            if (selectedFile.every((el) => el.size < maxSize)) {
                onFileUpload(selectedFile, 'upload');
            } else {
                onFileUpload(selectedFile, 'error');
            }
        }
    };

    const handleRemoveFiles = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.currentTarget.value = '';
        setFiles(null);
        onFileUpload(null, 'delete');
    };
    const handleRemoveFile = (files: File[] | null) => {
        setFiles(files);
        onFileUpload(files, 'delete');
    };
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <>
            {loading ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SpinnerLoading color='rgb(37,184,170)' size={18} title=' ' />
                </div>
            ) : (
                <>
                    <div style={style} className={classes}>
                        {type === 'file' ? (
                            <img style={{ width: 19.5, height: 15.2 }} src={imgSource ?? defaultFileSource} />
                        ) : (
                            <img style={{ width: 19.5, height: 15.2 }} src={imgSource ?? defaultImageSource} />
                        )}
                        <span>{text}</span>
                        <input
                            {...props}
                            onClick={(e) => removeOnClick && handleRemoveFiles(e)}
                            onChange={handleFileChange}
                            className='input'
                            type='file'
                            multiple={multiple}
                            ref={inputRef}
                            id={name || id}
                            name={name}
                        />
                    </div>
                    {files ? (
                        <FileProgress
                            handleRemoveFile={handleRemoveFile}
                            files={files}
                            progressValues={progressValues}
                            maxSize={maxSize}
                            preview={preview}
                            filesLinks={filesLinks}
                            errorMessage={errorMessage}
                            remove={remove}
                            disableOnSelect={disableOnSelect}
                            inputRef={inputRef}
                        />
                    ) : (
                        <></>
                    )}
                </>
            )}
        </>
    );
};

export { FileInput };
