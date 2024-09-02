import Header from './components/header/Header.jsx';
import './components/header/header.css'
import './components/card/card.css'
import { Data } from './data/Data.js';
import Card from './components/card/Card.jsx';
import Footer from './components/footer/Footer.jsx';



function App() {

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {
            Data.map((card,index) => {
              return <Card key={index} card={card} />
            })
          }
        </div>
      </div>
      <Footer/>



    </div>
  )
}

export default App
