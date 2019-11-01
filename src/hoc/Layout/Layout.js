import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Layout.css';

class Layout extends React.Component {

    render() {

        return (
            <Fragment>
            <div className="mnuContainer">
                <div className="mnuHeader">
                <ul>
                    <li>
                        <NavLink className="mnu" to="/" exact >Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="mnu" to="/page1" >Page 1</NavLink>
                    </li>
                    <li>
                        <NavLink className="mnu" to="/page2">Page 2</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            {this.props.children}
            </Fragment>
        )
    }
}

export default Layout;