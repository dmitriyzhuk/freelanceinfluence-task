import { CurrencyValue } from './money.model'
import { Platform } from './platform.model'

export interface TaskToAdd {
  title: string
  description: string
  budget: CurrencyValue
  platforms: Array<Platform>
  filesIds: Array<string>
}

export interface TaskPublicInfo {
  id: string
  title: string
  description: string
  budget: CurrencyValue
  platforms: Array<Platform>
  filesIds: Array<string>
  proposalCount: number
  addedTime: string
}
