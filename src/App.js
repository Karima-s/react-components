import './App.css';

import ProfilePhoto from './Component/Profile/ProfilePhoto'
import FullName from './Component/Profile/FullName'
import Address from './Component/Profile/Address'

function App() {
 
  const style = { border: "solid 1px black", maxWidth: "100vw" };
  return (
    <div>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
      </div>
  );
}


export default App;
