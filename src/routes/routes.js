// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/LIve';

// Layout
import { HeaderOnly } from '~/layouts';

//
import config from '~/config';

const puplicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.live,
        component: Live,
    },
];

const privateRoutes = [];

export { privateRoutes, puplicRoutes };
