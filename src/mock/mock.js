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
  if (username == 'admin' && password == '123456') {
    res.data.token = Mock.mock('@id');
  } else {
    res.data.message = 'fail';
    res.data.code = 0;
  }

  return res;
});
