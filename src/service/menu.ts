import axios from '../plugin/vue-axios'

export function getMenuList(params: any = '') {
  return axios.post<string>('/tarsier-comm/permission/module/getModuleTree', params)
}
