import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/auth/login">
            Login
          </Link>
        </li>
        <li>
          <Link to="/auth/register">
            Register
          </Link>
        </li>
        <li>
          <Link to="/home">
            Home
          </Link>
        </li>
        <li>
          <ul>
            <li>
              <Link to="/articles">
                Article List
              </Link>
            </li>
            <li>
              <Link to="/articles/12">
                Article Detail
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <Link to="/order/choose-store">
                Choose Store
              </Link>
            </li>
            <li>
              <Link to="/order/choose-products">
                Choose Product
              </Link>
            </li>
            <li>
              <Link to="/order/verify">
                Verify
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
