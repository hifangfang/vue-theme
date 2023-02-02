import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import homeUpDown from "../views/HomeUpDown.vue"
import homeRightLeft from '../views/HomeRightLeft.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)


const childrenRoutes =[
  {name:'homeView', path:"/", component:()=>import ('../test/HomeView.vue')},
  {name:"textTest", path:"textTest",component:()=>import ('../test/textTest.vue') },
  {name:"buttonTest", path:"buttonTest", component:()=> import('../test/buttonTest')},
  {name:"zsiconTest",path:"zsiconTest",component:()=> import('../test/zsiconTest')},
  {name:"notifyTest",path:"notifyTest",component:()=> import('../test/notifyTest')},
  {name:"tabsTest",path:"tabsTest",component:()=> import('../test/tabsTest')},
  {name:"zs-iframe", path:"/home/zs-iframe/:url", component:()=>import('../components/zs-Iframe.vue')},
]
const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  // 嵌套路由
  {
    path:'/home',
    name:"home",
    component: HomeView,
    children: childrenRoutes
    // children:[

    //   // {name:"文本预览", path:"/home/textview", component:()=> import('../test/textview.vue')},
    //   // {name:'test1',path:"/home/test1",  component:()=> import('../test/test1.vue')},
    //   // {name:"test3",path:"/home/test",component:()=> import('../test/test.vue')},

    // ]

  },

  // // 上下布局
  // {
  //   path:"/homeUpDown",
  //   name:"homeUpDown",
  //   component:homeUpDown,
  //   children:[
  //     {name:'test', path:"/homeUpDown/", component:()=>import ('../test/testView.vue')},

  //   ]
  // },
  // // 左右布局
  // {
  //   path:"/homeRightLeft",
  //   name:"homeRightLeft",
  //   component:homeRightLeft,
  //   children:[
  //     {name:'test', path:"/homeRightLeft/", component:()=>import ('../test/testView.vue')},


  //   ]


  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
]

const router = new VueRouter({
  routes
})

export default router
