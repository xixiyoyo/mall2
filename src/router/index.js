import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import("../views/home/Home");
const Cate = () => import("../views/cate/Cate");
const Cart = () => import("../views/cart/Cart");
const Profile = () => import("../views/profile/Profile");

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cate',
    component:Cate
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  // mode:'history',
  routes
})

export default router

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
//
// })
//
// export default router
