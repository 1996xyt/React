import React, { Component } from 'react'
import styles from './HheaderStyle.css'
import { NavLink } from 'react-router-dom'
import { Button,Input, Icon} from 'antd';
const Search = Input.Search;
class Hheader extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.containerleft}>  
                    <div className={styles.logo}>
                        <img src="https://oss.love2.io/static/logo.svg" alt=""/>
                    </div>
                    <div className={styles.menutags}>
                        <div><NavLink to="/Homepage">首页</NavLink></div>
                        <div><NavLink to="/Booklist">书单</NavLink></div>
                        <div><NavLink to="/Countermark">标签</NavLink></div>
                    </div>
                    </div>
                    <div className={styles.containerright}>
                        <div className={styles.search}>
                            <Search
                                placeholder="搜索"
                                onSearch={value => console.log(value)}
                                style={{ width: '75%' }}
                                size="small"
                            />
                        </div>
                        <div className={styles.smallbtn}>
                            <Button type="dashed">
                                <Icon type="file-text" />
                            </Button>
                        </div>
                        <div className={styles.smallbtn}>
                            <Button type="dashed">
                                <Icon type="bell" />
                            </Button>
                        </div>
                        <div className={styles.lagerbtn}>
                            <Button type="dashed">
                                <Icon type="github" />
                                Github 登录
                            </Button>
                        </div>
                    </div>
                </div>

            </header>

        )
    }
}
export default Hheader;