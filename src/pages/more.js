import React,{PureComponent as Component} from "react";
import { Tabs, Badge, WhiteSpace, Icon } from 'antd-mobile';
import "../styles/more.scss";
import Tools from '../components/Classify/tools';
import Meat from "../components/Classify/meat";
import Interest from "../components/Classify/interest";

const tabs = [
    { title: <Badge text={'hot'}>热门分类</Badge> },
    { title: <Badge dot>食材</Badge> },
    { title: <Badge dot>奇趣发现</Badge> },
  ];

 const tabs1 = [
  { title: '器具', key: 't1' },
  { title: '烹饪方式', key: 't2' },
  { title: '口味', key: 't3' },
  { title: '场合', key: 't4' },
  { title: '菜式', key: 't5' },
  { title: '菜系', key: 't6' },
  { title: '特色', key: 't7' },
  { title: '口味', key: 't8' },
  { title: '烘焙', key: 't9' },
  { title: '主食', key: 't10' },
  { title: '节日', key: 't11' },
];

const tabs2 = [
    { title: '奶制品', key: 't1' },
    { title: '肉类', key: 't2' },
    { title: '水产', key: 't3' },
    { title: '粗粮', key: 't5' },
    { title: '水果', key: 't6' },
];

const tabs3 = [
    { title: '风味小吃', key: 't1' },
    { title: '火锅', key: 't2' },
    { title: '寿司', key: 't3' },
    { title: '地方特色', key: 't5' },
    { title: '异国风情', key: 't6' },
];

export default class More extends Component{
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="whole">
                <div className="icon" onClick={() => {this.props.history.push('/classification');}}><Icon className="return" type="left" size="md"/></div>
                <Tabs tabs={tabs}
                initialPage={0}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                <div className="htab" style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', height: '500px', backgroundColor: '#fff' }}>
                    <div style={{ height: '500px' }}>
                        <WhiteSpace />
                        <Tabs tabs={tabs1}
                        initialPage={'t1'}
                        tabBarPosition="left"
                        tabDirection="vertical"
                        >
                            <div className="vtab">
                                <Tools />
                            </div>
                        </Tabs>
                        <WhiteSpace />
                    </div>
                </div>
                <div className="htab" style={{ display: 'flex', alignItems: 'cneter', justifyContent: 'left', height: '500px', backgroundColor: '#fff' }}>
                    <div style={{ height: '500px' }}>
                        <WhiteSpace />
                        <Tabs tabs={tabs2}
                        initialPage={'t2'}
                        tabBarPosition="left"
                        tabDirection="vertical"
                        >
                            <div className="vtab">
                                <Meat />
                            </div>
                        </Tabs>
                        <WhiteSpace />
                    </div>
                </div>
                <div className="htab" style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', height: '500px', backgroundColor: '#fff' }}>
                    <div style={{ height: '500px' }}>
                        <WhiteSpace />
                        <Tabs tabs={tabs3}
                        initialPage={'t1'}
                        tabBarPosition="left"
                        tabDirection="vertical"
                        >
                            <div className="vtab">
                            <Interest />
                            </div>
                        </Tabs>
                        <WhiteSpace />
                    </div>
                </div>
                </Tabs>
            </div>
        );
    }
}