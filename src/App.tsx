import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import Projetos from './container/Projetos'
import Sidebar from './container/sidebar'
import Sobre from './container/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [esteUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!esteUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={esteUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
