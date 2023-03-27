
// importación custom hook
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFAct'

// Estilos
import '../style.css'

// APIs

const App = () => {
  // Llamamos al customHook(no puede usarse, dentro de ningun condicional, ni bucle)
  const { fact, refreshFact } = useCatFact()
  const { image } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1 className='title'>App de gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}  {/* Renderizado Condicional */}
        {image && <img src={image} alt='Image extracted using the first word' />}
        <button onClick={handleClick}>Get new Fact</button>
      </section>
    </main>
  )
}
export default App
