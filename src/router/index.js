import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello,
            children: [{
                    path: '/livehall',
                    component: require('../components/LiveHall.vue')
                },
                {
                    path: '/ordersub',
                    component: require('../components/OrderSubject.vue')
                },
                {
                    path: '/classsub',
                    component: require('../components/ClassSubject.vue')
                },
                {
                    path: '/actsub',
                    component: require('../components/ActSubject.vue')
                },
                {
                    path: '/',
                    redirect: '/livehall'
                }
            ]
        },
        {
            path: '/msgcenter',
            name: 'MsgCenter',
            component: require('../components/MsgCenter.vue')
        },
        {
            path: '/setting',
            name: 'Setting',
            component: require('../components/Setting.vue')
        }
    ]
})