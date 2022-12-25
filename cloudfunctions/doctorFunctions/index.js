const addSubject = require('./addSubject/index');
const getSubjects = require('./getSubjects/index');

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'addSubject':
      return await addSubject.main(event, context);
    case 'getSubjects':
      return await getSubjects.main(event, context);
  }
};
