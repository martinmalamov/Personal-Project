import React from 'react';
import Header from './components/header'
import Aside from './components/aside'
import Footer from './components/footer'
import Tenders from './components/tenders'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <Aside />
        <Tenders />
      </div>
      <Footer />
    </div>
  );
}

export default App;
