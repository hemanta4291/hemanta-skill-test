
import Main from "./layout/main/Main";
import { BrowserRouter } from 'react-router-dom';

const  App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
