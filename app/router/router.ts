import { NuxtOptionsRouter, NuxtRouteConfig } from "@nuxt/types/config/router"

export default {
  extendRoutes(routes: any, resolve: any): NuxtRouteConfig[] {
    console.log(routes)
    return [
      {
        name: 'home',
        path: '/',
        component: resolve('~/pages/home/home.page.vue')
      }
    ]
  }
}