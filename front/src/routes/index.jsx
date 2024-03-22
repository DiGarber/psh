import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  
} from "react-router-dom";
import TopPlayers from "../components/TopPlayers/TopPlayers.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<TopPlayers />}>
      <Route path="statistics" element={<TopPlayers />} />
    </Route>
  )
);

export default router;
