// 获取svg
const req = require.context('./assets/emoji', false, /\.svg$/)
const requireAll = context => context.keys().map(context)

export const emojis = requireAll(req)