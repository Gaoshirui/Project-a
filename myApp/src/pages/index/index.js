import Taro, { Component } from '@tarojs/taro'
import { View, Text,Map, CoverView,CoverImage,Navigator } from '@tarojs/components'
import './index.scss'
import my from '../../images/my.png'
import location from '../../images/location.png'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(props){
    super(props)
    this.state = {
       markers: [{
       
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }],
      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color: '#FF0000DD',
        width: 2,
        dottedLine: true
      }],
      controls: [{
        id: 1,
        
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50
        },
        clickable: true
      },{
        id: 2,
      
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50
        },
        clickable: true
      }]
    }
  }

  render () {
    return ( 
      <View className='index'>
          <Map
            id="map"
            longitude={116.300278}
            latitude={40.040848}
            scale={14}
            controls={this.state.controls}
            bindcontroltap="controltap"
            markers={this.state.markers}
            bindmarkertap="markertap"
            polyline={this.state.polyline}
            bindregionchange="regionchange"
            show-location
            style="width: 100%; height: 458px;"
            ></Map>         
            <CoverView>
                <CoverImage src={my} className="left"></CoverImage>
                <CoverImage src={location} className="right"></CoverImage>        
                <Navigator url="/pages/interview/add">
                      <button type="button" class="btn">添加面试</button>
                </Navigator>                      
            </CoverView>
      </View>
    )
  }
}
