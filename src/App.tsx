import "./App.css";
import { Button } from "component/atom";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ErrorPage, FormBuilderPage } from "pages";

const Root = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100vw" }}>
      <nav style={{ width: "100vh", display: "flex", gap: "25px" }}>
        <Link to="/">Home</Link>
        <Link to="/builder/e9129f18-9c26-433f-b5c3-7cfa41952241">
          Survey-builder
        </Link>
        <Button label="Test button component" />
      </nav>

      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "builder/:id",
        element: <FormBuilderPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
