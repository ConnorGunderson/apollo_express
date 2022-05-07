export interface Ability {
  id: number
  name: string
  levelReq: number
  cooldown: number
  damage: Damage[]
  effects: Effect[]
  chance: number
}

export interface Effect {
  type: string
  duration: number
  chance: number
}

export interface Damage {
  type: string
  amount: string
}
