import Home from '~/pages/Home';
import Contact from '~/pages/Contact';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Contact copy';
import { HeaderOnly } from '~/components/Layout';

const puplicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { privateRoutes, puplicRoutes };
