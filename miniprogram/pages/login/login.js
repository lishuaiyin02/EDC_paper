// miniprogram/pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctor_flag: 'true', //登录进去分为两个种类：一个是医生进入是一个页面，患者进入是另一个页面
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var me = this
    me.redirectUrl = '../../pages/yuyue/yuyue'
  },

    // 登录  
  doLogin: function (e) {
    var that = this;
    var formObject = e.detail.value;
    var username = formObject.username;
    var password = formObject.password;
    // 简单验证
    if (username.length == 0 || password.length == 0) {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'none',
        duration: 3000
      })
    } else {
      wx.showLoading({
        title: '请等待...',
      });
      // 调用后端
     
      wx.cloud.callFunction({
        name:'quickstartFunctions',
        data:{
          type:"login",
          username:username,
          password:password
        },
        success:function(res) {
          console.log(res)
          wx.hideLoading();
          that.setData({
            doctor_flag:res.result
          })
          
          if(that.data.doctor_flag == "true") {
            wx.redirectTo({
              url: '../../pages/subject/subject',//跳转到受试者列表
            })
          }else {
            wx.redirectTo({
              url: '../../pages/question/question', //患者跳转到问卷调查
            })
          }
        },
        fail:function(res) {
          console.log(res.errMsg)
          wx.showToast({
            title: '登录失败，请稍后重试',
            icon:'fail',
          })
        }

      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 注册用户信息
  goRegistPage:function(){
    wx.navigateTo({
      url: '../../pages/register/register',
    })
  }
})