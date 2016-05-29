/**
 * Created by lijie on 16/5/25.
 */

/**
 * Created by lijie on 16/5/25.
 */

import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Navigator,
} from 'react-native';

import  TabBarView from './TabBarView';

export default class Root extends Component {


    render() {
        let defaultName = 'TabBarView';
        let defaultComponent = TabBarView;
        return (

            <View style={styles.container}>
                <StatusBar barStyle='default'/>
                <Navigator
                    initialRoute={{ name: defaultName, component: defaultComponent }}

                    renderScene={(route, navigator) => {

                        let Component = route.component;

                        return (
                            <Component navigator={navigator} route={ route } {...route.passProps} />
                        )
                    }}
                />
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    }
})