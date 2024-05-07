export type SettingComType = {
  isSettingShow: boolean
  uses: any[]
  updateUses: any
  filters: any[]
  updateFilters: any
}

export interface ItemType {
  label: string
  url?: string
  urls?: string[]
  config?: string[]
  children?: ItemType[]
  depth?: number
}