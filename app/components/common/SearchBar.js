/**
 * Created by lijie on 16/5/25.
 */
import React, {  Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import AppConstants from '../../common/AppConstants';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: null,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Icon name="ios-search" size={15} color="gray"/>
                <TextInput
                    style={styles.textInput}
                    value={this.props.value}
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='search'
                    {...this.props}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 7,
        paddingLeft: 12,
        borderRadius: 5,
        backgroundColor: 'white',
        width: AppConstants.window.width * .6,
    },

    textInput: {
        flex: 1,
        fontSize: 14,
        paddingLeft: 4,
        height: 30,
    }
});