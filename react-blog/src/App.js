import React, { Component } from 'react';
// import Routes from './routes/index';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Button } from 'antd';
import styles from './App.css'
import Hheader from './Hheader/Hheader'
import {getasideRouter} from './api/api'
import Homepage from './Mmain/Homepage';
import Booklist from './Mmain/Booklist';
import Countermark from './Mmain/Countermark';
// import { Layout } from 'antd';
// const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Router>
            <div>
              <Hheader/> 
              <section className={styles.main}> 
              <div className={styles.content}>
              <Route exact path="/Homepage" component={Homepage} />

              <Route exact path="/Countermark" component={Countermark} />
              <Route exact path="/Booklist" component={Booklist} />
              </div>
              </section> 
            </div>
          </Router>
        <style>
        {`
                *{
                margin:0;
                padding:0;
              }
                        `}
          
          
        </style>
      </div>
      
    );
  }
}

export default App