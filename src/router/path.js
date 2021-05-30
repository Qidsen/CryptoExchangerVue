import fund from '@/store/modules/fund'

export default [
  {
    path: '/',
    component: () => import('@/views/Exchanger'),
  },
  {
    path: '/success-trade',
    component: () => import('@/views/Success'),
    beforeEnter: (to, from, next) => {

      if(!fund.state.lastTrade) {
        next('/')
      }
      next()
    },
  },
]
