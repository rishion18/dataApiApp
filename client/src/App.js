import BarGraph from "./components/BarGraph.jsx";
import Dropdown from "./components/Dropdown.jsx";
import GraphLayout from "./components/GraphLayout.jsx";
import MainPage from "./components/MainPage.jsx";
import Pagination from "./components/Pagination.jsx";
import SearchBar from "./components/searchBar.jsx";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";


function App() {

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainPage/>
  },
  {
    path:'/charts',
    element:<GraphLayout><BarGraph/></GraphLayout>
  }
])

  return (
<>
  <RouterProvider router={router}/>
</>
  );
}

export default App;
