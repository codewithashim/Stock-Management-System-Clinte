import { RouterProvider } from "react-router-dom";
import route from "./Router/Router";
import "./Styles/App.css";

function App() {
  return (
    <main>
      <RouterProvider router={route}></RouterProvider>
    </main>
  );
}

export default App;
