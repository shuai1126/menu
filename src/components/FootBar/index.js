import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import { withRouter } from "react-router-dom";
import HomeIcon from '@material-ui/icons/HomeOutlined';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrillOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentityOutlined';

class FootBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "redTab",
            hidden: false,
            fullScreen: false
        };
    }
    componentDidMount() {
        console.log(this);
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#f78a1f"
                barTintColor="white"
            >
                <TabBar.Item
                    title="首页"
                    key="Home"
                    icon={
                        <HomeIcon    style={{
                            width: "22px",
                            height: "22px"
                        }}/>
                    }
                    selectedIcon={
                        <HomeIcon    style={{
                            width: "22px",
                            height: "22px"
                        }}/>
                    }
                    selected={this.state.selectedTab === "blueTab"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "blueTab"
                        });
                        this.props.history.push("/home");
                    }}
                    data-seed="logId"
                ></TabBar.Item>
                <TabBar.Item
                    icon={
                        <OutdoorGrillIcon style={{
                            width: "22px",
                            height: "22px"
                        }}/>
                    }
                    selectedIcon={
                        <OutdoorGrillIcon style={{
                            width: "22px",
                            height: "22px"
                        }}/>
                    }
                    title="分类"
                    key="find"
                    selected={this.state.selectedTab === "redTab"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "redTab"
                        });
                        this.props.history.push("/classification");
                    }}
                    data-seed="logId1"
                ></TabBar.Item>
                <TabBar.Item
                    icon={
                        <img
                            style={{
                                width: "22px",
                                height: "22px"
                            }}
                            src={require("../../assets/images/chufang.png")}
                            alt=""
                        />
                    }
                    selectedIcon={
                        <img
                            style={{
                                width: "22px",
                                height: "22px"
                            }}
                            src={require("../../assets/images/chufang_act.png")}
                            alt=""
                        />
                    }
                    title="厨房故事"
                    key="store"
                    selected={this.state.selectedTab === "greenTab"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "greenTab"
                        });
                        this.props.history.push("/kitchenStory");
                    }}
                ></TabBar.Item>
                <TabBar.Item
                    icon={
                        <PermIdentityIcon  style={{
                            width: "22px",
                            height: "22px"
                        }}/>
                    }
                    selectedIcon={
                        <PermIdentityIcon  style={{
                            width: "22px",
                            height: "22px"
                        }}/>
                    }
                    title="我的"
                    key="more"
                    selected={this.state.selectedTab === "yellowTab"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "yellowTab"
                        });
                        this.props.history.push("/user");
                    }}
                ></TabBar.Item>
            </TabBar>
        );
    }
}

export default withRouter(FootBar);
