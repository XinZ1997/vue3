import { post } from '../plugin/vue-axios'

export interface IModuleTree {
  id?: number
  label?: string
  status?: number
  moduleType?: number
  children: IModuleTree[]
}

export async function getMenuList(params: unknown = ''): Promise<IModuleTree> {
  const res = await post('/tarsier-comm/permission/module/getModuleTree', params)
  return res || {}
}
