module.exports = {
    devServer: {
      before(app) {
        // 判断是否为开发环境
        if (process.env.NODE_ENV.toUpperCase() === 'DEVELOPMENT') {
<<<<<<< HEAD
          // 安装，挂上中间件
=======
>>>>>>> 25296e6fbaf18a1f13c0a0f5dca806f108570be3
          require('@andremao/mockdb').install(app);
        }
      },
    },
  };