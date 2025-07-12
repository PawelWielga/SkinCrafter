import './App.css';

import NBar from './components/nbar/nbar.jsx';
import PreviewArea from './components/preview-area/preview-area.jsx';

function App() {
  return (
    <div className="container">
      <NBar />
      <div className='main-content'>
        <PreviewArea />
      </div>
    </div>
  );
}

export default App;
