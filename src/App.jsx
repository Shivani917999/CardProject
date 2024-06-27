import React, { useState } from 'react';
import CardList from './components/loadingscreen';
import LoadingScreen from './components/loadingscreen';



const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className=' App' >
      {
        loading ? <LoadingScreen setLoading={setLoading} /> :
          <CardList></CardList>

      }
    </div>
  );
}

export default App;