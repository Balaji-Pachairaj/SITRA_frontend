import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
