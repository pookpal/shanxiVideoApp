/**
 * Created by lijie on 16/5/25.
 */
import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    WebView,
} from 'react-native';

import Header from '../components/common/Header';
export default class PlayPage1 extends Component {

    constructor(props) {
      super(props);
      this.onLoad = this.onLoad.bind(this);
      this.onProgress = this.onProgress.bind(this);
      this.onLoadStart = this.onLoadStart.bind(this);
    }

    state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    controls: false,
    paused: true,
    skin: 'custom'
  };


  onLoadStart(data) {

    console.log('enter onLoadStart');

  }
  onLoad(data) {
    console.log('enter onLoad');
    this.setState({duration: data.duration});
  }

  onProgress(data) {
    console.log('enter onProgress');
    this.setState({currentTime: data.currentTime});
  }

    render() {
        return (
            <View style={styles.container}>

                <WebView
                    allowsInlineMediaPlayback ={false}
                    style={{
                        backgroundColor: '#333',
                        height: 100,
                    }}
                    source={{html: HTML}}
                    scalesPageToFit={true}
                />
            

        
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});