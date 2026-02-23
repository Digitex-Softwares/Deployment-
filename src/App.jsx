import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Bots from "./pages/Bots";
import BotDetail from "./pages/BotDetail";
import BuyCoins from "./pages/BuyCoins";
import Deployments from "./pages/Deployments";
import DeploymentView from "./pages/DeploymentView";
import ManageDeployment from "./pages/ManageDeployment";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bots" element={<Bots />} />
        <Route path="/bots/:slug" element={<BotDetail />} />
        <Route path="/buy-coins" element={<BuyCoins />} />
        <Route path="/deployments" element={<Deployments />} />
        <Route path="/deployments/:id" element={<DeploymentView />} />
        <Route path="/manage/:id" element={<ManageDeployment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failed" element={<PaymentFailed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
