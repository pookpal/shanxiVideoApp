/**
 * Created by lijie on 16/5/25.
 */
import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Header from '../components/common/Header';

export default class User extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header title="我的"/>
                <Text>这是用户页面,待开发</Text>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    }
});