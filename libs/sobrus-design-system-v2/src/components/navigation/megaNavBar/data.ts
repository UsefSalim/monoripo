type DataType = {
    to: string;
    title?: string;
    active?: string;
    subMenu?: { title?: string; to: string; active?: string }[];
}[];
export const navPaths: DataType = [
    { to: 'home', title: 'Home', active: 'active' },
    {
        to: 'customers',
        title: 'Customers',
        subMenu: [
            { to: 'customers', title: 'Customers', active: 'active' },
            { to: 'contacts', title: 'contacts' },
        ],
    },
    {
        to: 'products',
        title: 'products',
        subMenu: [
            { to: 'products', title: 'products' },
            { title: 'Suggestions', to: 'products/suggestions' },
        ],
    },
    {
        title: 'Sales',
        to: 'invoices',
        subMenu: [
            { title: 'invoices', to: 'invoices' },
            { title: 'quotes', to: 'quotes' },
            { title: 'Sales Returns', to: 'salesreturns' },
            { title: 'Generate Document', to: 'generatetmpdocuments' },
            { title: 'Repackage a product', to: 'stock/repackaging/create' },
            { title: 'Officinal/Magistral Preparations', to: 'preparations' },
        ],
    },
    {
        title: 'offers',
        to: 'offers',
        subMenu: [
            { title: 'offers', to: 'offers' },
            { to: 'purchasesuggestions', title: 'Purchases Suggestions' },
            { title: 'Purchase Orders', to: 'purchasesuggestions' },
            { title: 'Delivery Notes', to: 'deliverynotes' },
            { title: 'Issued Purchases Returns', to: 'purchasesissuedreturns' },
            { title: 'Purchases Returns', to: 'purchasesreturns' },
            { title: 'expenses', to: 'expenses' },
        ],
    },
    {
        title: 'suppliers',
        to: 'suppliers',
        subMenu: [
            { title: 'suppliers', to: 'suppliers' },
            { to: 'suppliers/suggestions', title: 'Suggestions' },
        ],
    },
    {
        title: 'colleagues',
        to: 'colleagues',
        subMenu: [
            { title: 'colleagues', to: 'colleagues' },
            { title: 'Colleagues Sales', to: 'colleagues/sales' },
            { title: 'Colleagues Purchases', to: 'colleagues/purchases' },
        ],
    },
    {
        title: 'payers',
        to: 'payers',
        subMenu: [
            { title: 'payers', to: 'payers' },
            { title: 'Payer Invoices', to: 'payers/invoices' },
            { title: 'Dispatch Slips', to: 'payers/dispatchslips' },
        ],
    },
    {
        title: 'stock',
        to: 'stock',
        subMenu: [
            { title: 'stock', to: 'stock' },
            { title: 'Stock Takes List', to: 'stock/stocktakes' },
            { title: 'Imports List', to: 'stock/import' },
        ],
    },
    { title: 'reports', to: 'reports' },
    { title: 'communications', to: 'communications' },
    {
        title: 'Settings',
        to: 'settings/useraccountsettings/profile',
    },
    // {
    //     title: 'suppliers',
    //     to: 'suppliers',
    //     subMenu: [
    //         { title: 'suppliers', to: 'suppliers' },
    //         { to: 'suppliers/suggestions', title: 'Suggestions' },
    //     ],
    // },
    // {
    //     title: 'colleagues',
    //     to: 'colleagues',
    //     subMenu: [
    //         { title: 'colleagues', to: 'colleagues' },
    //         { title: 'Colleagues Sales', to: 'colleagues/sales' },
    //         { title: 'Colleagues Purchases', to: 'colleagues/purchases' },
    //     ],
    // },
    // {
    //     title: 'payers',
    //     to: 'payers',
    //     subMenu: [
    //         { title: 'payers', to: 'payers' },
    //         { title: 'Payer Invoices', to: 'payers/invoices' },
    //         { title: 'Dispatch Slips', to: 'payers/dispatchslips' },
    //     ],
    // },
    // {
    //     title: 'stock',
    //     to: 'stock',
    //     subMenu: [
    //         { title: 'stock', to: 'stock', active: 'active' },
    //         { title: 'Stock Takes List', to: 'stock/stocktakes' },
    //         { title: 'Imports List', to: 'stock/import' },
    //     ],
    // },
    // { title: 'reports', to: 'reports', active: 'active' },
    // { title: 'communications', to: 'communications' },
    // {
    //     title: 'Settings',
    //     to: 'settings/useraccountsettings/profile',
    // },
];
