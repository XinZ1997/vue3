const menuOptions: IMenu[] = [
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    disabled: true,
  },
]
interface IMenu {
  label: string
  key: string
  disabled: boolean
  children?: IMenu[]
}
export { menuOptions }
