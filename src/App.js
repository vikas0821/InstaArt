import Header from './components/Header/Header';
import Main from './components/Main/Main';

import "./index.css"
import FormBox from './components/Header/FormBox/FormBox';

function App() {
  return (
    <div className="block md:flex justify-between bg-zinc-900 h-screen" >
      
      <Header classname="grow-0 p-1 basis-72 h-full bg-black"/>
      <Main  classname="px-2 md:px-16  md:basis-3/4 h-full bg-zinc-900 md:flex justify-between"/>
      <FormBox />
    </div>
  );
}

export default App;
