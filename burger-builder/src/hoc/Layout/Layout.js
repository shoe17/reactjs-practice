import classes from './Layout.module.css';
import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
       this.setState({showSideDrawer: false});
    }
    sideDrawerOpenedHandler = () => {
        this.setState({ showSideDrawer: true});
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar 
                    open={this.state.showSideDrawer}
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                />
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}>
                </SideDrawer>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

export default Layout;