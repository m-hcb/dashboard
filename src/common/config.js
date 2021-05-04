const REPAIRS = 'Repairs';
const NETWORKS = 'Network Unlocks';
const ACCESSORIES = 'Accessories & Parts';
const TRADE = 'Trade In';
const SALES_GOODS = 'Sales Vs Goods';
const HOW_DID_YOU_HEAR = 'How did you hear about us ?';

export const widgets = [
    {
        id: '01',
        order: 1,
        priority: 4,
        wType: 'Numeric',
        cols: 3,
        wName: REPAIRS,
        total: 27243.67,
        growth: 28,
    },
    {
        id: '02',
        order: 2,
        priority: 2,
        wType: 'Numeric',
        cols: 3,
        wName: NETWORKS,
        total: 67547.13,
        growth: 68,
    },
    {
        id: '03',
        order: 3,
        priority: 3,
        wType: 'Numeric',
        cols: 3,
        wName: ACCESSORIES,
        total: 37248.68,
        growth: 12,
    },
    {
        id: '04',
        order: 4,
        priority: 1,
        wType: 'Numeric',
        cols: 3,
        wName: TRADE,
        total: 77242.97,
        growth: 98,
    },
    {
        id: '05',
        order: 5,
        priority: 5,
        wType: 'Chart-Line',
        cols: 6,
        wName: SALES_GOODS,
        total: 77242.97,
        growth: 98,
    },
    {
        id: '06',
        order: 6,
        priority: 6,
        wType: 'Chart-Pie',
        cols: 6,
        wName: HOW_DID_YOU_HEAR,
        total: 77242.97,
        growth: 98,
    }
];


