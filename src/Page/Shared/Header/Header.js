import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
//import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Header.css"

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user)
  return (
    <div className="">
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" >
        <Container >
          <Navbar.Brand href="/home" className="fs-1 fw-bold">Tra<span className="text-danger">Vio</span></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="text-white" as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/contactUs">Contact Us</Nav.Link>
            <NavDropdown id="nav-dropdown-dark-example "
              title="Dashboard"
              menuVariant="dark">
              <Navbar.Text ><Nav.Link href="#login">{user?.displayName}</Nav.Link></Navbar.Text>
              <NavDropdown.Item as={Link} to="/myOrders">My Orders</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/manageOrders">Manage Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/addServices">Add a new services</NavDropdown.Item>
            </NavDropdown>

            {
              user?.email ?
                <button onClick={logOut} className="btn btn-outline-danger px-3 bn5">Logout</button> :
                <Nav.Link as={Link} to="/login"><button className="btn btn-outline-danger px-3 bn5">Login</button></Nav.Link>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};









// const Header = () => {

//   const { user, logOut } = useAuth()

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul className="navbar-nav">
//             <li className="nav-item mx-3">
//               <Link to="/home">Home</Link>
//             </li>
//             <li className="nav-item mx-3">
//               <Link to="/about">About</Link>
//             </li>
//             <li className="nav-item mx-3">
//               <Link to="/services">Services</Link>
//             </li>
//             <li className="nav-item mx-3">
//               <Link to="/private-one">My Private 1</Link>
//             </li>

//             {

//               user.email ?
//                 <button onClick={logOut}> Sign Out</button>
//                 :
//                 <li className="nav-item mx-3">
//                   <Link to="/login">Login</Link>
//                 </li>
//             }
//             <p>Name: {user?.displayName}</p>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

export default Header;