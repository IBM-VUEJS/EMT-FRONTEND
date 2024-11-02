import ClientArchivePage from "@/pages/dashboard/clientPages/menus/ClientArchivePage.vue"
import ClientListPage from "@/pages/dashboard/clientPages/menus/ClientListPage.vue"
import ClientOverviewPage from "@/pages/dashboard/clientPages/menus/ClientOverviewPage.vue"

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
    }
]

export default ClientRoutes