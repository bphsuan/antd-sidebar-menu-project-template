const REQUIRED_TEMPLATE = {
  required: true,
  message: '請輸入{field}'
}

export const getRequiredRule = fields => {
  const result = {
    ...REQUIRED_TEMPLATE,
    message: REQUIRED_TEMPLATE.message.replace('{field}', fields)
  }
  return result
}

export const EMAIL_RULE = {
  type: 'email',
  message: '請輸入正確的信箱格式'
}
