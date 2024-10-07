import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { ProductPage } from './Pages/ProductPage';
import { CheckOutPage } from './Pages/CheckOutPage';
import { UserAccountPage } from './Pages/UserAccountPage';
import { CategoriesPage } from './Pages/CategoriesPage';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <div className='page-wrapper'>
      <div className='content'>
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/category/:categoryName' element={<CategoriesPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/cart' element={<CheckOutPage />} />
            <Route path='/user' element={<UserAccountPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="footer">
            <Footer />
          </div>
    </div>

  );
}

export default App;
