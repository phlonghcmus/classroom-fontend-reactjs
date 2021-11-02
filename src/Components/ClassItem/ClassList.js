import { useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import ClassCard from './ClassCard'
export default function ClassList({data}) 
{   
    console.log(data)
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [classes, setClasses] = useState([]);  
    // useEffect(() => {
    //     fetch("https://classroom-manager-api.herokuapp.com/classes")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           setIsLoaded(true);
    //           setClasses(result);
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           setIsLoaded(true);
    //           setError(error);
    //         }
    //       )
    //   }, [])
    return (
      <Grid padding={4} container spacing={4}>
          {data.map((item,index) => <ClassCard key={item._id} classItem={item}/>)}
      </Grid>
    )
}
