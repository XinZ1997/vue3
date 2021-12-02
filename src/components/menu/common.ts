export interface IMenu {
  label: string
  key: number
  disabled?: boolean
  children?: IMenu[]
}
