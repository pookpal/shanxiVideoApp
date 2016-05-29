/**
 * Created by lijie on 16/5/25.
 * 导航标题
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import AppConstant from '../../common/AppConstant';

export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {

        let NavigationBar = [];

        // 左边图片按钮
        if (this.props.leftIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'leftIcon'}
                    activeOpacity={0.75}
                    style={styles.leftIcon}
                    onPress={this.props.leftTouchAction}
                >
                    <Icon color="white" size={30} name={this.props.leftIcon} />
                </TouchableOpacity>
            )
        }

        // 左边自定义图片
        if (this.props.leftSelfIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'leftSefIcon'}
                    activeOpacity={0.75}
                    style={styles.leftSelfIcon}
                    onPress={this.props.leftSelfIconTouchAction}
                >
                   <Image source={this.props.leftSelfIcon} style={[this.props.leftSelfIconStyle,styles.leftSelfIconStyle]}/>
                </TouchableOpacity>
            )
        }



        // 标题
        if (this.props.title != undefined) {
            NavigationBar.push(
                <Text key={"title"} style={styles.title}>{this.props.title}</Text>
            );
        }


        // 自定义标题View
        if (this.props.titleView != undefined) {
            let Component = this.props.titleView;
            NavigationBar.push(
                <Component key={'titleView'}/>
            )
        }

        // 右边图片按钮
        if (this.props.rightIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'rightIcon'}
                    activeOpacity={0.75}
                    style={styles.rightIcon}
                    onPress={this.props.rightTouchAction}
                >
                    <Icon color="white" size={30} name={this.props.rightIcon}/>
                </TouchableOpacity>
            )
        }

        // 右边自定义图片
        if (this.props.rightSelfIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'rightSefIcon'}
                    activeOpacity={0.75}
                    style={styles.rightSelfIcon}
                    onPress={this.props.rightSelfIconTouchAction}
                >
                    <Image source={this.props.rightSelfIcon} style={[this.props.rightSelfIconStyle,styles.rightSelfIconStyle]}/>
                </TouchableOpacity>
            )
        }


        // 右边文字按钮
        if (this.props.rightButton != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'rightButton'}
                    activeOpacity={0.75}
                    style={styles.rightButton}
                    onPress={this.props.rightButtonAction}
                >
                    <Text style={styles.buttonTitleFont}>{this.props.rightButton}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={styles.header}>
                <View style={styles.navigationBarContainer}>
                    {NavigationBar}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        position:'relative',
        height: AppConstant.window.navigation_height,
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1,
    },
    navigationBarContainer: {
        flexDirection: 'row',
        marginTop: 20,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#000',
        fontSize: 18,
    },

    leftIcon: {
        position: 'absolute',
        left: 10,
        top: 7
    },
    leftSelfIcon: {

        position: 'absolute',
        left: 10,
        top: 7
    },
    leftSelfIconStyle: {

    },
    rightSelfIcon: {
        position: 'absolute',
        right: 10,
        top: 7
    },

    rightSelfIconStyle: {

    },

    rightIcon: {
        position: 'absolute',
        right: 10,
        top: 7
    },

    rightButton: {
        position: 'absolute',
        right: 10,
        height: 44,
        justifyContent: 'center',
    },

    buttonTitleFont: {
        color: 'white',
        fontSize: 15,
    }
});

