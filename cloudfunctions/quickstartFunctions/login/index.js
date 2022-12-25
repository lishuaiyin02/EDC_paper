const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database();

// 查询数据库集合云函数入口函数
exports.main = async (event, context) => {
  // 返回数据库查询结果
  var result = ""
  var res = await db.collection('users').where({
    username:event.username,
    password:event.password
  }).get();
  if (res) {
    if(res.data[0].doctorflag){
      result = "true"
    }else{
      result = "false"
    }
  }else{
    result = "fail";
  }
  return result
};
