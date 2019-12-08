import React from 'react';

import goStack from '../../assets/goStack.jpg';

function Header() {
  return (
    <header id="main-header">
      <img src={goStack}/>
      <div>
        <a href="">Alisson Macedo</a>
      </div>
    </header>
  )
}


export default Header;