import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { getasideRouter} from '../api/api'
import styles from './homepage.css'
import { Menu, Icon, Switch } from 'antd';
const { SubMenu } = Menu;

class Homepage extends Component{
      constructor(props){
        super(props)
        this.state={
            //我们使用state里面的services来保存所有的service
            //刚开始的时候，内容为空 
            navarr:[],
            content:[],
        }
    }
    componentDidMount(){
      getasideRouter().then(res=>{
        console.log(res)
        if(res.code==200){
                  this.setState({
                    navarr : res.res.category
                  })
        }
      })
  }
    menuClick({ item, key, keyPath }){
      console.log(key)
    }
    render(){
          const navShows = this.state.navarr.map((item,index)=>{
              console.log(item)
                return <Menu.Item key={item.cat_id}><Link to={'/Homepage'+`/`+item.router}>{item.cat_name}</Link></Menu.Item>
        })
        return(
              <div className={styles.homepage}>
          <aside className={styles.asideLeft}>
          <Router>
          <Menu onClick={this.menuClick}>
            {navShows}
          </Menu>
          </Router>
          </aside>
          <div className={styles.content}>

          </div>
          <aside className={styles.asideRight}>

          </aside>

              </div>
        )
    }
}
export default Homepage;
