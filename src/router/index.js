import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Less from '@/components/Less'
import Routes from '@/components/route'
import TemplateGrammer from '@/components/templateGrammer'
import Style from '@/components/style-api'
import If from '@/components/if'
import For from '@/components/for'
import Click from '@/components/click'
import InputApi from '@/components/input-api'
import ComponentApi from '@/components/component-api'
import SlotApi from '@/components/slot-api'
import DynamicApi from '@/components/dynamic-component'
import BoundaryApi from '@/components/boundary-api'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/less',
      component:Less
    },
    {
    	name:'routeStudy',
    	path:'/route',
    	component:Routes
    },
    {
      path:'/templateGrammer',
      component:TemplateGrammer
    },
    {
      path:'/style',
      component:Style
    },
    {
      path:'/if',
      component:If
    },
    {
      path:'/for',
      component:For
    },
    {
      path:'/click',
      component:Click
    },
    {
      path:'/input-api',
      component:InputApi
    },
    {
      path:'/component-api',
      component:ComponentApi
    },
    {
      path:'/slot-api',
      component:SlotApi
    },
    {
      path:'/dynamic-api',
      component:DynamicApi
    },
    {
      path:'/boundary-api',
      component:BoundaryApi
    }
  ]
})
