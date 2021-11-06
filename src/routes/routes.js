import Profile from '../components/admin/Profile';
import Feed from '../components/admin/Feed';
import Catalog from '../components/admin/Catalog';
import Category from '../components/admin/Category';
import Chat from '../components/admin/Chat';
import Forum from '../components/admin/Forum';

const routes = [
    {path: '/admin', exact: true, name: 'Admin'},
    {path: '/admin/profile', exact: true, name: 'Profile', component: Profile},
    {path: '/admin/feed', exact: true, name: 'Feed', component: Feed},
    {path: '/admin/catalog', exact: true, name: 'Catalog', component: Catalog},
    {path: '/admin/category', exact: true, name: 'Category', component: Category},
    {path: '/admin/chat', exact: true, name: 'Chat', component: Chat},
    {path: '/admin/forum', exact: true, name: 'Forum', component: Forum},
];

export default routes;