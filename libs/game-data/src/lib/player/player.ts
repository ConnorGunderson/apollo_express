import { Ability } from '../ability/ability'
import { Attributes, GlobalStats } from '../shared'

export interface Player {
  id: number
  name: string
  class: string
  gameMode: string
  abilities: Ability[]
  attributes: Attributes
  globalStats: GlobalStats
}
