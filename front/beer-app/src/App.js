import './App.css';
import Navbar from './Navbar/Navbar';
import Additem from './AddItem/Additem'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import ReviewForm from './ReviewForm/ReviewForm';
import AddImage from './Addimage/AddImage';
import Footer from './Footer/Footer';


function App() { 
  return ( 
       <Router>
        

      <Routes>
        <Route path="/" element={
          <>
          <Navbar/> 
           <Main/>
           <Footer/>
        </>
      }/> 
        <Route path="Additem" element={
              <>
              <Navbar/>
             <Additem/>
             <Footer/>
          </>} /> 
        <Route path="Dashboard" element={
          <>
          <Navbar/>
          <Main />
          <Footer/>
          </> 
          } /> 
          <Route path="Addreview" element={
          <>
          <Navbar/>
          <ReviewForm />
          <Footer/>
          </>
          } />
          <Route path="Addimage" element={
          <>
          <Navbar/>
          <AddImage />
          <Footer/>
          </>
          } />
      </Routes>
       </Router>
  );
}
   
export default App;
