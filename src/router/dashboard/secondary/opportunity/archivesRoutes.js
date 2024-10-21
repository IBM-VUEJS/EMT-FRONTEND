import InnerOpportunityArchivesPages from "@/pages/dashboard/opportunityPages/menus/archives/InnerOpportunityArchivesPages.vue";
import InnerProspectArchivesPages from "@/pages/dashboard/opportunityPages/menus/archives/InnerProspectArchivesPages.vue";

const archiveRoutes = [
    {
        path: 'opportunites-archive-list',
        name: 'opportunites-archive-list',
        component: InnerOpportunityArchivesPages
    },
    {
        path: 'prospects-archive-list',
        name: 'prospects-archive-list',
        component: InnerProspectArchivesPages
    }
];

export default archiveRoutes