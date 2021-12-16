
import './App.css';
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import DetailList from './components/DetailList'
import DetailEdit from './components/DetailEdit';
const data=restProvider("http://localhost:3000")

function App() {
  
  return (
    <div>
   <Admin dataProvider={data}>
     <Resource name='details' 
     list={DetailList}
     edit={DetailEdit}
     />
   </Admin>
    </div>
  );
}

export default App;
