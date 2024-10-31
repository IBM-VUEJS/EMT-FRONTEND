import BillPage from "@/pages/dashboard/BillPage.vue"
import ClientPage from "@/pages/dashboard/ClientPage.vue"
import ConsultantPage from "@/pages/dashboard/ConsultantPage.vue"
import ContratPage from "@/pages/dashboard/ContratPage.vue"
import CreateAccountPage from "@/pages/dashboard/CreateAccountPage.vue"
import DashboardPage from "@/pages/dashboard/DashboardPage.vue"
import FinancePage from "@/pages/dashboard/FinancePage.vue"
import OpportunityPage from "@/pages/dashboard/opportunityPages/OpportunityPage.vue"
import OthersPage from "@/pages/dashboard/OthersPage.vue"
import ParamPage from "@/pages/dashboard/paramPages/ParamPage.vue"
import ProjectPage from "@/pages/dashboard/ProjectPage.vue"
import StatisticPage from "@/pages/dashboard/StatisticPage.vue"
import paramRoutes from "../secondary/paramRoutes"
import HistoriesPage from "@/pages/dashboard/HistoriesPage.vue"
import opportunityRoutes from "../secondary/opportunityRoutes"
import OpportunityAddPage from "@/pages/dashboard/opportunityPages/menus/add/OpportunityAddPage.vue"

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
        component: ClientPage
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
    }
]

export default routes