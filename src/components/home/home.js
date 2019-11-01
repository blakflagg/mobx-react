import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Home extends React.Component {
    render() {
        const { store } = this.props;
        console.log('store = ' + store);
        return (
            <div>
                <h1>
                    HOME
                {store.pageMSG}
                </h1>
            </div>
        )
    }

}

export default Home;