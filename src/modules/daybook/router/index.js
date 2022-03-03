export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "Daybook" */ '@/modules/daybook/layouts/DayBookLayout'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "Daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "Daybook-no-entry" */ '@/modules/daybook/views/EntryView'),
        }
    ]
}
