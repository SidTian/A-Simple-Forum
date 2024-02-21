import Mock from 'mockjs';

Mock.mock('/login', 'post', (params) => {
  const { username, password } = JSON.parse(params.body);
  const res = {
    data: {
      message: 'success',
      token: '',
      code: 1,
    },
  };
  // 登陆的逻辑
  if (username == 'admin' && password == '123456') {
    res.data.token = Mock.mock('@id');
  } else {
    res.data.message = 'fail';
    res.data.code = 0;
  }

  return res;
});


Mock.mock('/getUserInfo', 'post', (params) => {
  const res = {
    data: {
      message: 'success',
      code: 1,
    },
  };
  const { token } = JSON.parse(params.body);

  if (!token) {
    res.data.message = 'fail';
    res.data.code = 0;
  } else {
    res.data.userInfo = {
      name: Mock.mock('@name'),
      id: Mock.mock('@id'),
      permission: 'admin',
    };
  }
  return res;
});
