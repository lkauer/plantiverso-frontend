import Profile from '../components/admin/Profile';
import Feed from '../components/admin/Feed';
import Category from '../components/admin/category/Category';
import ViewCategory from '../components/admin/category/ViewCategory';
import EditCategory from '../components/admin/category/EditCategory';
import Catalog from '../components/admin/catalog/Catalog';
import ViewCatalog from '../components/admin/catalog/ViewCatalog';
import EditCatalog from '../components/admin/catalog/EditCatalog';
import Forum from '../components/admin/forum/Forum';
import ViewForum from '../components/admin/forum/ViewForum';
import ViewGeneralForum from '../components/admin/forum/ViewGeneralForum';
import EditForum from '../components/admin/forum/EditForum';
import OpenForum from '../components/admin/forum/OpenForum';
import Chat from '../components/admin/Chat';

const routes = [
    {path: '/admin', exact: true, name: 'Admin'},
    {path: '/admin/profile', exact: true, name: 'Profile', component: Profile},
    {path: '/admin/feed', exact: true, name: 'Feed', component: Feed},
    {path: '/admin/add-category', exact: true, name: 'Category', component: Category},
    {path: '/admin/view-category', exact: true, name: 'ViewCategory', component: ViewCategory},
    {path: '/admin/edit-category/:id', exact: true, name: 'EditCategory', component: EditCategory},
    {path: '/admin/add-catalog', exact: true, name: 'Catalog', component: Catalog},
    {path: '/admin/view-catalog', exact: true, name: 'ViewCatalog', component: ViewCatalog},
    {path: '/admin/edit-catalog/:id', exact: true, name: 'EditCatalog', component: EditCatalog},
    {path: '/admin/add-forum', exact: true, name: 'Forum', component: Forum},
    {path: '/admin/view-general-forum', exact: true, name: 'ViewGeneralForum', component: ViewGeneralForum},
    {path: '/admin/view-forum', exact: true, name: 'ViewForum', component: ViewForum},
    {path: '/admin/edit-forum/:id', exact: true, name: 'EditForum', component: EditForum},
    {path: '/admin/open-forum/:id', exact: true, name: 'OpenForum', component: OpenForum},
    {path: '/admin/chat', exact: true, name: 'Chat', component: Chat},
];

export default routes;