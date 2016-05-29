/**
 * Created by lijie on 16/5/24.
 */
import { Dimensions } from 'react-native';


let window = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    navigation_height: 64,
    category_menu_height: 40,
    tabBar_height: 49,
    news_listView_height: Dimensions.get('window').height - 64 - 40 - 49,
    margin: 10,
};

// 颜色
let colors = {
    theme_color: 'rgb(217, 51, 58)',
};

let styles = {
    pvImage: {width: 15, height: 10},
    newsSingleImage: {height: 70, width: 95},
};


// 请求接口地址
let urls = {

    // 测试MP4地址
    videoDemoUrl: 'http://www.baidu.com/1.mp4',

};

export default AppConstant = {
    window: window,
    urls: urls,
    color: colors,
    style: styles,
}
