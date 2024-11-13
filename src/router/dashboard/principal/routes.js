import BillPage from "@/pages/dashboard/billPages/BillPage.vue"
import ClientPage from "@/pages/dashboard/clientPages/ClientPage.vue"
import ConsultantPage from "@/pages/dashboard/consultantPages/ConsultantPage.vue"
import ContratPage from "@/pages/dashboard/contratPages/ContratPage.vue"
import CreateAccountPage from "@/pages/dashboard/createAccountPages/CreateAccountPage.vue"
import DashboardPage from "@/pages/dashboard/dashboardPages/DashboardPage.vue"
import FinancePage from "@/pages/dashboard/financePages/FinancePage.vue"
import OpportunityPage from "@/pages/dashboard/opportunityPages/OpportunityPage.vue"
import OthersPage from "@/pages/dashboard/othersPages/OthersPage.vue"
import ParamPage from "@/pages/dashboard/paramPages/ParamPage.vue"
import ProjectPage from "@/pages/dashboard/projectPages/ProjectPage.vue"
import StatisticPage from "@/pages/dashboard/statisticPages/StatisticPage.vue"
import paramRoutes from "../secondary/paramRoutes"
import HistoriesPage from "@/pages/dashboard/historiesPages/HistoriesPage.vue"
import opportunityRoutes from "../secondary/opportunityRoutes"
import OpportunityAddPage from "@/pages/dashboard/opportunityPages/menus/add/OpportunityAddPage.vue"
import ClientRoutes from "../secondary/clientRoutes"
import ClientAddPage from "@/pages/dashboard/clientPages/menus/add/ClientAddPage.vue"
import ClientShowPage from "@/pages/dashboard/clientPages/menus/show/ClientShowPage.vue"

const routes = [
    {
        path: 'principal',
        name: 'principal',
        component: DashboardPage
    },
    {
        path: 'creation-compte',
        name: 'creation-compte',
        component: CreateAccountPage
    },
    {
        path: 'opportinutes',
        name: 'opportinutes',
        component: OpportunityPage,
        children: opportunityRoutes,
    },
    {
        path: 'clients',
        name: 'clients',
        component: ClientPage,
        children: ClientRoutes
    },
    {
        path: 'factures',
        name: 'factures',
        component: BillPage
    },
    {
        path: 'contrats',
        name: 'contrats',
        component: ContratPage
    },
    {
        path: 'projets',
        name: 'projets',
        component: ProjectPage
    },
    {
        path: 'finances',
        name: 'finances',
        component: FinancePage
    },
    {
        path: 'consultants',
        name: 'consultants',
        component: ConsultantPage
    },
    {
        path: 'statistiques-rapports',
        name: 'statistiques-rapports',
        component: StatisticPage
    },
    {
        path: 'histories',
        name: 'histories',
        component: HistoriesPage
    },
    {
        path: 'autres',
        name: 'autres',
        component: OthersPage
    },
    {
        path: 'params',
        name: 'params',
        component: ParamPage,
        children: paramRoutes
    },
    {
        path: 'opportunity-add',
        name: 'opportunity-add',
        component: OpportunityAddPage
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
    }
]

export default routes