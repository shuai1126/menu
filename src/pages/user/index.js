import React,{Component, Fragment} from 'react'
import './style.css'
import AccountIcon from '@material-ui/icons/AccountCircleRounded'
import StarIcon from '@material-ui/icons/StarOutlineOutlined'
import ClassIcon from '@material-ui/icons/ClassOutlined'
import CommentIcon from '@material-ui/icons/CommentOutlined'
import ShareIcon from '@material-ui/icons/ShareOutlined'
import SettingIcon from '@material-ui/icons/SettingsOutlined'
class User extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <div id="title">开启美食之旅<span class="title-logo"><AccountIcon /></span></div>
          <div id="setlist">
            <ul>
              <li class="set-item">我的收藏<span class="logo"><StarIcon /></span> </li><hr/>
              <li class="set-item">我的课程<span class="logo"><ClassIcon /> </span></li><hr/>
              <li class="set-item">意见反馈<span class="logo"><CommentIcon /> </span></li><hr/>
              <li class="set-item">分享给朋友<span class="logo"><ShareIcon /> </span></li><hr/>
              <li class="set-item">设置<span class="logo"><SettingIcon /> </span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}




export default User;