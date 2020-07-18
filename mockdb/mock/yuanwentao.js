const service = require('@andremao/mockdb').service('yuanwentao')
const mockjs = require('mockjs')

// 拓展mockjs
mockjs.Random.extend({
  phone: function () {
    var phonePrefixs = ['132', '135', '189'] // 自己写前缀哈
    return this.pick(phonePrefixs) + mockjs.mock(/\d{8}/) //Number()
  }
})
module.exports = {
  requests: [{
      type: 'get',
      url: '/goods/list',
      handle(req, res) {

        // req.params

        // req.query


        // req.body

        const {
          list
        } = service.getState()

        // 初始化数据
        if (!list || list.length === 0) {
          let imgurl = mockjs.Random.image('200x100')
          const {
            data
          } = mockjs.mock({
            'data|20': [{
              'uid|+1': 100,
              name: '@CTITLE()',
              industry: '@CTITLE()',
              address: '@county(true)',
              'phone|1': ['@phone'],
              'tid|1-10000': 100,
              'equity_level|0-3': 1,
              'equity_Time|0-10': 1,
              'sales_volume|1-3000': 1,
              'operation_status|0-1': 1,
              'status|0-1': 1,
              imgurl: imgurl,
              'yuanjia|1-10000': 1
            }],
          })
          service.insert(data)
        }

        // const {
        //   total,
        //   data
        // } = service.pagedQuery({
        //   page: 1,
        //   size: 10,
        //   like: { name: '能' },
        // })

        res.json({
          code: 200,
          msg: 'ok',
          list,
        })
      },
    }, // 根据 id 查询
    {
      type: 'get',
      // 支持动态路由参数
      url: '/goods/shop/:userid',
      handle(req, res) {
        const {
          uid
        } = req.params;
        // 根据 id 查找用户
        const user = service.find(uid);
        res.json({
          code: 200,
          message: '获取用户信息成功',
          data: user
        });
      },
    },
  ],
}
