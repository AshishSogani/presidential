import { BrowserRouter } from "react-router-dom";
import Layout from "./Pages/Frontend/Layout";
import AppRoutes from "./AppRoutes";
import './assets/css/style.css'
// import './assets/css/responsive.css'
function App() {
  return (
    
    <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
    </BrowserRouter>
  );
}

export default App;
