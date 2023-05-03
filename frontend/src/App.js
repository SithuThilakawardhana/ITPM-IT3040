import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import LogIn from './pages/LogIn';
import UserDashboard from './pages/user/UserDashboard';
import UserRoute from './components/UserRoute';
import Layout from './pages/global/Layout';
import UserdonateHistory from './pages/global/Layout';
import AdminRoute from './components/AdminRoute';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import Singledonate from './pages/Singledonate';
import DashUsers from './pages/admin/DashUsers';
import Dashdonate from './pages/admin/Dashdonate';
import LogInDonator from './pages/LogInDonator';
import LogInBenificiary from './pages/LogInBenificiary';
import Donator from './pages/LogInDonator';
import Benificiary from './pages/LogInBenificiary';
import SignUp from './pages/SignUp';
import SignUpD from './pages/SignUpD';
import AboutUs from './pages/AboutUs';

//HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserdonateHistoryHOC = Layout(UserdonateHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const DashUsersHOC = Layout(DashUsers);
const DashdonateHOC = Layout(Dashdonate);


const App = () => {

    return (
        <>
            <ToastContainer />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ProSidebarProvider>
                    <BrowserRouter>
                        <Routes>
                        <Route path='/' element={<Home />} />
                            <Route path='/search/location/:location' element={<Home />} />
                            <Route path='/search/:keyword' element={<Home />} />
                            <Route path='/login' element={<LogIn />} />
                            <Route path='/logindonator' element={<LogInDonator />} />
                            <Route path='/signup' element={<SignUp />} />
                            <Route path='/signupd' element={<SignUpD />} />
                            <Route path='/aboutus' element={<AboutUs />} />
                            <Route path='/loginbenificiary' element={<LogInBenificiary />} />
                            <Route path='/benificiary' element={<Benificiary />} />
                            <Route path='/donator' element={<Donator />} />
                            <Route path='/donate/:id' element={<Singledonate />} />
                            <Route path='/admin/dashboard' element={<AdminRoute><AdminDashboardHOC /></AdminRoute>} />
                            <Route path='/admin/users' element={<AdminRoute><DashUsersHOC /></AdminRoute>} />
                            <Route path='/admin/donate' element={<AdminRoute><DashdonateHOC /></AdminRoute>} />
                            <Route path='/user/dashboard' element={<UserRoute>< UserDashboardHOC /></UserRoute>} />
                            <Route path='/user/donate' element={<UserRoute>< UserdonateHistoryHOC /></UserRoute>} />
                            <Route path='/user/info' element={<UserRoute>< UserInfoDashboardHOC /></UserRoute>} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </ProSidebarProvider>
            </ThemeProvider>
        </>
    )
}

export default App