import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import './src/bootstrap.min.css';

// const Header = () => {
//   return (
 
function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <container>
    <Nav variant="dark" activeKey="1" onSelect={handleSelect}>
      <nav>
        <form inline
        
          type="text"
          placeholder="Search"
          className="mr-sm-2"/>
        
      </nav>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          JOBS
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          COURSES
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" >
          ABOUT US
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" >
          CONTACT US
        </Nav.Link>
      </Nav.Item>
      
    </Nav>
    </container>
  );
}

export default NavDropdownExample;
//   )
// }

// export default Header