import Nav from './Components/Nav';
import NewsList from './Components/NewsList';
function App() {
  const pagesize = 5;
  return (
    <>
      <Nav />
      <div className='container'>
          <NewsList pagesize={pagesize} />
      </div>

    </>
  );
}

export default App;
