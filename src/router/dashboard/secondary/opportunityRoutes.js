import OpportinutyArchives from "@/pages/dashboard/opportunityPages/menus/OpportinutyArchivesPage.vue";
import OpportinutyListPage from "@/pages/dashboard/opportunityPages/menus/OpportinutyListPage.vue";
import OpportunityListProspectPage from "@/pages/dashboard/opportunityPages/menus/OpportunityListProspectPage.vue";
import OpportunityOverviewPage from "@/pages/dashboard/opportunityPages/menus/OpportunityOverviewPage.vue";
import archiveRoutes from "./opportunity/archivesRoutes";

const opportunityRoutes = [
    {
        path: 'opportunity-overview',
        name: 'opportunity-overview',
        component: OpportunityOverviewPage
    },
    {
        path: 'opportunity-list',
        name: 'opportunity-list',
        component: OpportinutyListPage
    },
    {
        path: 'opportunity-prospect-list',
        name: 'opportunity-prospect-list',
        component: OpportunityListProspectPage
    },
    {
        path: 'opportunity-archives',
        name: 'opportunity-archives',
        component: OpportinutyArchives,
        children: archiveRoutes
    },
];

export default opportunityRoutes