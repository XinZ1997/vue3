import { post } from '../plugin/vue-axios'

export interface IMenu {
  id?: number
  children?: IMenu[]
}

export async function getMenuList(params: unknown = ''): Promise<IMenu[]> {
  const res = await post('/tarsier-comm/permission/module/getModuleTree', params)
  return res || {}
}
