/**
 * Created by lijie on 16/5/24.
 */

import React, { Component } from 'react';
import {
    TabBarIOS,
    View,
    Text,
    StyleSheet,
} from 'react-native';



import Home from './pages/Home';
import Live from './pages/Live';
import Vod from './pages/Vod';
import User from './pages/User';

const tabBarItems = [
    {name:'Home',title: '推荐', icon: require('./assets/Tabbar/tabbar_recommend.png'),selectedIcon:require('./assets/Tabbar/tabbar_recommend_highlighted.png'),component:Home},
    {name:'Live',title: '直播', icon:  require('./assets/Tabbar/tabbar_live.png'),selectedIcon:require('./assets/Tabbar/tabbar_live_highlighted.png'),component:Live},
    {name:'Vod',title: '回看', icon:  require('./assets/Tabbar/tabbar_vod.png'),selectedIcon:require('./assets/Tabbar/tabbar_vod_highlighted.png'),component:Vod},
    {name:'User',title: '我的', icon:  require('./assets/Tabbar/tabbar_profile.png'),selectedIcon:require('./assets/Tabbar/tabbar_profile_highlighted.png'),component:User}
];

export default class TabBarView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: tabBarItems[0].name
        }
    }

    render() {
        return (
            <TabBarIOS barTintColor="white" tintColor="#ff6565">
                {
                    tabBarItems.map((controller, i) => {
                        let Component = controller.component;
                        let ComponentName = controller.name;
                        return (
                            <TabBarIOS.Item
                                key={i}
                                title={controller.title}
                                icon={controller.icon}
                                selected={this.state.selectedTab === ComponentName}
                                onPress = {()=>{
                                            this.setState({
                                                selectedTab: ComponentName
                                            });

                                        }}
                            >
                                <Component navigator={this.props.navigator} />
                            </TabBarIOS.Item>
                        );
                    })
                }
            </TabBarIOS>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});