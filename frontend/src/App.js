import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jobs from './pages/Jobs';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Cources from './pages/Courses';
import UserDashboard from './pages/user/UserDashboard';
import UserRoute from './component/UserRoute';

const App = () => {
  return (
    <>
    <ToastContainer/>
    <ThemeProvider theme={theme} >
      <CssBaseline/>
        <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<Home/>} />
            <Route path = '/search/location/:location' element = {<Jobs/>} />
            <Route path = '/search/:keyword' element = {<Jobs/>} />
            <Route path = '/jobs' element = {<Jobs/>} />
            <Route path = '/login' element = {<Login/>} />
            <Route path = '/user/dashboard' element = {<UserRoute><UserDashboard/></UserRoute>} />
            <Route path = '/aboutus' element = {<AboutUs/>} />
            <Route path = '/cources' element = {<Cources/>} />
            <Route path = '/contactus' element = {<ContactUs/>} />
            <Route path = '*' element = {<NotFound/>} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
      
    </>
  )
}

export default App;
