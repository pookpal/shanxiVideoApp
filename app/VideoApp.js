/**
 * Created by lijie on 16/5/24.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Navigator,
    Image,
    TabBarIOS,
    ScrollView,
    ListView,
    TouchableOpacity,
} from 'react-native';

import VodComponent from './pages/VodComponent';

import Swiper from 'react-native-swiper';

import BannerData from './assets/BannerData.json';

import HomeData from './assets/HomeData.json';

const tabBarItems = [
    {title: '推荐', icon: require('./assets/Tabbar/tabbar_recommend.png'),selectedIcon:require('./assets/Tabbar/tabbar_recommend_highlighted.png')},
    {title: '直播', icon:  require('./assets/Tabbar/tabbar_live.png'),selectedIcon:require('./assets/Tabbar/tabbar_live_highlighted.png')},
    {title: '回看', icon:  require('./assets/Tabbar/tabbar_vod.png'),selectedIcon:require('./assets/Tabbar/tabbar_vod_highlighted.png')},
    {title: '我的', icon:  require('./assets/Tabbar/tabbar_profile.png'),selectedIcon:require('./assets/Tabbar/tabbar_profile_highlighted.png')}
];

var BANNER_DATA = BannerData.subData.homePageItemDtos;

export  default class VideoApp extends Component {

    constructor(props) {
        super(props);
        var ds1 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            selectedTab: tabBarItems[0].title,
            dataSource1: ds1.cloneWithRows(HomeData['live']),
            dataSource1: ds2.cloneWithRows(HomeData['vod']),
            vodId:111,
        };
    }

    _pressButton() {
        const { navigator } = this.props;

        if(navigator) {
            navigator.push({
                name:'VodComponent',
                component: VodComponent,
                params: {
                    vodId: this.state.vodId
                }
            })
        }
    }


    render() {
        return (
            <View style={styles.container}>


                <View style={styles.header}>

                    <Image style={styles.logo} source={require('./assets/icons/recommend_icon.png')} />

                    <Text style={styles.headerTitle}>推荐</Text>

                    <Image style={styles.buy} source={require('./assets/icons/recommend_buy.png')} />

                </View>




                <ScrollView  style={styles.scrollView}>

                        <View style={styles.wrapper}>
                            <View style={styles.slide}>
                                <Swiper  showsButtons={false} showsPagination={true} height={165}
                                         showsPagination = {true}
                                         paginationStyle={{position:'absolute',bottom:10,left:0}}
                                >
                                    {
                                        BANNER_DATA.map((item,i)=>{
                                            return (
                                                <View style={styles.slide} key={i}>
                                                    <Image style={styles.slidePic} source={{uri:item['homePageInfoDtos'][0]['atomPosterResources'][0]['resourceURL']}} />
                                                </View>
                                            );
                                        })
                                    }

                                </Swiper>
                            </View>

                        </View>



                    <View style={styles.liveChanel}>

                        <View style={styles.channelTitle}>

                            <View style={styles.mainTitle}>
                                <Image style={styles.main_title_icon} source={require('./assets/Tabbar/tabbar_live.png')} />
                                <Text style={styles.main_title_title}>直播</Text>
                            </View>

                            <View style={styles.moreTitle}>
                                <Text style={styles.more_title_title}>更多</Text>
                                <Image style={styles.more_title_icon} source={require('./assets/Tabbar/more.png')} />
                            </View>


                        </View>


                        <View style={styles.liveChannelLists}>
                            {
                                HomeData['live'].slice(0,3).map((item,i)=>{
                                    return (
                                        <View style={styles.live_channel_lists_item} key={i}>
                                            <View style={[styles.live_channel_list_imgBox , styles.blueBg]}>
                                                <Image style={styles.live_channel_lists_img} source={{uri:item.icon}}/>
                                            </View>
                                            <Text style={styles.live_channel_lists_text}>{item.name}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                        <View style={styles.liveChannelLists}>
                            {
                                HomeData['live'].slice(3,7).map((item,i)=>{
                                    return (
                                        <View style={styles.live_channel_lists_item} key={i}>
                                            <View style={[styles.live_channel_list_imgBox , styles.purpleBg]}>
                                                <Image style={styles.live_channel_lists_img} source={{uri:item.icon}}/>
                                            </View>

                                            <Text style={styles.live_channel_lists_text}>{item.name}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>

                        <View style={styles.liveChannelLists}>
                            {
                                HomeData['live'].slice(6,9).map((item,i)=>{
                                    return (
                                        <View style={styles.live_channel_lists_item} key={i}>
                                            <View style={[styles.live_channel_list_imgBox , styles.yellowBg]}>
                                                <Image style={styles.live_channel_lists_img} source={{uri:item.icon}}/>
                                            </View>
                                            <Text style={styles.live_channel_lists_text}>{item.name}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>

                    </View>

                    <View style={styles.vodChanel}>

                        <View style={styles.channelTitle}>

                            <View style={styles.mainTitle}>
                                <Image style={styles.main_title_icon} source={require('./assets/Tabbar/tabbar_vod.png')} />
                                <Text style={styles.main_title_title}>回看</Text>
                            </View>

                            <View style={styles.moreTitle}>
                                <Text style={styles.more_title_title}>更多</Text>
                                <Image style={styles.more_title_icon} source={require('./assets/Tabbar/more.png')} />
                            </View>


                        </View>

                        <View style={styles.liveChannelLists}>
                            {
                                HomeData['vod'].slice(0,3).map((item,i)=>{
                                    return (
                                        <View style={styles.vod_channel_lists_item} key={i}>
                                            <View style={styles.vod_channel_list_imgBox}>
                                                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                                                    <Image style={styles.vod_channel_lists_img} source={{uri:item.icon}}/>
                                                </TouchableOpacity>

                                            </View>
                                            <Text style={styles.vod_channel_lists_text}>{item.name}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>

                        <View style={styles.liveChannelLists}>
                            {
                                HomeData['vod'].slice(3,6).map((item,i)=>{
                                    return (
                                        <View style={styles.vod_channel_lists_item} key={i}>
                                            <View style={styles.vod_channel_list_imgBox}>
                                                <Image style={styles.vod_channel_lists_img} source={{uri:item.icon}}/>
                                            </View>
                                            <Text style={styles.vod_channel_lists_text}>{item.name}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>

                        <View style={styles.liveChannelLists}>
                            {
                                HomeData['vod'].slice(6,9).map((item,i)=>{
                                    return (
                                        <View style={styles.vod_channel_lists_item} key={i}>
                                            <View style={styles.vod_channel_list_imgBox}>

                                                <Image style={styles.vod_channel_lists_img} source={{uri:item.icon}}/>

                                            </View>
                                            <Text style={styles.vod_channel_lists_text}>{item.name}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>



                    </View>

                </ScrollView>


                <View style={styles.tabMenu} >

                    <TabBarIOS barTintColor="white" tintColor="#ff6565">
                        {
                            tabBarItems.map((controller, i) => {
                                return (
                                    <TabBarIOS.Item
                                        key={i}
                                        title={controller.title}
                                        icon={this.state.selectedTab == controller.title ? controller.selectedIcon : controller.icon}
                                        onPress = {()=>{
                                            console.log(controller);
                                            this.setState({
                                                selectedTab: controller.title
                                            })
                                        }}
                                    >
                                    </TabBarIOS.Item>
                                );
                            })
                            }
                    </TabBarIOS>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

    },
    header: {
        flex: 1,
        flexDirection: 'row',
        width:375,
        paddingTop: 20,
        height: 60,
        backgroundColor: '#fff',
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1,

    },
    logo: {
        width:130,
        height:30,
        marginLeft:5,
    },
    headerTitle: {
        flex:1,
        textAlign: 'center',
        color:'#000',
        fontSize:18,
        alignSelf: 'center',
    },

    buy: {
        marginLeft:100,
        width:30,
        height:30,
        marginRight:5,
    },
    scrollView: {
        position: 'relative',
        backgroundColor: '#fff',
        height: 604,
    },
    wrapper: {
        position: 'relative',
        height: 165,
    },
    slide: {
        position: 'relative',
        width:375,
        height: 165,
    },

    slidePic: {
        width:375,
        height: 165,
    },



// 直播区域的样式
    liveChanel: {
        flex:1,
        padding:5,
        width:375,
        height: 280,
        borderTopColor: '#e5e5ee',
        borderTopWidth:5,
    },

    // 直播标题
    channelTitle: {
        flexDirection:'row',
    },

    mainTitle: {
        marginLeft:10,
        flex:6,
        flexDirection:'row',
        height:28,

    },
    main_title_icon: {

        width:16,
        height:16,
    },
    main_title_title: {
       marginLeft:5,
        height:16,
        lineHeight:16,
        color:'#333',
    },

    moreTitle: {
        marginRight:10,
        flex:1,
        height:18,
        flexDirection:'row',

    },
    more_title_title: {
        marginRight:2,
        height:16,
        lineHeight:16,
        color:'#333',
        alignSelf: 'flex-end'
    },
    more_title_icon: {
        width:16,
        height:16,
        alignSelf: 'flex-end'
    },


    //直播列表
    liveChannelLists: {
        flex:1,
        flexDirection:'row',
        height: 260,
        marginLeft:4,
        marginBottom:7,
    },

    live_channel_lists_item: {
        width:115,
        height:60,
        marginRight:6,
    },

    live_channel_list_imgBox: {
        width:115,
        height:55,
        justifyContent: 'center',
        alignItems:'center',

    },
    blueBg:{
        backgroundColor: '#428aff',
    },
    purpleBg:{
        backgroundColor: '#9b50c7',
    },
    yellowBg: {
        backgroundColor: '#ff9331',
    },
    live_channel_lists_img: {
        width:90,
        height:45,

    },
    live_channel_lists_text: {
        color: '#333',
        textAlign: 'center',
        fontSize:12,
        paddingTop:2,
    },

    // 回看区域
    vodChanel: {
        flex:1,
        padding:5,
        width:375,
        height: 600,
        borderTopColor: '#e5e5ee',
        borderTopWidth:5,
        borderBottomColor: '#e5e5ee',
        borderBottomWidth:1,
        marginBottom:49,

    },


    vod_channel_lists_item: {
        width:115,
        height:160,
        marginRight:6,
    },

    vod_channel_lists_imgBox: {
        width:115,
        height:150,
        justifyContent: 'center',
        alignItems:'center',
    },
    vod_channel_lists_img: {
        width:115,
        height:160,
    },
    vod_channel_lists_text: {
        color: '#333',
        textAlign: 'left',
        fontSize:12,
        paddingTop:2,
    },


    tabMenu: {
        borderTopColor: '#000',
        borderTopWidth: 1,
        width:375,

    },
    tabContent: {
        flex:1,
        alignItems: 'center',
        paddingBottom:10,
    },
    tabText: {
        height:40,
        fontSize:30,

    }
});