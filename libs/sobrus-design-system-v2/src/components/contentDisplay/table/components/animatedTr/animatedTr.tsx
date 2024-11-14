import React, { FC } from 'react';
import { Fade, Zoom } from '@/animations';
import { TableRowGlobalProps } from '@/components/types';
//

export interface AnimatedTrProps extends TableRowGlobalProps {
    /**
     * if is true the component is no annmated , default value = false
     */
    noAnimation?: boolean;
    /**
     * if  noAnimation = false (default value ) need duration for interval between lines
     */
    duration?: number | string;
    /**
     * if  noAnimation = false (default value ) need index for calculate interval between lines
     */
    index?: number | string;
}

/**
 *
 * ###Usage
 *
 * the component hav all props as HTMLTableRowElement (tr) elemet
 *
 *```JSX
 *
 * import { AnimatedTr } from "@sobrus-com/sobrus-design-system"
 * const Example = (props) => {
 *    return (
 *              <Table>
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
                    <tbody>
                      <AnimatedTr index={index}  key={item?.id}>
                            <th scope="row">{item?.id}</th>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.status}</td>
                        </AnimatedTr>
                        <tr>
                            <td colSpan={6}>
                                <div className="sob-v2-table-pagination">
                                    <TablePreviousPage></TablePreviousPage>
                                    <TablePage>3500</TablePage>
                                    <TableNextPage></TableNextPage>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
 *    );
 * }
 * ```
 *
 */

//

export const AnimatedTr: FC<AnimatedTrProps> = ({
    index = 1,
    children = '',
    noAnimation = false,
    duration = 50,
    ...props
}) => {
    if (noAnimation) {
        return <tr {...props}>{children}</tr>;
    }
    return (
        <Zoom in timeout={+index < 15 ? +duration * (+index + 1) : +duration * 15} defaultRender={false}>
            <tr {...props}>{children}</tr>
        </Zoom>
    );
};
