import { createBrowserRouter } from "react-router-dom";

import Layout        from "./components/layout/Layout";
import Friends        from "./pages/Friends";
import EditFriend from "./pages/EditFriend";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Feed /> },
      { path: "friends", element: <Friends /> },
      { path: "friends/add", element: <EditFriend mode="create" /> }, 
      { path: "friends/edit/:id", element: <EditFriend mode="edit" /> },
      { path: "profile", element: <Profile /> },
      { path: "*", element: <div>Страница не найдена</div> },
    ],
  },
]);

