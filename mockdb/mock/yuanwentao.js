const service = require('@andremao/mockdb').service('yuanwentao')
const mockjs = require('mockjs')


module.exports = {
  requests: [{
    type: 'get',
    url: '/goods/:id',
    handle(req, res) {

      // req.params

      // req.query


      // req.body

      const {
        list
      } = service.getState()

      // 初始化数据
      if (!list || list.length === 0) {
        const {
          data
        } = mockjs.mock({
          'data|20': [{
            id: '@GUID()',
            name: '@CTITLE()',
            'price|100-1000': 1
          }],
        })
        service.insert(data)
      }

      const {
        total,
        data
      } = service.pagedQuery({
        page: 1,
        size: 10,
        like: { name: '能' },
      })

      res.json({
        code: 200,
        msg: 'ok',
        total,
        data,
      })
    },
  }, ],
}
