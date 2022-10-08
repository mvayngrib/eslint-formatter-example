// eslint-disable-next-line
const stylish = require('./node_modules/eslint/lib/cli-engine/formatters/stylish.js')

module.exports = (results) => {
  const result = results.map((r) => ({
    ...r,
    messages: r.messages.map((m) => ({
      ...m,
      message: `my custom message for rule: ${m.ruleId}`,
    })),
  }))

  return stylish(result)
}
