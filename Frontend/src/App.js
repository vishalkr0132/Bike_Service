// Importing necessary components and styles
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Importing page components
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import AddService from "./Pages/AddService/AddService";
import ManageServices from "./Pages/ManageServices/ManageServices";
import Contact from "./Pages/Contact/Contact";
import Order from "./Pages/Order/Order";
import Services from "./Pages/Home/Services/Services";
// import Blogs from "./Pages/Home/Blogs/Blogs";
import E from "./Pages/Home/E/E";
import Serv from "./Pages/Serv";

// Main App component
function App() {
  return (
    <div>
      {/* Header component */}
      <Header></Header>

      {/* Routing configuration */}
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home></Home>}></Route>

        {/* Service route */}
        <Route path="service" element={<Services></Services>}></Route>

        {/* Experts route */}
        <Route path="experts" element={<E></E>}></Route>

        {/* Service details route */}
        <Route
          path="service/:serviceId"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>

        {/* About route */}
        <Route path="about" element={<About></About>}></Route>

        {/* Login route */}
        <Route path="login" element={<Login></Login>}></Route>

        {/* Signup route */}
        <Route path="signup" element={<Signup></Signup>}></Route>

        {/* Checkout route with authentication check */}
        <Route
          path="checkout/:serviceId"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>

        {/* Add service route with authentication check */}
        <Route
          path="addservice"
          element={
            <RequireAuth>
              <AddService></AddService>
            </RequireAuth>
          }
        ></Route>

        {/* Manage services route with authentication check */}
        <Route
          path="manageservice"
          element={
            <RequireAuth>
              <ManageServices></ManageServices>
            </RequireAuth>
          }
        ></Route>

        {/* Orders route with authentication check */}
        <Route
          path="orders"
          element={
            <RequireAuth>
              <Order></Order>
            </RequireAuth>
          }
        ></Route>

        {/* Contact route */}
        <Route path="contact" element={<Contact></Contact>}></Route>

        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      {/* Footer component */}
      <Footer></Footer>
    </div>
  );
}

// Exporting the App component
export default App;