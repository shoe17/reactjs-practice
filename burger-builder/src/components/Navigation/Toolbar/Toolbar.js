import Logo from '../../Logo/Logo'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Toolbar.module.css'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
);

export default Toolbar