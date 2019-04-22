import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button, Input, Textarea} from '@tarojs/components';
import './add.scss'

export default class Add extends Component {
   config = {
       navigationBarTitleText: '添加面试'
  }
  state={
      list:[
          {
            name:"公司名称",
            place:"请输入公司名称",
            val:""
          }, {
            name:"公司电话",
            place:"请输入面试联系人电话",
            val:""
        },  {
            name:"面试时间",
            place:"2019-04-19 16：00",
            val:""
        },  {
            name:"面试地址",
            place:"请输入面试地址",
            val:""
        }
      ],
      date: '2016-09-01'
  }
  

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  clicktrue(){
    Taro.showModal({
        title: '温馨提示',
        content: '添加面试成功',
        success: function (res) {
          if (res.confirm) {
            //这里是点击了确定以后  
            console.log('用户点击确定')  
          } else {
              //这里是点击了取消以后
            console.log('用户点击取消')  
          }  
        }
      })
  }
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  }
  render() {
    return (
      <View className="information">
          <Text className="title">面试信息</Text>
          <View className="list">
              {
                  this.state.list.map((item,index)=>{
                      return <View key="index" className="itemlist">
                          <Text className="name">{item.name}</Text>
                          <Input value={item.place} placeholder="item.val"></Input>
                      </View>
                  })
              }
          </View>
          <View className="textarea">
              <Textarea placeholder="备注信息（可选，100个字以内）" className="area"></Textarea>
          </View>
          <Button onClick={this.clicktrue.bind(this)}>确认</Button>
          <View>
              <Picker
                  mode={this.state.data}
                  value={this.state.data}
                  start="2015-09-01"
                  end="2017-09-01"
                  bindchange="bindDateChange"
              >
                <View className="piker">
                    当前选择：{this.state.data}
                </View>
              </Picker>
          </View>
      </View>     
    );
  }
}

