import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

    }
    changeMSG = () => {
        console.log(this.props)
        this.props.store.changeMSG("This is a new message");
    }

    render() {
        const { store } = this.props;
        console.log('store = ' + store);
        return (
            <div>
                <h1>
                    HOME
                {store.pageMSG}
                </h1>
                <div className="btnUpdate">
                    <button onClick={this.changeMSG}>
                        Update the message here
                    </button>
                </div>
            </div>
        )
    }

}

export default Home;