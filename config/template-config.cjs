/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: 'wVbgXzecIuOKTrGOxWtFQiFxChLEH1ZO51K8ZOX9M4w',
    title: '亲爱的, 早上好',
    desc: `
      {{date.DATA}}
      城市：{{city.DATA}}
      天气：{{weather.DATA}}
      最高气温: {{max_temperature.DATA}}
      最低气温：{{min_temperature.DATA}}
      风级: {{wind_scale.DATA}}
      今天是我们恋爱的第{{love_day.DATA}}天
      {{note_en.DATA}}
      {{note_ch.DATA}}
      `
  },
  {
    id: 'wVbgXzecIuOKTrGOxWtFQiFxChLEH1ZO51K8ZOX9M4w',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      ---
      共推送 {{need_post_num.DATA}} 人
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      成功用户: {{success_post_ids.DATA}}
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
