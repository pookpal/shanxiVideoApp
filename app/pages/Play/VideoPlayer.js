/**
 * Created by lijie on 16/5/27.
 */

'use strict';

import React,{ Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Video from 'react-native-video';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
//var Orientation = require('react-native-orientation');

export default class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.onLoad = this.onLoad.bind(this);
        this.onProgress = this.onProgress.bind(this);
    }
    state = {
        rate: 1,
        volume: 1,
        muted: false,
        resizeMode: 'cover',
        duration: 0.0,
        currentTime: 0.0,
        controls: true,
        paused: false,
        //skin: 'custom'
    };

    onLoad(data) {
        this.setState({duration: data.duration});
        //console.log("==>onLoad",data,(new Date));
    }

    onProgress(data) {
        this.setState({currentTime: data.currentTime});
        //console.log("==>onProgress",data);


    }
    onLoadStart(data){
        //console.log("==>onLoadStart",data);

    }

    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        } else {
            return 0;
        }
    }

    setTime(percentage){
        var time = this.state.duration*percentage;
        this.setState({
            currentTime:time
        });
    }

    renderSkinControl(skin) {
        const isSelected = this.state.skin == skin;
        const selectControls = skin == 'native' || skin == 'embed';
        return (
            <TouchableOpacity onPress={() => { this.setState({
          controls: selectControls,
          skin: skin
        }) }}>
                <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
                    {skin}
                </Text>
            </TouchableOpacity>
        );
    }

    renderRateControl(rate) {
        const isSelected = (this.state.rate == rate);

        return (
            <TouchableOpacity onPress={() => { this.setState({rate: rate}) }}>
                <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
                    {rate}x
                </Text>
            </TouchableOpacity>
        )
    }

    renderResizeModeControl(resizeMode) {
        const isSelected = (this.state.resizeMode == resizeMode);

        return (
            <TouchableOpacity onPress={() => { this.setState({resizeMode: resizeMode}) }}>
                <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
                    {resizeMode}
                </Text>
            </TouchableOpacity>
        )
    }

    renderVolumeControl(volume) {
        const isSelected = (this.state.volume == volume);

        return (
            <TouchableOpacity onPress={() => { this.setState({volume: volume}) }}>
                <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
                    {volume * 100}%
                </Text>
            </TouchableOpacity>
        )
    }



    renderNativeSkin() {
        //var url = this.props.url;
        var controls = this.state.paused ? {opacity:1} : {opacity:0};
        var url = 'http://101.200.79.153/wxbVideos/?r=site/m3u8&url=http://v.youku.com/v_show/id_XMTUwMTczNDkzNg==.html';
        //console.log(this.state.controls);
        return (
            <View style={styles.container}>
                <View style={styles.fullScreen}>
                    <Video source={{uri: url}}
                           style={styles.fullScreen}
                           rate={this.state.rate}
                           paused={this.state.paused}
                           volume={this.state.volume}
                           muted={this.state.muted}
                           resizeMode={this.state.resizeMode}
                           onLoadStart={this.onLoadStart}
                           onLoad={this.onLoad}
                           onProgress={this.onProgress}
                           onEnd={() => {console.log('end')}}
                           repeat={true}
                           controls={this.state.controls} />
                </View>
                <View style={[styles.controls]}>
                    <View style={[styles.controlsHead,]}   >
                        <View style={[styles.items2,]}>
                            <TouchableOpacity onPress={() => {this.goRouter()}}>
                                <Text>back</Text>
                            </TouchableOpacity>
                        </View>


                    </View>


                </View>

            </View>
        );
    }
    componentWillMount(){

        this.setScreen(0);

    }
    componentDidMount(){
        //console.log(this.props);

        //console.log(this.props.navigator.getCurrentRoutes());

        //setTimeout(function(){
        //    this.setState({
        //        controls:false
        //    });
        //}.bind(this),500);

        //console.log('mount native render '+(new Date));

    }

    setScreen(type){
        var type = type ? 1 : 0;
        if(type==1)
        {
           // Orientation.lockToPortrait(); //this will lock the view to Portrait

        }
        else
        {
           // Orientation.lockToLandscape(); //this will lock the view to Landscape

        }
        //Orientation.unlockAllOrientations(); //this will unlock the view to all Orientations
    }

    goRouter(params) {
        this.setScreen(1);

        this.props.navigator.jumpBack();
        this.setState({
            paused:true,
        });
        //this.props.navigator.push({
        //    name: 'video',
        //    passProps: params
        //});
    }

    render() {
        return this.renderNativeSkin();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    controls: {
        //backgroundColor: "red",
        position: 'absolute',
        top:0,

        left: 0,
        right: 0,
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
    },
    show: {

        opacity:1,
    },
    hide: {



        opacity:0,

    },
    items2: {
        flexDirection:'row',
        width: height / 2,
    },
    controlsHead: {
        top:width/2-25,
        left:5,
        width:height,
        height:30,

        backgroundColor:'transparent'

    },
    controlsCenter: {
        height:width-70,
        width:height,
        backgroundColor:'blue'

    },
    controlsFooter: {
        width:height,
        height:35,
        backgroundColor:'red'

    },
});