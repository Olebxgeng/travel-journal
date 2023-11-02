import Navbar from './Nav';
import Card from './Cards';
import './App.css';
import Travels from './data';

function App() {

  const travel = Travels.map(item => {
    return(
      <Card
      key= {item.id}
      {...item}/>
    )
  })
  return (
    <div>
      <Navbar />
      <section className='cards-list'>
        {travel}
      </section>
    </div>

  );
}

export default App;
