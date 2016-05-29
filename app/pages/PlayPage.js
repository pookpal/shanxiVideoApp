

import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';

import Video from 'react-native-video';

import AppConstant from '../common/AppConstant';

import Player from './Play/Player';



import PlayerToolBar from './Play/PlayerToolBar';

import MovieInfo from './Play/MovieInfo';

export  default class PlayPage extends Component {

  constructor(props) {

    super(props);
    this.backNavigator = this.backNavigator.bind(this);
  }

  // 组件挂载后
  componentDidMount() {

    // 隐藏状态栏
    StatusBar.setHidden(true,'none');
  }

  // 组件移除时, 恢复状态栏
  componentWillUnmount() {
    StatusBar.setHidden(false,'none');
  }

  // 回退
  backNavigator() {
    const { navigator } = this.props;
    if(navigator){
      navigator.pop();
    }
  }

  render() {
    return(
        <View style={styles.container}>



          <Player
              backBtnAction={this.backNavigator}
          >
          </Player>


          <PlayerToolBar>

          </PlayerToolBar>

          <MovieInfo style={{flex:1}} />




        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relative',
    backgroundColor: '#eee',
  },
  backgroundVideo: {
    paddingTop:20,
    height:230,
  },
  moveiInfoBox: {
    flex:1,
    margin:5,
    padding:10,
    backgroundColor:'#fff',
  },
  movieTitle: {
    fontSize:16,
  },



  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: 'absolute',
    bottom: 44,
    left: 4,
    right: 4,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingBottom: 10,
  },
  skinControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: "white",
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
  nativeVideoControls: {
    top: 184,
    height: 300
  }

});
