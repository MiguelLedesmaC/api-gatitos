import { useEffect, useState } from 'react'
import getRandomFact from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()
  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }
  // Efecto recuperar la frase al cargar la pagina
  useEffect(refreshFact, [])
  return { fact, refreshFact }
}