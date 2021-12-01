import { post } from '../plugin/vue-axios'

export interface IUserInfo {
  domainId?: number
  icon?: string
  id: number
  isUpdatePwd?: number
  language?: string
  lastLoginTime?: number
  loginCode?: string
  userCode?: string
  userName?: string
}

export async function getUserInfo(params: any = ''): Promise<IUserInfo> {
  const res = await post('/tarsier-comm/permission/user/getCurrentUser', params)
  return res || {}
}
