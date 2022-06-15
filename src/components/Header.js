/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Social from './Social';

const Navbar = styled.nav`
  background: ${props => props.theme.primaryColor};
`;
const NavItems = [
  { id: 1, name: 'home', url: '/' },
  { id: 2, name: 'about', url: '/aboutpage' },
  { id: 3, name: 'review', url: '/review' },
  { id: 4, name: 'blog', url: '/news' },
  { id: 5, name: 'Get In Touch', url: '/contact' },
];
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <Navbar className="flex items-center justify-between flex-wrap py-4 px-12">
        <div className="flex items-center flex-shrink-0 mr-6">
          <img
            src="https://colorlib.com/preview/theme/coffee/img/logo.png"
            alt="cafe-logo"
          />
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white"
            onClick={() => this.handleMobileMenu()}>
            {isActive ? (
              <svg
                className="fill-current h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <title>Menu</title>
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            ) : (
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            )}
          </button>
        </div>
        <div
          className={
            isActive
              ? 'w-full block flex-grow lg:flex lg:items-center lg:w-auto'
              : 'w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden'
          }>
          <div className="text-sm text-center lg:flex-grow uppercase">
            {NavItems.map(item => (
              <Link
                to={item.url}
                className="block mt-4 lg:inline-block lg:mt-0 text-sm mr-6"
                key={item.id}>
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <Social />
          </div>
        </div>
      </Navbar>
    );
  }
}
