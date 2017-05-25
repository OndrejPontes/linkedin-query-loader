import { Record, List } from 'immutable'

// Types: constant, elementary, complex
export const QUERY_TYPES = {
  CONSTANT: "CONSTANT",
  ELEMENTARY: "ELEMENTARY",
  COMPLEX: "COMPLEX",
}

const QueryRecord = Record({
  name: "",
  value: "",
  items: List(),
  type: QUERY_TYPES.ELEMENTARY,
})

class Query extends QueryRecord {

  update(query) {
    return this.set("name", query.name).set("items", query.items)
  }

  addItem(item) {
    return this.set("items", this.items.push(item))
  }

  removeItem(index) {
    return this.set("items", this.items.delete(index))
  }

  getFullValue() {
    return this.type === QUERY_TYPES.COMPLEX
      ? this.items.map(item => item.getFullValue()).join(" ")
      : this.value
  }
}

export default Query