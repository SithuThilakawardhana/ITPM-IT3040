import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'


//logout
const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };

const Sidebar = () =>
{  
    return (    
    <div className='list-group list-group-flush'>        


            <div className='bg-blue sidebar p-2'>
                <div className='m-2'>
                <i className='bi bi-donation me-3 fs-4'></i>   
                    <span className='brand-name fs-4'>DoNation</span>
                </div>
            </div>

                        <hr className='text-dark' />        
            <div className='list-group list-group-flush'>    
            <button>
                <a className='list-group-item py-2'>              
                    <i className='bi bi-speedometer2 fs-5 me-3'></i>            
                        <span >Dashboard</span>         
                </a>            
            </button>
        <br/>
            <button>
                <Link to='/' className='list-group-item py-2'>
                    <i className='bi bi-house fs-5 me-3'></i>
                    <span>Home Page</span>
                </Link>
            </button>

        <br/>
            <button>      
                <a className='list-group-item py-2'>              
                    <i className='bi bi-table fs-5 me-3'></i>              
                        <span >Jobs</span>            
                </a>  
            </button> 
            <br/>
            <button>         
                <a className='list-group-item py-2'>             
                    <i className='bi bi-clipboard-data fs-5 me-3'></i>              
                        <span >Courses</span>           
                </a> 
            </button> 
            <br/>
            <button>           
            <Link to='/benlisting' className='list-group-item py-2'>
                    <i className='bi bi-house fs-5 me-3'></i>
                    <span>Benificiaries</span>
                </Link>
            </button>
            <br/>
            <button>    
            <Link to='/donatorlisting' className='list-group-item py-2'>
                    <i className='bi bi-house fs-5 me-3'></i>
                    <span>Donators</span>
                </Link>  
            </button>
        <br/>
            <button>    
                <a onClick={logOut} className='list-group-item py-2'>               
                    <i className='bi bi-power fs-5 me-3'></i>             
                        <span >Logout</span>            
                </a> 
            </button>      
            </div>    
    </div>  
    )
}
export default Sidebar;