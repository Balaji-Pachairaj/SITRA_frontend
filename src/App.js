import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { Provider } from "react-redux";
import { store } from "./store";
import SignInPage from "./pages/AuthenticationPages/SignInPage";
import { general_page_routes } from "./config/pageRoutes";

const router = createBrowserRouter([
  { path: general_page_routes?.home?.direct_link, element: <HomePage /> },

  {
    path: general_page_routes?.signin?.direct_link,
    element: <SignInPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
