import {Route, Routes} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UseIdSample from './pages/UseId';
import UseTransitionSample from './pages/UseTransition';
import UseSyncExternalLibrarySample from './pages/useSyncExternalStore';


// function App() {
//   // const handleSendApiRequest = () => {
//   //   var body = {
//   //     'space': 3,
//   //     'thread': 3,
//   //     'comment': {
//   //       'text': 'This is the Golden Gate Bridge in San Francisco. \nIsn\'t it gorgeous?'
//   //     },
//   //     '__REQUEST_TOKEN__': '74ff2eb5-3d5e-4911-923f-3a66269f2ec4'
//   //   };
    
//   //   var url = 'https://hainguyenvan.kintone.com/k/v1/space/thread/comment.json';
//   //   var xhr = new XMLHttpRequest();
//   //   xhr.open('POST', url);
//   //   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//   //   xhr.setRequestHeader('Content-Type', 'application/json');
//   //   xhr.setRequestHeader('X-Cybozu-Authorization', btoa('hainguyenvan6799.webdev@gmail.com:haicybozu6799'));
//   //   xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
//   //   xhr.onload = function() {
//   //     if (xhr.status === 200) {
//   //       // success
//   //       console.log(JSON.parse(xhr.responseText));
//   //     } else {
//   //       // error
//   //       console.log(JSON.parse(xhr.responseText));
//   //     }
//   //   };
//   //   xhr.send(JSON.stringify(body));
//   // }

//   return undefined;
//   // (
//   //   <div className="App">
//   //     {/* <button onClick={handleSendApiRequest}>Request</button> */}
//   //     <Navbar/>
//   //     <div className="container">
//   //       <Routes>
//   //         <Route path="/" element={<Home />} />
//   //         <Route path="/useIdHookSample" element={<UseIdSample />} />
//   //         <Route path="/useTransitionHookSample" element={<UseTransitionSample />} />
//   //       </Routes>
//   //     </div>
//   //   </div>
//   // );
// }

// export default App;

export default function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useIdHookSample" element={<UseIdSample />} />
          <Route path="/useTransitionHookSample" element={<UseTransitionSample />} />
          <Route path="/useSyncExternalStore" element={<UseSyncExternalLibrarySample/>} />
        </Routes>
      </div>
    </div>
  )
}