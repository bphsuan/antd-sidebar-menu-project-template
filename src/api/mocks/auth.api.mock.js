import { httpApiMock } from '@app/api/mocks/http.api.mock'

const baseRoute = 'auth'

httpApiMock.onPost(`${baseRoute}/login`).reply(config => {
  if (JSON.parse(config.data).email === 'admin@abc.com') {
    return [
      200,
      {
        user: {
          id: 1,
          name: 'testUser',
          email: 'fake@example.com',
          role: 'admin'
        },
        access_token: 'bearerToken'
      }
    ]
  } else return [401, { message: 'Invalid Credentials' }]
})

httpApiMock.onPost(`${baseRoute}/forgetPassword`).reply(200)
