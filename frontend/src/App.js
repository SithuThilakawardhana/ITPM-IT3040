import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jobs from './pages/Jobs';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Cources from './pages/Courses';
import UserDashboard from './pages/user/UserDashboard';
import UserRoute from './component/UserRoute';
import AdminRoute from './component/AdminRoute';
import Layout from './pages/global/Layout';
import UserJobsHistory from './pages/user/UserJobsHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import SingleJob from './pages/SingleJob';

//HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);

const App = () => {
  return (
    <>
    <ToastContainer/>
    <ThemeProvider theme={theme} >
      <CssBaseline/>
      <ProSidebarProvider>
      <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<Home/>} />
            <Route path = '/search/location/:location' element = {<Jobs/>} />
            <Route path = '/search/:keyword' element = {<Jobs/>} />
            <Route path = '/jobs' element = {<Jobs/>} />
            <Route path = '/login' element = {<LogIn/>} />
            <Route path = '/job/:id' element = {<SingleJob/>} />
            <Route path = '/admin/dashboard' element = {<AdminRoute><AdminDashboardHOC/></AdminRoute>} />
            <Route path = '/user/dashboard' element = {<UserRoute><UserDashboardHOC/></UserRoute>} />
            <Route path = '/user/jobs' element = {<UserRoute><UserJobsHistoryHOC/></UserRoute>} />
            <Route path = '/user/info' element = {<UserRoute><UserInfoDashboardHOC/></UserRoute>} />
            <Route path = '/aboutus' element = {<AboutUs/>} />
            <Route path = '/cources' element = {<Cources/>} />
            <Route path = '/contactus' element = {<ContactUs/>} />
            <Route path = '*' element = {<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </ProSidebarProvider>
    </ThemeProvider>
      
    </>
  )
}

export default App;
