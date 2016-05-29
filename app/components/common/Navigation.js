/**
 * Created by lijie on 16/5/25.
 * 使用 Navigator简单封装
 */
import React,{ Component }from 'react';
import {
    Navigator,

    View,
    StyleSheet,
    StatusBar,
} from 'react-native';

export default class NavigationBar extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle='light-content'/>
                <Navigator
                    initialRoute={{name: '', component: this.props.component}}
                    configureScene={() => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <View style={styles.container}>
                                <Component navigator = {navigator} route = {route} {...route.passProps} />
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})