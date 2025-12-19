import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Message from "./pages/Message";
import Profile from "./pages/Profile";
import AccountSettings from "./pages/AccountSettings";
import MyWallet from "./pages/MyWallet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "account-settings",
        element: <AccountSettings />,
      },{
        path: "my-wallet",
        element: <MyWallet />
      }
    ],
  },
]);
export default router;
