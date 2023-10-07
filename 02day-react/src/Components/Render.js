//default import export
import FirstCode from './FirstCode';
import SecondCode from './SecondCode'
import ThirdCode from './ThirdCode'
import FourthCode from './FourthCode'
//named import export
import { students } from '../utils/constants';
const Render=()=>{const image="https://toppng.com/uploads/preview/viewsave-full-png-salman-khan-in-ready-11563886462o9ym6wljp4.png";
const name="Salman Khan";
const nickname="Salman Bro";

const name1="Dhoni"
const nickname1="MS. Dhoni"

return (
  <div className="App">
    {/* <p>Learning React</p> */}
    {/* {
      FirstCode()
    }
    <FirstCode></FirstCode> */}

    {/* <FirstCode/> */}

    {/* pass it 
    Props=>Propertites
    */}
    <SecondCode name={name} nickname={nickname} img={image}/>
    <SecondCode name={name1} nickname={nickname1} img={image}/>
    <SecondCode name={name} nickname={nickname} img={image}/>
    <SecondCode name={name} nickname={nickname} img={image}/>
    <SecondCode name={name} nickname={nickname} img={image}/>
    

    {/* Task 2: is to render different images,name and nickname */}
    {/* Task 3: is to render different images,name and nickname but only with  1 function call */}

    

    {
     students.map((element)=>{
      return <ThirdCode name={element.nickName+" Guvi"} nickname={element.nickName} img={element.pic}/>
     }) 
    }

  {
    students.map((element)=>(
       <ThirdCode name={element.nickName+" Guvi"} nickname={element.nickName} img={element.pic}/>
     )) 
    }

    {/* spread operator */}

  {
    students.map((element)=>(
       <FourthCode  {...element}/>
     )) 
    }
   
  </div>
)
}
export default Render
