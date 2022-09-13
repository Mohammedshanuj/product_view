
import './App.css';
import Product_list from './Product_list';
import Userlist from './Userlist';

function App() {
  
  return (
    <div className="App">
      <h1>PRODUCT LISTS</h1>
     
     <Product_list/>

     <h1>User List</h1>
     <Userlist/>
    
    </div>
  );
}

export default App;
