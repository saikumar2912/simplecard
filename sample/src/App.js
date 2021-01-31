import './App.css';
import React from 'react';
import Card from '@material-ui/core/Card';
import Sample from './Components/Sample'
function App() {
    return (
        
      <Card className="card" variant="outlined" >
        <img src="/asserts/picture.png" className="img2"  alt="Cardimage" width="200" height="200"/>
       <Sample/>
      </Card>
      
    
    );
  }
  export default App;