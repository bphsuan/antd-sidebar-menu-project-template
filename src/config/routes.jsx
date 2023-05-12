export default [
  {
    path: '/auth',
    component: './layouts/AuthLayout',
    hideInMenu: true,
    routes: [
      {
        path: '/auth/login',
        component: './pages/auth/Login'
      },
      {
        path: '/auth/forgot-password',
        component: './pages/auth/ForgetPwd'
      },
      {
        redirect: '/auth/login'
      }
    ]
  },
  {
    path: '/',
    routes: [
      {
        path: '/',
        component: './layouts/MainLayout',
        routes: [
          {
            path: '/',
            redirect: '/home'
          },
          {
            path: '/home',
            icon: 'Smile',
            name: '首頁',
            component: './pages/Home',
            authority: ['admin']
          },
          {
            component: './pages/404'
          }
        ]
      }
    ]
  },
  {
    component: './pages/404'
  }
]
