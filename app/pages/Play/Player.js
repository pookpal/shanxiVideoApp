/**
 * Created by lijie on 16/5/26.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
    ProgressViewIOS,
    Image,

} from 'react-native';


import AppConstant from '../../common/AppConstant';
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var Orientation = require('react-native-orientation');



export  default class Player extends Component {

    constructor(props) {

        // 隐藏状态栏
        StatusBar.setHidden(true,'none');
        super(props);
        this.onLoadStart = this.onLoadStart.bind(this);
        this.onLoad = this.onLoad.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.togglePlay = this.togglePlay.bind(this);

    }

    state = {
        rate: 1,
        volume: 1,
        muted: false,
        resizeMode: 'cover',
        duration: 0.0,
        currentTime: 0.0,
        controls: false,
        paused: false,
        skin: 'custom',
        progress: 0,
        fullScreen:false,
    };

    togglePlay() {
        console.log(this.props);
        this.setState({
            paused:!this.state.paused
        });
    }

    getProgress(offset) {
        var progress = this.state.progress + offset;
        return Math.sin(progress % Math.PI) % 1;
    }


    getFormatTime(value) {
        // 视频总秒数 转化为 xx:xx
        var seconds = parseInt(value);// 秒
        var min = Math.floor(seconds / 60),
            second = seconds % 60,
            hour, newMin, time;

        if (min > 60) {
            hour = Math.floor(min / 60);
            newMin = min % 60;
        }

        if (second < 10) { second = '0' + second;}
        if (min < 10) { min = '0' + min;}

        return time = hour? (hour + ':' + newMin + ':' + second) : (min + ':' + second);
    }

    onLoad(data) {
        console.log(this.props);
        console.log(this.state);
        this.setState({duration: data.duration});
    }

    onLoadStart(data){
        console.log(1);
    }

    onProgress(data) {
        this.setState({currentTime: data.currentTime});
    }

    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        } else {
            return 0;
        }
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


    setScreen(type){
        this.setState({
            fullScreen:type
        });

        if(type==false)
        {
             Orientation.lockToPortrait(); //this will lock the view to Portrait
        }
        else
        {
             Orientation.lockToLandscapeLeft(); //this will lock the view to Landscape

        }
        console.log(width);
        console.log(height);
        //Orientation.unlockAllOrientations(); //this will unlock the view to all Orientations
    }





    componentWillMount(){
        this.setScreen(false);
    }

    renderCustomSkin() {
        const flexCompleted = this.getCurrentTimePercentage() * 100;
        const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
        var url = 'http://101.200.79.153/wxbVideos/?r=site/m3u8&url=http://v.youku.com/v_show/id_XMTUwMTczNDkzNg==.html';
       // var url = 'http://ina.tju.edu.cn/images/ina2.mp4';

        return (

        <View style={[styles.container ,this.state.fullScreen && {width:667,height:375}]}>

                <TouchableOpacity style={styles.fullScreen} onPress={() => {this.setState({paused: !this.state.paused})}}>

                    <Video
                        source={{uri: url}}
                        style={styles.fullScreen}
                        rate={this.state.rate}
                        paused={this.state.paused}
                        volume={this.state.volume}
                        muted={this.state.muted}
                        resizeMode={this.state.resizeMode}
                        onLoadStart={this.onLoadStart}
                        onLoad={this.onLoad}
                        onProgress={this.onProgress}
                        onEnd={() => { this.state.paused = false }}
                        repeat={true}
                    />
                </TouchableOpacity>

                <View style={[styles.controls,this.state.fullScreen && {width:height}]}>

                        <TouchableOpacity
                            style={styles.playBtn}
                            key={'playIcon'}
                            activeOpacity={0.75}
                            onPress={this.togglePlay}
                        >
                            <Icon color="white" size={15}
                                  name={this.state.paused == false ? 'play' : 'stop'}
                            />

                        </TouchableOpacity>


                    <View style={styles.playingTime}>
                        <Text style={[styles.whiteColor,{fontSize:12}]}>{this.getFormatTime(this.state.currentTime)}</Text>
                    </View>

                    <View style={styles.progressBar}>
                        <ProgressViewIOS
                            progress={this.getCurrentTimePercentage()}
                            progressTintColor="#eee"
                            progressTintColor="yellow"
                        />
                    </View>

                    <View style={styles.totalTime}>
                        <Text style={[styles.whiteColor,{fontSize:12,textAlign:'right'}]}>{this.getFormatTime(this.state.duration)}</Text>
                    </View>


                        <TouchableOpacity
                            style={styles.fullScreenBtn}
                            key={'expandIcon'}
                            activeOpacity={0.75}
                            onPress={ ()=> {this.setScreen(!this.state.fullScreen);}}
                        >
                            <Icon color="white" size={15} name='expand'/>

                        </TouchableOpacity>




                </View>

                <TouchableOpacity
                    style={styles.backBtn}
                    key={'backIcon'}
                    activeOpacity={0.75}
                    onPress={()=>{
                        this.state.fullScreen == true ? this.setScreen(!this.state.fullScreen):this.props.backBtnAction();

                    }}
                >
                    <Image style={{width:30,height:30}} source={require('../../assets/icons/playermini_back.png')} />

                </TouchableOpacity>


            </View>
        );
    }

    renderNativeSkin() {
        const videoStyle = this.state.skin == 'embed' ? styles.nativeVideoControls : styles.fullScreen;
        var url = 'http://101.200.79.153/wxbVideos/?r=site/m3u8&url=http://v.youku.com/v_show/id_XMTUwMTczNDkzNg==.html';
        return (
            <View style={[styles.container ,this.state.fullScreen && {width:667,height:375}]}>
                <View style={styles.fullScreen}>
                    <Video
                        source={{uri: url}}
                        style={videoStyle}
                        rate={this.state.rate}
                        paused={this.state.paused}
                        volume={this.state.volume}
                        muted={this.state.muted}
                        resizeMode={this.state.resizeMode}
                        onLoad={this.onLoad}
                        onProgress={this.onProgress}
                        onEnd={() => { AlertIOS.alert('Done!') }}
                        repeat={true}
                        controls={this.state.controls}
                    />
                </View>



                <View style={[styles.controls,this.state.fullScreen && {width:height}]}>

                    <TouchableOpacity
                        style={styles.playBtn}
                        key={'playIcon'}
                        activeOpacity={0.75}
                        onPress={this.togglePlay}
                    >
                        <Icon color="white" size={15}
                              name={this.state.paused == false ? 'play' : 'stop'}
                        />

                    </TouchableOpacity>


                    <View style={styles.playingTime}>
                        <Text style={[styles.whiteColor,{fontSize:12}]}>{this.getFormatTime(this.state.currentTime)}</Text>
                    </View>

                    <View style={styles.progressBar}>
                        <ProgressViewIOS
                            progress={this.getCurrentTimePercentage()}
                            progressTintColor="#eee"
                            progressTintColor="yellow"
                        />
                    </View>

                    <View style={styles.totalTime}>
                        <Text style={[styles.whiteColor,{fontSize:12,textAlign:'right'}]}>{this.getFormatTime(this.state.duration)}</Text>
                    </View>


                    <TouchableOpacity
                        style={styles.fullScreenBtn}
                        key={'expandIcon'}
                        activeOpacity={0.75}
                        onPress={ ()=> {this.setScreen(!this.state.fullScreen);}}
                    >
                        <Icon color="white" size={15} name='expand'/>

                    </TouchableOpacity>




                </View>

                <TouchableOpacity
                    style={styles.backBtn}
                    key={'backIcon'}
                    activeOpacity={0.75}
                    onPress={()=>{
                        this.state.fullScreen == true ? this.setScreen(!this.state.fullScreen):this.props.backBtnAction();

                    }}
                >
                    <Image style={{width:30,height:30}} source={require('../../assets/icons/playermini_back.png')} />

                </TouchableOpacity>



            </View>
        );
    }

    render() {
      //  return this.state.controls ? this.renderNativeSkin() : this.renderCustomSkin();
        return  this.renderCustomSkin() ;
    }

}

const styles = StyleSheet.create({
    container: {
        width:width,
        height:223,
        position:'relative',
        backgroundColor: '#333',
        flexDirection:'column',
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    controls: {
        width:width,
        position: 'absolute',
        bottom: 0,
        left:0,
        backgroundColor: '#000',
        opacity:0.5,
        flexDirection:'row',
        alignItems: 'flex-start',
    },
    backBtn:{
        height:20,
        width:20,
        position:'absolute',
        top:10,
        left:10,
        opacity:0.4,
        justifyContent:'center',
        borderRadius:20,

    },
    whiteColor: {
        color:'#fff',
        justifyContent:'center',
    },

    playBtn: {
        marginLeft:10,
        padding:10,
        height:30,
        alignSelf:'flex-start',
        justifyContent: 'center',
    },
    playingTime:{
        width:40,
        alignSelf:'flex-start',
        height:30,
        justifyContent: 'center',
    },
    progressBar: {
        flex:1,
        alignSelf:'flex-start',
        height:30,
        justifyContent: 'center',
    },
    totalTime: {
        width:40,
        alignSelf:'flex-start',
        height:30,
        justifyContent: 'center',
    },
    fullScreenBtn: {
        padding:10,
        height:30,
        marginRight:10,
        alignSelf:'flex-start',
        justifyContent: 'center',
    }
});
