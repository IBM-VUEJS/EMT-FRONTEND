import ClientAddPage from "@/pages/dashboard/clientPages/menus/add/ClientAddPage.vue"
import ClientArchivePage from "@/pages/dashboard/clientPages/menus/ClientArchivePage.vue"
import ClientListPage from "@/pages/dashboard/clientPages/menus/ClientListPage.vue"
import ClientOverviewPage from "@/pages/dashboard/clientPages/menus/ClientOverviewPage.vue"
import ClientShowPage from "@/pages/dashboard/clientPages/menus/show/ClientShowPage.vue"
import ClientUpdatePage from "@/pages/dashboard/clientPages/menus/update/ClientUpdatePage.vue"

const ClientRoutes = [
    {
        path: 'client-overview',
        name: 'client-overview',
        component: ClientOverviewPage
    },
    {
        path: 'client-list',
        name: 'client-list',
        component: ClientListPage
    },
    {
        path: 'client-archive',
        name: 'client-archive',
        component: ClientArchivePage
    },
    {
        path: 'client-add',
        name: 'client-add',
        component: ClientAddPage
    },
    {
        path: 'client-show/:client_id',
        name: 'client-show',
        component: ClientShowPage
    },
    {
        path: 'client-update/:client_id',
        name: 'client-update',
        component: ClientUpdatePage
    }
]

export default ClientRoutes