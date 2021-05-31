
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {
        path: '/home/students',
        title: 'Students',
        icon: 'pe-7s-graph',
        class: ''
    },
    {
        path: '/home/attendance',
        title: 'Attendance',
        icon: 'pe-7s-pendrive',
        class: ''
    },
    {
        path: '/home/rooms',
        title: 'Rooms',
        icon: 'pe-7s-key',
        class: ''
    },
    {
        path: '/home/courses',
        title: 'Courses',
        icon: 'pe-7s-id',
        class: ''
    },
    {
        path: '/home/sections',
        title: 'Sections',
        icon: 'pe-7s-photo-gallery',
        class: ''
    },
];