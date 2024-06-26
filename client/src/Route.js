import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage";
import JournalPage from "./pages/JournalPage";
import NewsPage from "./pages/NewsPage";
import ListPage from "./pages/ListPage";
import MessagePage from "./pages/MessagePage";
import AdminPanel from "./pages/AdminPanel";

import DnevnickPage from "./pages/DnevnickPage";
import FullListPage from "./pages/FullListPage";
import DocumentationPage from "./pages/DocumentationPage";
import MessagePolePage from "./pages/MessagePolePage";

import { HomePageRoute, JournalPageRoute, ProfilePageRoute, ListPageRoute, MessagePageRoute, NewsPageRoute, Dne, Mes, Lis, Doc, AdminPanelRoute } from "./utils/constanta"


export const authRoutes = [
    {
        path: ProfilePageRoute,
        Component: ProfilePage,
    },
]

export const publicRoutes = [
    {
        path: HomePageRoute,
        Component: HomePage,
    }, 

    {
        path: JournalPageRoute,
        Component: JournalPage,
    },
    {
        path: MessagePageRoute,
        Component: MessagePage,
    },
    {
        path: NewsPageRoute,
        Component: NewsPage,
    },
    {
        path: ListPageRoute,
        Component: ListPage,
    },

    {
        path: AdminPanelRoute,
        Component: AdminPanel,
    },

    {
        path: Dne,
        Component: DnevnickPage,
    },
    {
        path: Mes,
        Component: MessagePolePage,
    },
    {
        path: Lis,
        Component: FullListPage,
    },
    {
        path: Doc,
        Component: DocumentationPage,
    },
    
]

//console.log(publicRoutes);