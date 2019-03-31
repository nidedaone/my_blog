const Mock = require('mockjs') // 获取mock对象
const domain = 'http://mockjs.com/api' // 定义默认域名，随便写

//HomePage文章
Mock.mock(`${domain}/posts`, 'get', ()=>{
  return({
    data: [
      {
        'item_time': '2019年2月14日',
        'item_title': '生活',
        'iten_cont': `生活除了苟且，还有诗意和远方，我知道我写不出那些充满诗意的文章，也不具备诗意的风采。`,
        'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
        'item_num': '0',
        'item_pl': '0',
        'id': '0'
      },
        {
        'item_time': '',
        'item_title': '',
        'iten_cont': ``,
        'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
        'item_num': '0',
        'item_pl': '0',
        'id': '0'
      },
        {
        'item_time': '',
        'item_title': '',
        'iten_cont': ``,
        'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
        'item_num': '0',
        'item_pl': '0',
        'id': '0'
      },
        {
        'item_time': '',
        'item_title': '',
        'iten_cont': ``,
        'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
        'item_num': '0',
        'item_pl': '0',
        'id': '0'
      },
        {
        'item_time': '',
        'item_title': '',
        'iten_cont': ``,
        'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
        'item_num': '0',
        'item_pl': '0',
        'id': '0'
      },
        {
        'item_time': '',
        'item_title': '',
        'iten_cont': ``,
        'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
        'item_num': '0',
        'item_pl': '0',
        'id': '0'
      },
      {
      'item_time': '',
      'item_title': '',
      'iten_cont': ``,
      'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
      'item_num': '0',
      'item_pl': '0',
      'id': '0'
    },
      {
      'item_time': '',
      'item_title': '',
      'iten_cont': ``,
      'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
      'item_num': '0',
      'item_pl': '0',
      'id': '0'
    },
      {
      'item_time': '',
      'item_title': '',
      'iten_cont': ``,
      'iten_desc': '@posted @ 2018/2/14 18:28 阿龙丶along ',
      'item_num': '0',
      'item_pl': '0',
      'id': '0'
    }
    ]
  })
});

//HomePage微语
Mock.mock(`${domain}/wy`, `get`, ()=>{
  return({
    data:[
      {'cont':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行','time':'2019-03-10','category':'励志','id':'1'},
      {'cont':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行','time':'2019-03-11','category':'搞笑','id':'2'},
      {'cont':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行','time':'2019-03-12','category':'青春','id':'3'},
      {'cont':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行','time':'2019-03-13','category':'情感','id':'4'},
      {'cont':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行','time':'2019-03-14','category':'幽默','id':'5'},
      {'cont':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行','time':'2019-03-15','category':'励志','id':'6'},
      {'cont':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行','time':'2019-03-16','category':'励志','id':'7'},
      {'cont':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行','time':'2019-03-17','category':'励志','id':'8'},
      {'cont':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行','time':'2019-03-18','category':'励志','id':'9'},
      {'cont':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行','time':'2019-03-19','category':'励志','id':'10'},
      {'cont':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行','time':'2019-03-20','category':'励志','id':'11'},
      {'cont':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行','time':'2019-03-22','category':'励志','id':'12'},
      {'cont':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行','time':'2019-03-25','category':'励志','id':'13'},
      {'cont':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行','time':'2019-03-28','category':'励志','id':'14'},
      {'cont':'当挫折造访迷茫敲门失败破窗而入 我们要保持的就是初心不变始终如一 在路上得到许多也失去许多 触碰结果是做一个孤独的守梦人 也要毅然前行','time':'2019-03-30','category':'励志','id':'15'}
    ],
    message: '请求成功',
    code: 200,
    time: new Date().getTime()
  })
})

//博客类目标题
Mock.mock(`${domain}/title`, `get`, ()=>{
  return({
    data:['技术文章','开发问题','未知待续','未知待续','未知待续'],
    message: '请求成功',
    code: 200,
    time: new Date().getTime()
  })
})