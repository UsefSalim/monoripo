import { DivGlobalProps } from '@/components/types';
import classNames from 'classnames';
import './tableLoader.scss';

const TYPE_WIDTH = {
    dot: 10,
    large: 200,
    'extra-small': 23,
    small: 78,
    medium: 117,
};

const TYPE_HEIGHT = {
    dot: 10.4,
    large: 16,
    'extra-small': 16,
    small: 16,
    medium: 16,
};

export type LoaderType = 'dot' | 'large' | 'extra-small' | 'small' | 'medium';

export type Column = {
    type?: LoaderType;
    width?: number | string;
    height?: number | string;
};
export type Columns = Column[];
export type ItemLoaderProps = Column & DivGlobalProps;

export interface TableLoaderProps {
    columns: Columns;
    numberOfRows?: number;
    loading: boolean;
}

const TableLoader = ({ columns, numberOfRows = 20, loading }: TableLoaderProps) => {
    return (
        <>
            {loading ? (
                <tbody>
                    {Array.from({ length: numberOfRows }).map((_, i) => (
                        <tr key={i}>
                            {columns.map((item, index) => (
                                <td style={{ padding: '0.7rem', width: item?.width || 'auto' }} key={index}>
                                    <ItemLoader width={item?.width} type={item?.type} />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            ) : null}
        </>
    );
};

const ItemLoader = ({ type, width, height, className, ...props }: ItemLoaderProps) => {
    const itemWidth =
        width ||
        (type === 'dot'
            ? TYPE_WIDTH[type ?? 'small']
            : TYPE_WIDTH[type ?? 'small'] * (Math.random() * (1 - 0.7) + 0.7));
    const itemHeight = height || TYPE_HEIGHT[type ?? 'small'];

    const classes = classNames('sob-v2-itemLoader', className);
    return (
        <>
            <div
                className={classes}
                style={{
                    height: itemHeight,
                    width: itemWidth,
                }}
                {...props}
            ></div>
            <style>
                {`
                    @keyframes shimmer {
                        0% { background-position: -200% 0; }
                        100% { background-position: 200% 0; }
                    }

                `}
            </style>
        </>
    );
};

export { TableLoader, ItemLoader };
