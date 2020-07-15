module.exports = {
  requests: [{
      type: 'GET', // 支持大小写
      // 注意：
      //   mockjs 只能拦截本地主机地址（如：http://localhost:8080/user/list）
      //   mockjs 不能拦截跨域的线上地址（如：http://api.itcast.cn/user/list）
      url: '/user/list',
      // 数据模板，请参照 mockjs
      tpl: {
        code: 200,
        message: '获取用户列表成功',
        'data|1-10': [{
          id: '@ID()',
          name: '@CNAME()',
          email: '@EMAIL()'
        }],
      },
      // 自定义响应数据函数，优先级高于 tpl，需要自己手动调用 res 响应对象的 api 返回响应数据
      // handle(req, res) {
      //   console.log(req.query, '==== GET /user/list ====')
      //   const data = Mock.mock({
      //     code: 200,
      //     message: '获取用户列表成功',
      //     'data|1-10': [{ id: '@ID()', name: '@CNAME()', email: '@EMAIL()' }]
      //   })
      //   res.json(data)
      // }
    },
    {
      type: 'get',
      url: '/user/:id', // 支持动态路由参数
      tpl: {
        name: '@CNAME()',
        'age|18-60': 1,
      },
    },
    {
      type: 'GET',
      url: /^\/user\/\d+$/, // 支持正则表达式
      // 数据模板，请参照 mockjs
      // tpl: {
      //   code: 200,
      //   message: '获取用户信息成功',
      //   data: { id: '@ID()', name: '@CNAME()', email: '@EMAIL()' }
      // }
      // 自定义响应数据函数，优先级高于 tpl，需要自己手动调用 res 响应对象的 api 返回响应数据
      handle(req, res) {
        console.log(req.query, '==== GET /user/:id ====');
        console.log(req.path); // 若想要获取 地址中的 :id 参数，请自己手动解析
        const data = Mock.mock({
          code: 200,
          message: '获取用户信息成功',
          data: {
            id: '@ID()',
            name: '@CNAME()',
            email: '@EMAIL()'
          },
        });
        res.json(data);
      },
    },
  ],
  // 参考 Mock.setup 配置项，目前仅支持 timeout，默认值：'10-100'
  settings: {
    timeout: '10-100'
  },
}