import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import noresultTable from '@/assets/table-no-result.svg';
import emptyTable from '@/assets/table-empty.svg';
import { Zoom } from '@/animations';
import { DivGlobalProps } from '@/components/types';
import './emptyData.scss';

export interface EmptyDataProps extends Omit<DivGlobalProps, 'title'> {
    /**
     * If true use Zoom to annimate component
     */
    animated?: boolean;
    /**
     *  toggle display component
     */
    isVisible?: boolean;
    /**
     * text description
     */
    desc?: ReactNode;
    /**
     * Change Image
     */
    src?: string;
    /**
     *  title component
     */
    title?: ReactNode;
    /**
     *  title component
     */
    state?: 'noResult' | 'empty';
}

/**
 * If not loading new data and not data
 *
 *
 *
 * ###Usage
 *
 *```JSX
 *
 * import { EmptyData } from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (
 *               <Table>
                <thead>
                    <tr>
                        <Th hideOrder>#</Th>
                        <Th isActive order="down">
                            First Name
                        </Th>
                        <Th hideOrder>Last Name</Th>
                        <Th hideOrder>statut</Th>
                    </tr>
                </thead>
            </Table>
            <EmptyData>
                <Button > Action children </Button>
            </EmptyData>
 *    );
 * }
 * ```
 *
 */

//

const EmptyData: FC<EmptyDataProps> = ({
    className,
    children,
    title = 'Information non trouvée',
    desc = 'Aucun résultat ne correspond à votre recherche',
    isVisible = true,
    animated = true,
    state = 'noResult',
    ...props
}) => {
    const classes = classNames('sob-v2-empty-data', className);
    if (isVisible) {
        return (
            <Zoom in={animated}>
                <div {...props} className={classes}>
                    <img className='sob-v2-empty-data-icon' src={state === 'noResult' ? noresultTable : emptyTable} />
                    {title ? <h4 className='sob-v2-empty-data-title'>{title}</h4> : ''}
                    {desc ? <p className='sob-v2-empty-data-desc'>{desc}</p> : <></>}
                    {children}
                </div>
            </Zoom>
        );
    } else {
        return <></>;
    }
};

export { EmptyData };
