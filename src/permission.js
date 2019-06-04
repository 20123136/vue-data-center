import router from './router'
import {getToken} from './utils/auth'
import NProgress from 'nprogress' // progress bar
import store from './store'

router.beforeEach((to, from, next) => {
  NProgress.start()
  console.log(to);
  console.log(from);
  console.log(next);
  if(getToken()){
    if(to.path === '/'){
      next({
        path: '/data-center/dashboard'
      })
    }else{
      if(store.state.username === 'Unknown'){
        store.dispatch()
      }
    }
  }else{
    next(`/`);
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
