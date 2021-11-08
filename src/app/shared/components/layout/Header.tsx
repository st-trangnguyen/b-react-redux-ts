import React, { useState, useEffect } from 'react';
import { Nav } from './Nav';

export function Header() {
  return (
    <header className="header">
      <h1>BOILERPLATE</h1>
      <Nav />
    </header>
  )
}
