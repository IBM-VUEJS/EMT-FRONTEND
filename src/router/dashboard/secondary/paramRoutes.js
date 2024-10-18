import ParamConnectionHistoryPage from "@/pages/dashboard/paramPages/menus/ParamConnectionHistoryPage.vue";
import ParamEditProfilePage from "@/pages/dashboard/paramPages/menus/ParamEditProfilePage.vue";
import ParamMyProfilPage from "@/pages/dashboard/paramPages/menus/ParamMyProfilPage.vue";
import ParamPaswwordSecurityPage from "@/pages/dashboard/paramPages/menus/ParamPaswwordSecurityPage.vue";
import ParamPage from "@/pages/dashboard/paramPages/ParamPage.vue";

const paramRoutes = [
    {
        path: '/my-profil',
        name: 'my-profil',
        component: ParamMyProfilPage
    },
    {
        path: '/edit-profil',
        name: 'edit-profil',
        component: ParamEditProfilePage
    },
    {
        path: '/password-security',
        name: 'password-security',
        component: ParamPaswwordSecurityPage
    },
    {
        path: '/connexion-history',
        name: 'connexion-history',
        component: ParamConnectionHistoryPage
    },
];

export default paramRoutes