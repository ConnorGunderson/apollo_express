import { Ability } from '../ability/ability'
import { Attributes, GlobalStats } from '../shared'

export interface Enemy {
  id: number
  name: string
  class: string
  gameMode: string
  abilities: Ability[]
  attributes: Attributes
  globalStats: GlobalStats
}
