import React from 'react';
import Nav from './Nav';
import './style.css';
import  { useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from 'react-paginate';
import { useRef } from "react";

function Homepage({ Toggle }) {   
    
    //setting state
  const [data, setData] = useState([]);
  const [limit,setLimit]=useState(5);
  const [pageCount,setPageCount]=useState(1);
  const currentPage=useRef();



  useEffect(() => {
    currentPage.current=1;
    // getAllUser();
    getPaginatedUsers();
  }, );


  //fetching all user
  const getAllUser = () => {
    fetch("http://localhost:3001/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };


  //deleting user
  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch("http://localhost:3001/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    } else {
    }
  };

  //pagination
  function changeLimit(){
    currentPage.current=1;
    getPaginatedUsers();
  }

  const handlePageClick = (selectedPage) => {
  
  };
  

  function getPaginatedUsers(){
    fetch(`http://localhost:3001/paginatedUsers?page=${currentPage.current}&limit=${limit}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setPageCount(data.pageCount);
        setData(data.result)
        
       
      });

  }


    return (        
    
        <div className='px-3'>            
            <Nav Toggle={Toggle} />            
                <div className='container-fluid'>                
                    <div className='row g-3 my-2'>                    
                        <div className='col-md-3 p-1'>                        
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>                            
                                <div>                                
                                    <h3 className='fs-2'>230</h3>                                
                                    <p className='fs-5'>Donators</p>                            
                                </div>                            
                                    <i className='bi bi-people p-3 fs-1'></i>                        
                            </div>                    
                        </div>                    
                        <div className='col-md-3 p-1'>                        
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>                            
                                <div>                                
                                     <h3 className='fs-2'>2450</h3>                                
                                     <p className='fs-5'>Benificiaries</p>                           
                                </div>                            
                                     <i className='bi bi-people p-3 fs-1'></i>                       
                            </div>                    
                        </div>                    
                        <div className='col-md-3 p-1'>                       
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>                            
                                <div>                                
                                    <h3 className='fs-2'>100+</h3>                                
                                    <p className='fs-5'>Jobs</p>                            
                                </div>                           
                                    <i className='bi bi-table p-3 fs-1'></i>                        
                            </div>                    
                        </div>                    
                        <div className='col-md-3 p-1'>                        
                            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>                            
                                <div>                                
                                    <h3 className='fs-2'>50+</h3>                               
                                    <p className='fs-5'>Courses</p>                           
                                </div>                           
                                    <i className='bi bi-clipboard-data p-3 fs-1'></i>                       
                            </div>                    
                        </div>               
                    </div>           
                </div>
{/* ------------------------------------- */}

                <div className="auth-wrapper" style={{ height: "auto" }}>
                    <div className="auth-inner" style={{ width: "auto" }}>
                        
                        <table style={{ width: 500 }}>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Type</th>
                            <th>Delete</th>
                        </tr>
                        {data && data.map((i) => {
                            return (
                            <tr>
                                <td>{i.fname}</td>
                                <td>{i.email}</td>
                                <td>{i.userType}</td>
                                <td>
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => deleteUser(i._id, i.fname)}
                                />
                                </td>
                            </tr>
                            );
                        })}
                        </table>
                        <br></br>
                        <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        marginPagesDisplayed={2}
                        containerClassName="pagination justify-content-center"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        activeClassName="active"
                        forcePage={currentPage.current-1}
                        />
                        <center>
                        <input placeholder="Limit" onChange={e=>setLimit(e.target.value)}/>
                        <button onClick={changeLimit}>Set Limit</button>
                        </center>
                    </div>
                    </div>
{/* ----------------------------------------- */}
                <div>
                    <table class="table caption-top bg-white rounded mt-2">                
                    <caption className='text-white fs-4'>Recent Donations</caption>                
                        <thead>                    
                            <tr>                        
                                <th scope="col">#</th>                        
                                <th scope="col">First</th>                        
                                <th scope="col">Last</th>                        
                                <th scope="col">Handle</th>                    
                            </tr>                
                        </thead>                
                        
                        <tbody>                    
                            <tr>                        
                                <th scope="row">1</th>                        
                                    <td>Mark</td>                        
                                    <td>Otto</td>                        
                                    <td>@mdo</td>                    
                            </tr>                    
                            <tr>                        
                                <th scope="row">2</th>                        
                                    <td>Jacob</td>                        
                                    <td>Thornton</td>                        
                                    <td>@fat</td>                    
                            </tr>                    
                            <tr>                        
                                <th scope="row">3</th>                        
                                    <td>Larry</td>                        
                                    <td>the Bird</td>                        
                                    <td>@twitter</td>                    
                            </tr>                    
                            <tr>                        
                                <th scope="row">4</th>                        
                                    <td>Larry</td>                        
                                    <td>the Bird</td>                        
                                    <td>@twitter</td>                    
                            </tr>                    
                            <tr>                        
                                <th scope="row">5</th>                        
                                    <td>Larry</td>                        
                                    <td>the Bird</td>                        
                                    <td>@twitter</td>                    
                            </tr>                    
                            <tr>                        
                                <th scope="row">6</th>                        
                                    <td>Larry</td>                        
                                    <td>the Bird</td>                        
                                    <td>@twitter</td>                    
                            </tr>                
                        </tbody>           
                    </table>        
                </div> 
                {/* ------------------------------ */}
                </div>   
                
            )
        }
export default Homepage