import { useState, useEffect } from 'react'

const CAT_IMAGE_PREFIX_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [image, setImage] = useState()
  useEffect(() => {
    if (!fact) return
    const threeWords = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImage(url)
      })
  }, [fact])

  return { image: `${CAT_IMAGE_PREFIX_URL}${image}` }
} // devuelve un objeto con la imagen