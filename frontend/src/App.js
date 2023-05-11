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
import Donator from './pages/Donator';
import Benificiary from './pages/Benificiary';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import SignUpD from './pages/SignUpD';
import AboutUs from './pages/AboutUs';
import Dashboard from './components/Dashboard';
import EditBenificiary from './components/EditBenificiary';
import EditDonator from './components/EditDonator';
import CreateBen from './components/CreateBen';
import CreateDon from './components/CreateDon';
import {HashRouter,useNavigate,Navigate} from "react-router-dom";
import DonatorListing from './pages/DonatorListing';
import DonatorCreate from './pages/DonatorCreate';
import DonatorDetails from './pages/DonatorDetails';
import DonatorEdit from './pages/DonatorEdit';
import BenListing from './pages/BenListing';
import BenCreate from './pages/BenCreate';
import BenDetails from './pages/BenDetails';
import BenEdit from './pages/BenEdit';
import UserDetails from "./pages/userDetail";
// import ImageUpload from "./components/imageUpload.";



//HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserdonateHistoryHOC = Layout(UserdonateHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const DashUsersHOC = Layout(DashUsers);
const DashdonateHOC = Layout(Dashdonate);


function App () {
    const isLoggedIn = window.localStorage.getItem("loggedIn");
    const user = localStorage.getItem("token");
    return (
        <>
            <ToastContainer />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ProSidebarProvider>
                    <BrowserRouter>
                        <Routes>
                        <Route path='/' element={<Home />} />
                            {user && <Route path="/main" exact element={<Main/>} />}
                            <Route path="/signup" exact element={<SignUp />} />
                            <Route path="/login" exact element={<LogIn />} />
                            <Route path="/" element={<Navigate replace to="/login" />} />
                            <Route
                                exact
                                path="/"
                                element={isLoggedIn == "true" ? <UserDetails /> : <LogIn />}
                            />
                            <Route path="/userDetails" element={<UserDetails />} />

                            <Route path='/donatorlisting' element={<DonatorListing />}></Route>
                            <Route path='/donator/create' element={<DonatorCreate />}></Route>
                            <Route path='/donator/detail/:empid' element={<DonatorDetails />}></Route>
                            <Route path='/donator/edit/:empid' element={<DonatorEdit />}></Route> 

                            <Route path='/benlisting' element={<BenListing />}></Route>
                            <Route path='/ben/create' element={<BenCreate />}></Route>
                            <Route path='/ben/detail/:empid' element={<BenDetails />}></Route>
                            <Route path='/ben/edit/:empid' element={<BenEdit />}></Route> 


                            <Route path='/search/location/:location' element={<Home />} />
                            <Route path='/search/:keyword' element={<Home />} />
                            {/* <Route path='/login' element={<LogIn />} /> */}
                            <Route path='/logindonator' element={<LogInDonator />} />
                            {/* <Route path='/signup' element={<SignUp />} /> */}
                            <Route path='/signupd' element={<SignUpD />} />
                            <Route path='/aboutus' element={<AboutUs />} />
                            <Route path='/loginbenificiary' element={<LogInBenificiary />} />
                            <Route path='/benificiary' element={<Benificiary />} />
                            <Route path='/editbenificiary' element={<EditBenificiary />} />
                            <Route path='/editdonator' element={<EditDonator />} />
                            <Route path='/createben' element={<CreateBen />} />
                            <Route path='/createdon' element={<CreateDon />} />
                            <Route path='/donator' element={<Donator />} />
                            <Route path='/dashboard' element={<Dashboard />} />
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

export default App;

