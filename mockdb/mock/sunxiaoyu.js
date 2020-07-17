const service = require('@andremao/mockdb').service('sunxiaoyu')
const mockjs = require('mockjs')

module.exports = {
  requests: [{
    type: 'get',
    url: '/goods/ls',
    handle(req, res) {
      const {
        list
      } = service.getState()

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
        like: {
          name: ''
        },
      })
      res.json({
        code: 200,
        msg: 'ok',
        total,
        data,
      })
    }

  }]
}