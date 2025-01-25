import { api } from '../instance'

export function getPokemons({ options }) {
  return api.get('pokemon/?limit=151', { ...(options && options) })
}
