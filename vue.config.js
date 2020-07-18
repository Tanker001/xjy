module.exports = {
    devServer: {
      before(app) {
        // 判断是否为开发环境
        if (process.env.NODE_ENV.toUpperCase() === 'DEVELOPMENT') {
          // 安装，挂上中间件
          require('@andremao/mockdb').install(app);
        }
      },
    },
  };