import BillIcon from "@/assets/icons/BillIcon"
import BoxIcon from "@/assets/icons/BoxIcon"
import ChartbarIcon from "@/assets/icons/ChartbarIcon"
import ContratIcon from "@/assets/icons/ContratIcon"
import CurrencyDollarsIcon from "@/assets/icons/CurrencyDollarsIcon"
import HistoryIcon from "@/assets/icons/HistoryIcon"
import HomeIcon from "@/assets/icons/HomeIcon"
import OtherIcons from "@/assets/icons/OtherIcons"
import ParamsIcon from "@/assets/icons/ParamsIcon"
import SchoolhatIcon from "@/assets/icons/SchoolhatIcon"
import UseraccountIcon from "@/assets/icons/UseraccountIcon"
import UsercheckIcon from "@/assets/icons/UsercheckIcon"
import UserplusIcon from "@/assets/icons/UserplusIcon"

const buttons = [
    {
        path: 'principal',
        libel: 'Tableau de bord',
        icon: HomeIcon
    },
    {
        path: 'creation-compte',
        libel: 'Création de Compte',
        icon: UseraccountIcon
    },
    {
        path: 'opportunity-overview',
        libel: 'Opportunités',
        icon: UserplusIcon
    },
    {
        path: 'client-overview',
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
        libel: 'Historiques',
        icon: HistoryIcon
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