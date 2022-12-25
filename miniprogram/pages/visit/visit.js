// pages/visit/visit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      {
          title:'筛选期',
          children:[
              {
                  title:'人口学',
                  children:[],
                  isBind:true
              },
              {
                  title:'知情同意',
                  children:[],
                  isBind:true
              },
              {
                title:'现病史',
                children:[]
              },
              {
                title:'过敏烟酒',
                children:[],
                isBind:true
              },
              {
                  title:'其他既往史',
                  children:[]
              },
              {
                title:'基础病诊前用药',
                children:[]
              },
              {
                title:'本病诊前用药',
                children:[],
              },
              {
                  title:'生命体征',
                  children:[]
              },
              {
                title:'理化检查',
                children:[]
              },
              {
                title:'入排标准',
                children:[],
              },
              {
                  title:'是否入选',
                  children:[]
              },
              {
                title:'其他治疗',
                children:[]
              },
          ]
      },
      {
          title:'评估期',
          children:[
              {
                  title:'治疗前评分表',
                  children:[],
              },
              {
                  title:'满3天中医证候',
                  children:[]
              },
              {
                title:'停药后单项',
                children:[]
              },
              {
                title:'服药情况',
                children:[],
              },
              {
                  title:'停药后体征',
                  children:[]
              },
              {
                title:'理化检查',
                children:[]
              },
              {
                title:'进展情况',
                children:[],
              },
          ]
      },
      {
        title:'研究总结',
        children:[]
      },
      {
        title:'不良事件',
        children:[]
      },
      {
        title:'合并用药',
        children:[]
      }
    ],
  },

  showform:function(e){
    var index = e.currentTarget.dataset.index;
    console.log(index)
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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