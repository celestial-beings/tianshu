import { RouteRecordRaw } from 'vue-router'
declare global {
  namespace Router {
    type Route = RouteRecordRaw;
  }
}
