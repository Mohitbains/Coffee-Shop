import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Icon = styled.i``;

const Socialicons = [
  {
    id: 1,
    name: 'fab fa-instagram',
    link: '#',
  },
  {
    id: 2,
    name: 'fab fa-facebook-f',
    link: '#',
  },
  { id: 3, name: 'fab fa-twitter', link: '#' },
];

const Social = () => (
  <div className="flex">
    {Socialicons.map(item => (
      <Link
        to={item.link}
        key={item.id}
        className="inline-block px-2 py-2 mt-4 lg:mt-0 text-xl">
        <Icon className={item.name} />
      </Link>
    ))}
  </div>
);

export default Social;
