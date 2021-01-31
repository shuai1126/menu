import React, { Component, Fragment } from 'react';
import './style.css';

import HomeIcon from '@material-ui/icons/HomeOutlined';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrillOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentityOutlined';

class Bottom extends Component {
  render() {
    return (
      <footer id="bottom">
        <div id="menu">
          <div class="item">
            <HomeIcon />
            <p>首页</p>
          </div>
          <div class="item">
            <OutdoorGrillIcon />
            <p>分类</p>
          </div>
          <div class="item">
            <PermIdentityIcon />
            <p>我的</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Bottom;
