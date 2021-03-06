import React, { useState } from 'react';

import classes from './Layout.module.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  }

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  }

  return (
    <div>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler}/>
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerClosedHandler} />
      <main className={classes.Content} onClick={sideDrawerClosedHandler}>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
