import Header from './components/Header/Header';
import Main from './components/Main/Main';
import "./index.css"

function App() {
  return (
    <div className="flex justify-between bg-zinc-900">
      
      <Header classname="grow-0 p-1 basis-72 h-screen bg-black"/>
      <Main  classname=" basis-3/4 w-64 h-screen bg-zinc-900 flex justify-between"/>
    </div>
  );
}

export default App;
