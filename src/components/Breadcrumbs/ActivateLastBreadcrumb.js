import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useLocation } from 'react-router-dom';
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
  
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

        return index === pathnames.length - 1 ? (
          <Link key={name} color="textPrimary" href={routeTo} onClick={handleClick} aria-current="page">
            {name}
          </Link>
        ) : (
          <Link key={name} color="inherit" href={routeTo} onClick={handleClick}>
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
