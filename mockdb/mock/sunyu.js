const service = require('@andremao/mockdb').service('sunyu')
const mockjs = require('mockjs')

module.exports = {
  // 要被 mockjs 拦截的请求集
  requests: [
    {
      // 请求类型支持大小写
      type: 'GET',
      // 注意：
      //   mockjs 只能拦截本地主机地址（如：http://localhost:8080/user/list）
      //   mockjs 不能拦截跨域的线上地址（如：http://api.itcast.cn/user/list）
      url: '/user/list',
      // 数据模板，请参照 mockjs
      // 注意：tpl 生成出的数据不会持久化到 json 文件，如需持久化请使用 handle 配合 service（请看下一个例子）
      tpl: {
        code: 200,
        message: '获取用户列表成功',
        'data|1-10': [{ id: '@ID()', name: '@CNAME()', 'age|18-60': 1 }]
      }
    },
    // 分页查询
    {
      type: 'get',
      url: '/user/pagedquery',
      handle(req, res) {
        console.log(req.query, 'req.query')

        // 如果 JSON 文件中没有数据，则自动生成 100 条
        const { list } = service.getState()
        if (!list || !list.length) {
          // 批量插入，持久化至 JSON 文件中，insert 方法支持单个对象或数组
          service.insert(
            mockjs.mock({
              'list|100': [{ id: '@GUID()', name: '@CNAME()', 'age|15-60': 1 }]
            }).list
          )
        }
        // /如果 JSON 文件中没有数据，则自动生成 100 条

        const { page, size, name, age, ageType } = req.query
        const conditions = {}
        if (name) {
          conditions.like = { name }
        }
        if (age != null) {
          conditions[ageType] = { age: parseInt(age) }
        }
        // 分页查询，参数含义如下：
        // { page: 当前页码, size: 每页条数, like: 模糊查询, eq: 等于, lt: 小于, gt: 大于, le: 小于等于, ge: 大于等于 }
        const result = service.pagedQuery({ page, size, ...conditions })
        res.json({
          code: 200,
          message: '分页查询成功',
          ...result
        })
      }
    },
    // 根据 id 查询
    {
      type: 'get',
      // 支持动态路由参数
      url: '/user/:id',
      handle(req, res) {
        const { id } = req.params
        // 根据 id 查找用户
        const user = service.find(id)
        res.json({
          code: 200,
          message: '获取用户信息成功',
          data: user
        })
      }
    },
    // 增
    {
      type: 'post',
      url: '/user/create',
      handle(req, res) {
        console.log(req.body, 'req.body')
        // 插入单个，返回插入之后的对象（包含 id）
        const user = service.insert(req.body)
        res.json({
          code: 200,
          message: '添加用户成功',
          data: user
        })
      }
    },
    // 删
    {
      type: 'delete',
      url: '/user/:id',
      handle(req, res) {
        console.log(req.params, 'req.params')
        // 根据 id 删除，返回被删除的对象
        const user = service.delete(req.params.id)
        res.json({
          code: 200,
          message: 'ok',
          user
        })
      }
    },
    // 改
    {
      type: 'patch',
      url: '/user/:id',
      handle(req, res) {
        console.log(req.params, 'req.params')
        console.log(req.body, 'req.body')
        // 根据 id 补丁更新，返回更新后的对象
        const user = service.patchUpdate(req.params.id, req.body)
        res.json({
          code: 200,
          message: 'ok',
          user
        })
      }
    },
    // 获取优惠券列表
    {
      type: 'get',
      url: '/currencyCoupon/list',
      tpl: {
        code: 200,
        message: '获取优惠券列表成功',
        'data|1-10': [
          {
            name: '@ctitle',
            'money|6-50': 1,
            'limit|0-1': 1,
            'time_limit|7-15': 1,
            'receive|0-3': 1,
            'cou_total|1000-3000': 1,
            'receive_money|5000-9000': 1,
            'id|+1': 1
          }
        ]
      }
    },
    {
      type: 'post',
      url: '/currencyCoupon/list/create',
      handle(req, res) {
        console.log(req.body, 'req.body')
        // 插入单个，返回插入之后的对象（包含 id）
        const user = service.insert(req.body)
        res.json({
          code: 200,
          message: '添加用户成功',
          data: user
        })
      }
    },
    {
      type: 'get',
      // 支持动态路由参数
      url: '/currencyCoupon/:id',
      handle(req, res) {
        const { id } = req.params
        // 根据 id 查找用户
        const user = service.find(id)
        res.json({
          code: 200,
          message: '获取用户信息成功',
          data: user
        })
      }
    }
  ]
}
