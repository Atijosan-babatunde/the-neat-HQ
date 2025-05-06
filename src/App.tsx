import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/layout/header";
import NavBar from "./components/layout/navBar";
import { ROUTES } from "./components/constants/routes";
import Footer from "./components/layout/footer";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/aboutUs/aboutUs";
import Services from "./pages/services/services";
import Areas from "./pages/areasCovered/areas";
import ContactUs from "./pages/contactUs/contactUs";
import ScrollToTop from "./components/scrollToTop";
import LocationDetails from "./pages/areasCovered/locationDetails";
import { LocationProvider } from "./components/constants/locationContext";

function App() {
  return (
    <LocationProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col">
          <Header />
          <NavBar />
          <main>
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
              <Route path={ROUTES.SERVICES} element={<Services />} />
              <Route
                path={`${ROUTES.SERVICES}/:serviceType`}
                element={<Services />}
              />
              <Route path={ROUTES.AREAS} element={<Areas />} />
              <Route
                path={ROUTES.LOCATION_DETAILS}
                element={<LocationDetails />}
              />
              <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LocationProvider>
  );
}

export default App;
