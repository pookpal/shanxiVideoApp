/**
 * Created by lijie on 16/5/25.
 */
import React,{ Component } from 'react';
import {

    StyleSheet,
    View,
    Text,
} from 'react-native';

import AppConstant from '../../common/AppConstants';

export default class SectionHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: AppConstant.window.width,
        justifyContent: 'center',
        height: 44,
        padding: 10,
        backgroundColor: 'rgb(246, 246, 246)',
    },

    header: {
        paddingLeft: 8,
        borderLeftColor: AppConstant.color.theme_color,
        borderLeftWidth: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 15,
    }
})