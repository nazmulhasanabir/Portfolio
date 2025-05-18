import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import ProjectOneDetails from "./Page/ProjectOneDetails";
import ProjectTwoDetails from "./Page/ProjectTwoDetails";
import ProjectThreeDetails from "./Page/ProjectThreeDetails";
import GroupProjectDetails from "./Page/GroupProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/project-details-1",
    element: <ProjectOneDetails></ProjectOneDetails>,
  },
  {
    path: "/project-details-2",
    element: <ProjectTwoDetails></ProjectTwoDetails>,
  },
  {
    path: "/project-details-3",
    element: <ProjectThreeDetails></ProjectThreeDetails>,
  },
  {
    path: "/Group-project-details",
    element: <GroupProjectDetails></GroupProjectDetails>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
