import { CloudPage, TagPage } from "ui/views";

const routes = [
  {
    path: "/tag/:id?",
    component: TagPage
  },

  {
    path: "/",
    component: CloudPage
  }
];

export default routes;
