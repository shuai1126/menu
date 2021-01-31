import React, { Component } from 'react';
import './style.css';
import Nav from "../../components/Nav/nav";
import HomeMenuHeader from '../../components/home-menu-header';
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [
        'https://seopic.699pic.com/photo/50140/6207.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50072/2031.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50092/7677.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50074/8934.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50134/5023.jpg_wh1200.jpg',
        'https://goss1.cfp.cn/creative/vcg/800/new/VCG211294679022.jpg',
      ],//图片数组
      imgs1: [
        'https://seopic.699pic.com/photo/50125/1302.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50086/5096.jpg_wh1200.jpg',
        'https://goss.cfp.cn/creative/vcg/800/new/VCG211184353525-JZL.jpg',
      ],
      imgs2: [
        'https://seopic.699pic.com/photo/50099/7157.jpg_wh1200.jpg',
        'https://seopic.699pic.com/photo/50134/5023.jpg_wh1200.jpg',
        'https://goss1.cfp.cn/creative/vcg/800/new/VCG211294679022.jpg',
      ],
      showIndex: 0,//显示第几个图片
      showIndex1: 0,//显示第几个图片
      showIndex2: 0,//显示第几个图片
      timer: null,//定时器
      timer1: null,
      show: false,//前后按钮
      tinyTitle: [
        {

          img: (
            <svg t="1612010426322" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="840" width="200" height="200">
              <path d="M955.1 466.6c-5.5-8.4-14.9-13.4-24.9-13.4H625.5V181.8c0-47.3-38.4-85.8-85.6-85.8h-55.8c-47.2 0-85.6 38.5-85.6 85.8v161.7c0 0.7 0 1.4 0.1 2.1 0 0.4 1.9 40.2-26.3 70.5-23 24.7-60.4 37.2-111.2 37.2H64V928h698.9c11.9 0 22.7-7.1 27.5-18.1l167.3-415c3.8-9.3 2.9-19.9-2.6-28.3zM123.7 513h107.5v355.4H123.7V513z m619.5 355.2H291V511.7c53.6-4.9 95.5-23.3 125-54.9 43-46.2 42.7-104.2 42.3-114.1v-161c0-14.3 11.6-25.9 25.9-25.9H540c14.3 0 25.9 11.6 25.9 25.9v273.4h2V513H885L743.2 868.2z" fill="#ff6633" p-id="841"></path>
            </svg>
          ),
          name: '今日推荐',
        },
        {
          img: (
            <svg t="1612010847201" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1137" width="200" height="200">
              <path
                d="M931.28 594.32c0-52.64-27.2-100.07-70.39-130.26-16.32-12.37-36.42-20-58.44-20h-38.44V284.75c0-17.63-14.29-31.93-31.93-31.93-17.63 0-31.93 14.29-31.93 31.93v159.31h-148.4V284.75c0-17.63-14.29-31.93-31.93-31.93-17.63 0-31.93 14.29-31.93 31.93v159.31h-148.4V284.75c0-17.63-14.29-31.93-31.93-31.93-17.63 0-31.93 14.29-31.93 31.93v159.31h-55.56c-10.48 0-20.39 2.1-29.85 5.18-58.44 25.81-97.31 81.22-97.31 145.08 0 34.7 11.13 66.8 29.85 93.14v172.35c0 53.66 43.66 97.31 97.32 97.31h582.37c53.66 0 97.32-43.65 97.32-97.31V689.69c19.71-26.75 31.51-59.67 31.51-95.37z m-128.83-86.4c18.46 0 33.46 15.01 33.46 33.46v124.23c-17.38 16.08-40.43 26.14-65.92 26.14-53.73 0-97.44-43.71-97.44-97.43H608.7c0 53.72-43.71 97.43-97.43 97.43-49.99 0-90.84-38-96.33-86.55 0.24-3.61 0.55-7.21 0.55-10.89h-65.5c0 3.67 0.31 7.27 0.55 10.89-5.5 48.55-46.34 86.55-96.33 86.55-26.27 0-50.04-10.56-67.58-27.52V541.38c0-18.46 15.01-33.46 33.46-33.46h582.36z m0 385.35H220.08c-18.46 0-33.46-15.01-33.46-33.45V740.57c20.59 9.56 43.43 15.04 67.58 15.04 52.49 0 99.06-25.32 128.53-64.26 29.47 38.94 76.04 64.26 128.53 64.26 52.99 0 99.94-25.8 129.36-65.37 29.42 39.57 76.38 65.37 129.37 65.37 23.5 0 45.77-5.17 65.92-14.24v118.45c0.01 18.45-15 33.45-33.46 33.45zM313.75 222.31c44.35-4.31 45.16-30.44 47.67-63.78 3.68-48.91-55.36-114.97-61.17-82.98-5.82 31.98-46.04 81.41-46.04 81.41s-5.94 9.2-1.28 26.16c6.78 24.69 35.34 41.66 60.82 39.19zM526.62 222.31c44.35-4.31 45.16-30.44 47.67-63.78 3.68-48.91-55.36-114.97-61.17-82.98-5.82 31.98-46.04 81.41-46.04 81.41s-5.94 9.2-1.28 26.16c6.77 24.69 35.33 41.66 60.82 39.19zM739.48 222.31c44.35-4.31 45.16-30.44 47.67-63.78 3.68-48.91-55.36-114.97-61.17-82.98-5.82 31.98-46.04 81.41-46.04 81.41s-5.94 9.2-1.28 26.16c6.78 24.69 35.33 41.66 60.82 39.19z"
                fill="#ff6633"
                p-id="1138"
              ></path>
            </svg>
          ),
          name: '精品烘焙',
        },
        {
          img: (
            <svg t="1612010895984" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1303" width="200" height="200">
              <path d="M917.333 853.333v64H106.667v-64h810.666zM512 213.333c221.452 0 401.426 177.593 405.27 398.127l0.063 7.207v170.666H106.667V618.667c0-223.86 181.474-405.334 405.333-405.334z m0 64c-186.269 0-337.69 149.204-341.269 334.616l-0.064 6.718v106.666h682.666V618.667c0-183.998-145.586-333.992-327.849-341.072l-6.767-0.197-6.717-0.065zM512 384v64c-92.478 0-167.777 73.554-170.585 165.35l-0.082 5.317h-64c0-127.546 101.755-231.325 228.514-234.588L512 384z m85.333-277.333v64H426.667v-64h170.666z" p-id="1304" fill="#ff6633"></path>
            </svg>
          ),
          name: '精品美食',
        },
        {
          img: (
            <svg t="1612010940902" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1600" width="200" height="200">
              <path
                d="M922.685523 694.946682l-0.005117 0.002047-0.10847 0.013303L922.571936 142.78396c0-40.405245-32.872688-73.277934-73.277934-73.277934L176.107927 69.506027c-40.405245 0-73.277934 32.872688-73.277934 73.277934l0 736.001727c0 40.406269 32.872688 73.277934 73.277934 73.277934l498.732835 0-0.011256 0.099261L922.685523 694.946682zM672.701029 862.139565l-0.549515-126.794801c1.085728-26.399253 16.202007-43.415812 38.646182-43.415812 0.819668 0 1.655709 0.023536 2.485611 0.070608l124.030851 0.732687L672.701029 862.139565zM176.107927 889.25411c-5.77247 0-10.468422-4.695952-10.468422-10.468422L165.639504 142.78396c0-5.77247 4.695952-10.468422 10.468422-10.468422l673.186076 0c5.77247 0 10.468422 4.695952 10.468422 10.468422l0 488.482377-143.644561-2.013867c-1.77339-0.088004-3.559059-0.13303-5.320169-0.13303-56.814983 0-99.479689 44.089148-101.446483 104.83465l-0.022513 0.701988 1.918699 154.597007L176.107927 889.253086zM312.181045 334.707085l384.688429-1.046842c10.406001 0 28.263717-14.060227 28.263717-31.405267s-17.857716-31.405267-28.263717-31.405267l-384.688429 1.046842c-10.406001 0-28.263717 13.013385-28.263717 30.358425S301.775045 334.707085 312.181045 334.707085zM312.181045 498.004241l384.688429-1.046842c10.406001 0 28.263717-14.060227 28.263717-31.405267 0-17.344017-17.857716-31.405267-28.263717-31.405267l-384.688429 1.046842c-10.406001 0-28.263717 13.013385-28.263717 30.358425C283.917328 482.897172 301.775045 498.004241 312.181045 498.004241zM527.292288 606.865601 310.61027 606.865601c-14.741749 0-26.692942 14.060227-26.692942 31.405267s11.951193 31.405267 26.692942 31.405267l216.682018 0c14.741749 0 26.692942-14.060227 26.692942-31.405267S542.03506 606.865601 527.292288 606.865601z"
                p-id="1601"
                fill="#ff6633"
              ></path>
            </svg>
          ),
          name: '新菜展示',
        },
      ],
      hotRecipe: [
        {
          id: '11e2324',
          img: 'http://img.jiankangzhushou.net/caipu/thumb/172203/53/km0voycr0i2.jpg',
          name: '面烧板筋',
        },
        {
          id: '112qq',
          img: 'http://img.jiankangzhushou.net/caipu/thumb/172404/27/js1uty3joob.jpg',
          name: '瘦肉炒青椒',
        },
        {
          id: '12ew',
          img: 'http://img.jiankangzhushou.net/caipu/thumb/173430/29/p12zwkzczci.jpg',
          name: '粉蒸排骨',
        },
        {
          id: '23dsds',
          img: 'http://img.jiankangzhushou.net/caipu/thumb/171202/27/z30gd1h4wna.jpg',
          name: '香酥鸡排',
        },
      ],
      elaborateCourse: [
        {
          id: '11e2324',
          img: 'http://img.jiankangzhushou.net/caipu/post/20190320/e06a0e43042942e4ac85da19eebd2ad9.jpeg',
          name: '中餐烹饪',
        },
        // {
        //   id: '112qq',
        //   img: 'http://img.jiankangzhushou.net/caipu/thumb/172404/27/js1uty3joob.jpg',
        //   name: '瘦肉炒青椒',
        // },
        // {
        //   id: '12ew',
        //   img: 'http://img.jiankangzhushou.net/caipu/thumb/173430/29/p12zwkzczci.jpg',
        //   name: '粉蒸排骨',
        // },
        // {
        //   id: '23dsds',
        //   img: 'http://img.jiankangzhushou.net/caipu/thumb/171202/27/z30gd1h4wna.jpg',
        //   name: '香酥鸡排',
        // },
      ],
    };
  }
  render () {
    const { tinyTitle, hotRecipe } = this.state;
    return (
      <div>
        <Nav></Nav>
        <div className="home-content">
          <div className="ReactCarousel">
            <div className="contain">
              <ul className="ul">
                {
                  this.state.imgs.map((value, index) => {
                    return (
                      <li className={index === this.state.showIndex ? 'show' : ''} key={index}>
                        <img src={value} alt="轮播图" />
                      </li>
                    )
                  })
                }
              </ul>
              {/* 下面的轮播图小按钮 */}
              <ul className="dots" style={{ width: this.state.imgs.length * 20 + 'px' }}>
                {
                  this.state.imgs.map((value, index) => {
                    return (
                      <li key={index}
                        className={index === this.state.showIndex ? 'active' : ''}
                        onClick={() => { this.change(index) }}>
                      </li>)
                  })
                }
              </ul>
              <div className="control">
                <span className="left" onClick={(e) => { this.previous(e) }}>
                  <div className="leftRow"></div>
                </span>
                <span className="right" onClick={(e) => { this.next(e) }}>
                  <div className="rightRow"></div>
                </span>
              </div>
            </div>
          </div>
          <div className="home-tinyTitle">
            {tinyTitle.map((item) => {
              return (
                <div className="tt" key={item.id}>
                  {item.img}
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
          {/* ajia-第二个轮播图 */}
          <div className="ReactCarouse">
            <div className="contain">
              <ul className="ul">
                {
                  this.state.imgs1.map((value, index) => {
                    return (
                      <li className={index === this.state.showIndex1 ? 'show' : ''} key={index}>
                        {/* <img src={require((value)+"")}  alt="轮播图" /> */}
                        <img src={value} alt="轮播图" />
                      </li>
                    )
                  })
                }
              </ul>
              {/* 下面的轮播图小按钮 */}
              <ul className="dots" style={{ width: this.state.imgs1.length * 20 + 'px' }}>
                {
                  this.state.imgs1.map((value, index) => {
                    return (
                      <li key={index}
                        className={index === this.state.showIndex1 ? 'active' : ''}
                        onClick={() => { this.change1(index) }}>
                      </li>)
                  })
                }
              </ul>
            </div>
          </div>
          {/* 热门菜谱 */}
          <div className="hot-recipe">
            <HomeMenuHeader title="热门菜谱" />
            <div className="hr-scroll">
              {hotRecipe.map((item) => (
                <div key={item.id}>
                  <img src={item.img} alt="" srcSet="" />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          {/*  */}
          <div className="ReactCarouse3">
            <div className="contain1">
              <ul className="ul1">
                {
                  this.state.imgs2.map((value, index) => {
                    return (
                      <li className={index === this.state.showIndex2 ? 'show' : ''} key={index}>
                        {/* <img src={require((value)+"")}  alt="轮播图" /> */}
                        <img src={value} alt="轮播图" />
                      </li>
                    )
                  })
                }
              </ul>
              {/* 下面的轮播图小按钮 */}
              <ul className="dots" style={{ width: this.state.imgs1.length * 20 + 'px' }}>
                {
                  this.state.imgs1.map((value, index) => {
                    return (
                      <li key={index}
                        className={index === this.state.showIndex2 ? 'active' : ''}
                        onClick={() => { this.change1(index) }}>
                      </li>)
                  })
                }
              </ul>
            </div>
          </div>
          {/* 精选课程 */}
          <div className="hot-recipe">
            <HomeMenuHeader title="精选课程" />
            <div className="hr-scroll">
              {hotRecipe.map((item) => (
                <div key={item.id}>
                  <img src={item.img} alt="" srcSet="" />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          {/* 精选菜品 */}
          <div className="good-dishes">
            <span className="line"></span>
            <span>精选推荐</span>
            <span className="line"></span>
          </div>
          {/* 占位  */}
          <div style={{ height: '58px' }}>

          </div>
        </div>
      </div>
    );
  }
  //一开始自动播放
  componentDidMount () {
    this.start();
  }
  //销毁前清楚定时器
  componentWillMount () {
    this.stop();
  }
  //暂停
  stop = () => {
    let { timer } = this.state;
    clearInterval(timer);
  }
  //开始
  start = () => {
    let { timer } = this.state;
    timer = setInterval(() => {
      this.next();
    }, 3000);
    this.setState({
      timer
    })
  }

  start1 = () => {
    let { timer1 } = this.state;
    timer1 = setInterval(() => {
      this.next();
    }, 1000);
    this.setState({
      timer1
    })
  }

  //点击下面的按钮切换当前显示的图片
  change = (index) => {
    let { showIndex } = this.state;
    showIndex = index;
    this.setState({
      showIndex
    })
  }
  change1 = (index) => {
    let { showIndex1 } = this.state;
    showIndex1 = index;
    this.setState({
      showIndex1
    })
  }
  previous = (e) => { //上一张
    let ev = e || window.event;
    let { showIndex, imgs } = this.state;
    if (showIndex <= 0) {
      showIndex = imgs.length - 1;
    } else {
      showIndex--;
    }
    this.setState({
      showIndex
    })
  }

  previous1 = (e) => { //上一张
    let ev = e || window.event;
    let { showIndex, imgs } = this.state;
    if (showIndex <= 0) {
      showIndex = imgs.length - 1;
    } else {
      showIndex--;
    }
    this.setState({
      showIndex
    })
  }
  next = (e) => { //下一张
    let ev = e || window.event;
    let { showIndex, imgs } = this.state;
    if (showIndex >= imgs.length - 1) {
      showIndex = 0;
    } else {
      showIndex++;
    }
    this.setState({
      showIndex
    })
  }



}

export default withRouter(Home);
