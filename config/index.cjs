/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx699246efd3957ecf',
//   oz9Mm6CufO9nO4PUXl6xPR5JyQEM 金

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '094d2c899df72b16dd337569af3c72bb',

  PROVINCE: '',
  CITY: '北京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '大宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oz9Mm6CufO9nO4PUXl6xPR5JyQEM',
      // 金
      // id: 'oz9Mm6OMJLgpSYyc9ZrDvywLJI3U',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ztIjCazme_i3F2jhGXwjLZ6c2CnaWCIfv84guzBJ9LQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-30',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
//           type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小金', year: '2000', date: '08-30',
        },
        {
//           type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-07-11' },
        // 结婚纪念日
//         { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'm5PXwZIdIdVYpR2wJvdpjlZTNx3OGD37-kDKGeSll0I',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oz9Mm6CufO9nO4PUXl6xPR5JyQEM',
    }
  ],
  
SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
//     { keyword: 'encourage_oneself', contents: '你主要的问题在于读书太少而想得太多' },
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'lover_prattle',
      contents: [
        '因为太喜欢你，所以看谁都像是情敌。',
        '申请成为你爱里的永久居民。',
        '希望你对我的想你就像你的头发一样，一抓总是一大把',
        '你很傻，你很笨，可我还是很羡慕你，因为你有我',
        '遇见你，就好像捡到了100斤的运气'
      ],
    }
    // 你可以不断按格式往下增加
    // ...
  ],
}

module.exports = USER_CONFIG
