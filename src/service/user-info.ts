import axios from '../plugin/vue-axios'

export function getUserInfo(params: any = '') {
  return axios.post('/tarsier-comm/permission/user/getCurrentUser', params)
}
