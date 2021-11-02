import './App.css';
import { useState,useEffect} from 'react';
import ClassList from './Components/ClassItem/ClassList';
import AppBar from './Components/AppBar/AppBar'

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [classes, setClasses] = useState([]);  
  const handleCreateClass = (classItem) =>
  {
    fetch("https://classroom-manager-api.herokuapp.com/classes")
    .then(res => res.json())
    .then(
      (result) => {
        setClasses(result);
      })
  }
  useEffect(() => {
      fetch("https://classroom-manager-api.herokuapp.com/classes")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setClasses(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log(error)
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  return (
    <div className="App">
      <AppBar handleCreateClass={handleCreateClass}/>
      <ClassList data={classes} />
    </div>
  );
}

export default App;
