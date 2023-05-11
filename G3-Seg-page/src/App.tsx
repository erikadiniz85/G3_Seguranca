import GlobalStyle from './styles/global.js';
import HeaderArea from './components/header/index.tsx';
import Servicos from './components/servicos/index.tsx';
import HistoriaG3 from './components/historia/index.tsx';
import FooterArea from './components/footer';
import Segmentacao from './components/segmentacao/index.tsx';
import Prevencao from './components/prevencao/index.tsx';


function App() {

  return (
    <>
      <HeaderArea />
      <Servicos/>
      <HistoriaG3/>
      <Segmentacao/>
      <Prevencao />
      <FooterArea />
      <GlobalStyle />
    </>
  )
}

export default App
