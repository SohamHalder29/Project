import {
  DashboardPage,
  HomePage,
  LogInPage,
  MainPage,
  ProjectPage,
  SignUpPage,
  TaskPage,
  UserPage,
} from "@/pages";

import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
  {
    path: "/project",
    element: <ProjectPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
]);

export default Router;
