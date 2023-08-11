import { RouterProvider } from "react-router-dom";

//^ declared pages routes
import router from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
