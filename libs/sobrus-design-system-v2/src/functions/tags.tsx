import { Tag } from '@/contentDisplay';

export const displaystatus = (status: string) => {
    switch (status) {
        case 'status':
            return (
                <Tag minWidth={100} bgColor='#EDFAF9' textColor='#1BBAAC'>
                    {status}
                </Tag>
            );
        case 'status2':
            return (
                <Tag minWidth={100} bgColor='#EDFAF9' textColor='#1BBAAC'>
                    {status}
                </Tag>
            );
        case 'status3':
            return (
                <Tag minWidth={100} bgColor='#EDFAF9' textColor='#1BBAAC'>
                    {status}
                </Tag>
            );
        case 'status4':
            return (
                <Tag minWidth={100} bgColor='#F0EFF4' textColor='#5D4BA7'>
                    {status}
                </Tag>
            );
        default:
            return;
    }
};
