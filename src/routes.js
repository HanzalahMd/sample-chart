import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import ProjectListPage from './pages/ProjectListPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';
import WeeklyReport from "./project/WeeklyReport";
import NewProjectForm from "./project/NewProjectForm";
import ExportPage from './dashboard/proficiency/ExportPage'

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/partner" />, index: true },
        { path: 'partner', element: <DashboardAppPage /> },
        { path: 'project', element: <ProjectListPage /> },
        { path: 'new-project', element: <NewProjectForm /> },
        { path: 'weekly-report', element: <WeeklyReport /> },
        { path: 'download/:id', element: <ExportPage /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
