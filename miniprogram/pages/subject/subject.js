// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjects:[],
  },
  add_subject:function(e){
    console.log("add_subjects")
    wx.navigateTo({
      url: '../../pages/addSubject/addSubject',
    })
  },
  entryvisit:function(e){
    console.log("entryvisit")
    wx.navigateTo({
      url: '../../pages/visit/visit',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.cloud.callFunction({
      name:"doctorFunctions",
      data:{
        type:"getSubjects",
      },
      success:function(res){
        console.log("成功调取subjects")
        console.log(res)
        that.setData({
          subjects:res.result.data
        })
      },
      fail:function(res){
        console.log("cuowu")
        console.log(res)
      }
    })
    
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

  }
})