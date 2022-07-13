import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/Home')
// 找房
const Sun = () => import('@/views/Sun')
// 资讯
const News = () => import('@/views/News')
// 我的
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
// 城市列表
const CityList = () => import('@/views/Home/cityList.vue')
// 发布房源
const Rental = () => import('@/views/Home/rental.vue')
// 我的出租
const Rent = () => import('@/views/My/components/Rent.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'sun', component: Sun },
      { path: 'news', component: News },
      { path: 'my', component: My, name: 'my' }
    ]
  },
  { path: '/login', component: Login },
  // 我的出租
  { path: '/rent', component: Rent, name: 'rent' },
  // 房屋列表
  { path: '/cityList', component: CityList, name: 'cityList' },
  // 发布房源
  { path: '/rental', component: Rental, name: 'rental' }
]

const router = new VueRouter({
  routes
})

export default router
