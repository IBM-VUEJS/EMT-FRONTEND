import BillIcon from "@/components/icons/BillIcon"
import BoxIcon from "@/components/icons/BoxIcon"
import ChartbarIcon from "@/components/icons/ChartbarIcon"
import ContratIcon from "@/components/icons/ContratIcon"
import CurrencyDollarsIcon from "@/components/icons/CurrencyDollarsIcon"
import HomeIcon from "@/components/icons/HomeIcon"
import OtherIcons from "@/components/icons/OtherIcons"
import ParamsIcon from "@/components/icons/ParamsIcon"
import SchoolhatIcon from "@/components/icons/SchoolhatIcon"
import UseraccountIcon from "@/components/icons/UseraccountIcon"
import UsercheckIcon from "@/components/icons/UsercheckIcon"
import UserplusIcon from "@/components/icons/UserplusIcon"

const buttons = [
    {
        path: 'dash',
        libel: 'Tableau de bord',
        icon: HomeIcon
    },
    {
        path: 'creation-compte',
        libel: 'Création de Compte',
        icon: UseraccountIcon
    },
    {
        path: 'opportinutes',
        libel: 'Opportunités',
        icon: UserplusIcon
    },
    {
        path: 'clients',
        libel: 'Clients',
        icon: UsercheckIcon
    },
    {
        path: 'factures',
        libel: 'Factures',
        icon: BillIcon
    },
    {
        path: 'contrats',
        libel: 'Contrats',
        icon: ContratIcon
    },
    {
        path: 'projets',
        libel: 'Projets',
        icon: BoxIcon
    },
    {
        path: 'finances',
        libel: 'Finances',
        icon: CurrencyDollarsIcon
    },
    {
        path: 'consultants',
        libel: 'Consultants',
        icon: SchoolhatIcon
    },
    {
        path: 'statistiques-rapports',
        libel: 'Statistiques & Rapports',
        icon: ChartbarIcon
    },
    {
        path: 'histories',
        libel: 'Autres',
        icon: OtherIcons
    },
    {
        path: 'autres',
        libel: 'Autres',
        icon: OtherIcons
    },
    {
        path: 'params',
        libel: 'Paramètres',
        icon: ParamsIcon
    },
]

export default buttons