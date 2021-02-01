import React, { PureComponent as Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import { FormOutlined } from "@ant-design/icons";
import './style.css'

class Nav extends Component{
    constructor() {
        super();
        this.state = {};
    }

    render(){
        return(
            <div style={{position: "fixed",top: 0,width: "100%",zIndex: "999999"}}>
                <NavBar
                mode="dark"
                leftContent={ 
                    <div className="lt-icon" onClick={() => {this.props.history.push("/classification");}}>
                    <Icon type="left" />
                    </div>
                }
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <FormOutlined key="1" onClick={() => {this.props.history.push("/question");}} />
                ]}
                >菜谱大全</NavBar>
            </div>
        )   
    }
}

export default withRouter(Nav);