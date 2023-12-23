import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import ABC from "../src/Components/Carousel/Carousel"
import Gallery from './Components/Gallery/Gallery';
import ProductCard from "./Components/ProductCard/ProductCard"
// import NewProducts from './Components/NewProducts/NewProducts';
import DiscountProduct from './Components/NEWARRIVALS/NEWARRIVALS';
import Footer from './Components/Footer/Footer';
import ProductCategories from "../src/Components/ProductCategories/ProductCategories"
import Home from './Components/Home/Home';
import DetailsPage from './Components/DetailsPage/DetailsPage';
import { Login } from './Components/Login/Login';
import OrderForm from './Components/OrderForm/OrderForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import AdminDashboard from './Components/Admin Panel/AdminDashboard/AdminDashboard';
import AddProduct from './Components/Admin Panel/AddProduct/AddProduct';
import ProductTable from './Components/Admin Panel/ProductTable/ProductTable';
import Check from './Components/Check/Check.';
import SginUp from './Components/SginUp/SginUp';
import AdminHeader from './Components/Admin Panel/Admin-Header/Admin-Header';
import OrderTable from './Components/Admin Panel/OrderTable/OrderTable';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AdminSideBar from './Components/Admin Panel/AdminSideBar/AdminSideBar';

AOS.init({
  duration: 800, 
  easing: 'ease-in-out', 
});

function App() {
  return (
    <>
      <Router>
        <Routes>
        {/* <Header /> */}
          <Route path="/" element={<Home />} />
          <Route path='/productCategories/:CategoriesID' element={<ProductCategories />} />
          <Route path='/detailsPage/:productID' element={<DetailsPage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SginUp' element={<SginUp />} />
          
          <Route path='/orderForm' element={<OrderForm />} />
          <Route path='/adminDashboard' element={<AdminDashboard />} />
          <Route path='/addProduct' element={<AddProduct />} />
          <Route path='/productTable' element={<ProductTable />} />
          <Route path='/check' element={<Check />} />
          <Route path='/adminHeader' element={<AdminHeader />} />
          <Route path='/adminSideBar' element={<AdminSideBar />} />
          <Route path='/orderTable' element={<OrderTable />} />
          
          
          
        </Routes>

       
        {/* <Footer /> */}
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
