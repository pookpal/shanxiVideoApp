/**
 * Created by lijie on 16/5/26.
 */
/**
 * Created by lijie on 16/5/26.
 */

import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';


export default class PlayerToolBar extends Component {

    constructor(props) {

        super(props);

        this.state = {

        };

    }

    render() {
        return(
            <View style={styles.container}>


                <View style={{flex:1}}>

                </View>

                <View style={styles.toolItem}>

                    <Image style={{width:20,height:20}} source={require('../../assets/icons/play_collection.png')} />
                    <Text style={{color:'#fff',fontSize:10}}>收藏</Text>

                </View>
                <View style={styles.toolItem}>
                    <Image style={{width:20,height:20}} source={require('../../assets/icons/play_follow.png')} />
                    <Text style={{color:'#fff',fontSize:10}}>追剧</Text>
                </View>

            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        position:'relative',
        height:40,
        backgroundColor: '#333',
        alignItems:'flex-end',
        flexDirection: 'row',
    },
    toolItem: {
        position:'relative',
        width:40,
        height:40,
        padding:5,
        justifyContent: 'center',

    }
});