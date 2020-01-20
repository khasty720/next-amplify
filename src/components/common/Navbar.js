import React, { useState, useContext } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar as BsNavbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { AppContext } from './AppContext';
import { signOut } from '../../utils/auth';

const Navbar = () => {
  const { user } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <BsNavbar color="light" light expand="md">
      <Link href="/">
        <a className="navbar-brand">Hyralinx</a>
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link href="/devices">
              <a className="nav-link">Devices</a>
            </Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              { (user && user.username) || 'Profile'}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                  Option 1
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => signOut()}>
                  Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </BsNavbar>
  );
};

export default Navbar;
