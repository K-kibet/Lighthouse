import React from 'react';
import { Nav, NavbarBrand } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const Navbar = () => {
    return (
        <Nav >
            <NavbarBrand>
                Lighthouse
            </NavbarBrand>
            <Nav.Item>Item</Nav.Item>
            <Nav.Link href='/' title='home'>Home</Nav.Link>
            <Nav.Link href='' title=''>Performance</Nav.Link>
            <Nav.Link href='' title=''>Accessibility</Nav.Link>
            <Nav.Link href='' title=''>Best Practices</Nav.Link>
            <Nav.Link href='' title=''>SEO</Nav.Link>
            <Nav.Link href=''>PWA</Nav.Link>
            <Nav.Link href=''>Posts</Nav.Link>
            <Nav.Link href=''>About</Nav.Link>
        </Nav>
    );
}

export default Navbar;
