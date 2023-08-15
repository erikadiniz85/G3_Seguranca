
import GlobalStyle from './src/styles/GlobalStyles';
import HeaderArea from './src/components/header/index.js';
import Servicos from './src/components/servicos/index.js';
import HistoriaG3 from './src/components/historia/index.js';
import FooterArea from './src/components/footer/index.js';
import Segmentacao from './src/components/segmentacao/index.js';
import Prevencao from './src/components/prevencao/index.js';
import GanhosProjetadosCard from './src/components/card-ganhos-projetados/index.js';
import ContatoCard from './src/components/contato/index.js';
import {Routes} from "react-router-dom";


function App() {

  return (
    <>
      <Routes />
      <GlobalStyle />
      <HeaderArea />
      <Servicos/>
      <HistoriaG3/>
      <Segmentacao/>
      <Prevencao />
      <GanhosProjetadosCard />
      <ContatoCard />      
      <FooterArea />
      
    </>
  );
}


export default App;
