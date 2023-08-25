export type Person = {
  id: string
  name: string
  age: string
  gender: string
  state: string
  deceasedDate: string
}

export type dataPerGenderProps = {
  M: number
  F: number
  Unknown: number
  LGBT: number
}

export type DataPerGenderType = {
  genderType: string
  value: number
}

export type BarGraphDataType = {
  type: string
  value: number
}
