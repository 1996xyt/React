/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';

import Homepage from '../Mmain/Homepage';
import Booklist from '../Mmain/Booklist';
import Countermark from '../Mmain/Countermark';
// const WysiwygBundle = (props) => (
//     <Bundle load={Wysiwyg}>
//         {(Component) => <Component {...props} />}
//     </Bundle>
// );

export default class CRouter extends Component {
    // requireAuth = (permission, component) => {
    //     const { auth } = this.props;
    //     const { permissions } = auth.data;
    //     // const { auth } = store.getState().httpData;
    //     if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
    //     return component;
    // };
    render() {
        return (
            <Switch>
                <Route exact path="/Homepage" component={Homepage} />
                <Route exact path="/Countermark" component={Countermark} />
                {/* <Route exact path="/app/auth/routerEnter" component={(props) => this.requireAuth('auth/testPage', <RouterEnter {...props} />)} /> */}
                <Route exact path="/Booklist" component={Booklist} />
                {/* <Route render={() => <Redirect to="/404" />} /> */}
            </Switch>
        )
    }
}