/**
 * Created by lijie on 16/5/26.
 */

import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    ListView,
    TouchableOpacity
} from 'react-native';

import AppConstant from '../../common/AppConstant';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MovieInfo extends Component {

    constructor(props) {

        super(props);
        this.state = {
            seriesLists:[
                {id:1222,order:1,sourceUrl:'http://'},
                {id:1223,order:2},
                {id:1224,order:3},
                {id:12525,order:4},
                {id:16226,order:5},
                {id:12227,order:6},
                {id:12228,order:7},
                {id:12229,order:8},
                {id:12230,order:9},
                {id:12231,order:10},
                {id:12232,order:11},
                {id:12233,order:12},
                {id:12234,order:13},
                {id:12235,order:14},
                {id:12236,order:15},
                {id:12237,order:16},
                {id:12238,order:17},
                {id:12239,order:18},
                {id:12240,order:19},
                {id:12241,order:20},
                {id:12242,order:21},
                {id:12243,order:22},
                {id:12244,order:23},




            ],
            selectedId:1222
        };

    }

    render() {
        return(
            <View style={styles.container}>

                <View style={styles.main}>

                    <Text style={styles.movieTitle}>奔跑吧兄弟第四季</Text>

                    <View style={styles.moreBtn}>
                        <Icon color="#5e5e5e" size={20} name='sort-down'/>
                    </View>

                    <View style={styles.info}>

                        <Text style={styles.infoDetail}>
                        主演: 年代: 0 描述:奔跑吧兄弟 每期节目有不同的主题,分为不同的队伍进行比赛,明星们需要根据各种线索来破解最终的谜题,最后获胜一方将获得称号或者奖品
                            </Text>
                   </View>

                    <View style={styles.seriesInfo}>
                        <Text style={styles.left}>选集</Text>
                        <Text style={styles.right}>共{this.state.seriesLists.length}集</Text>
                    </View>

                        <ScrollView
                            style={styles.seriesListsView}
                        >
                            <View style={styles.list}>
                                { this.state.seriesLists.map((rowData,i) =>
                                    <TouchableOpacity key={i}
                                                      onPress={()=> {
                                         this.setState({
                                             selectedId: rowData.id
                                         })
                                     }}
                                    >
                                        <Text style={[styles.item, (rowData.id == this.state.selectedId) && styles.itemActive]}>
                                            {rowData.order}
                                        </Text>
                                    </TouchableOpacity>)
                                }

                            </View>

                        </ScrollView>










                    </View>


                </View>
        )
    }
}

let styles = StyleSheet.create({


    container: {
        flex:1,
        position:'relative',
        backgroundColor:'#eee',
    },
    main: {

        margin:5,
        backgroundColor:'#fff',
    },
    movieTitle: {
        flex:1,
        paddingLeft:8,
        paddingRight:8,
        paddingTop:8,
        fontSize:16,
        color: '#555',
    },
    moreBtn: {
        flex:1,
        alignItems:'flex-end',
        paddingRight:8,
    },
    info: {
        flex:1,
        padding:8,
        paddingBottom:10,
        borderBottomColor:'#eee',
        borderBottomWidth:1,
    },
    infoDetail: {
        flex:1,
        fontSize:14,
        color: '#555',

    },
    seriesInfo: {
        flex:1,
        padding:8,
        flexDirection:'row',
    },
    left: {
        width:200,
        textAlign:'left',
        alignSelf:'flex-start',
        color:'#555',
    },
    right: {
        flex:1,
        textAlign:'right',
        color:'#555',
    },

    seriesListsView: {
        flex:1,
        height:260,
        flexDirection:'column',

    },
    list: {

        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    item:{
        width:43,
        height:40,
        fontSize:16,
        paddingTop:12,
        paddingBottom:12,
        backgroundColor:'#e5e5e5',
        borderColor:'#e5e5e5',
        borderWidth:2,
        marginLeft:8,
        marginBottom:8,

        textAlign:'center',
    },
    itemActive: {
        backgroundColor:'#fff',
        color:'#ff6565',
        borderColor:'#fe9999',
        borderWidth:2,

    }
});