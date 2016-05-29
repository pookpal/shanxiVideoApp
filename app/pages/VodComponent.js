/**
 * Created by lijie on 16/5/25.
 */

import React,{ Component } from 'react';
import {

    StyleSheet,
    Text,
    View,
    Navigator,
    Image,
    ScrollView,
    TouchableOpacity,

} from 'react-native';


export default class VodComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator){
            navigator.pop();
        }
    }

    componentDidMount() {
        this.setState = {
            vodId:this.props.vodId
        };
    }

    render() {
        return(
            <View>
                <Text>
                    这是vod
                </Text>

                <TouchableOpacity onPress={this._pressButton.bind(this)}>

                    <Text>点我返回</Text>
                </TouchableOpacity>
            </View>
        )
    }
}