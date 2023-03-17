
import './App.css';
import Courses from './Courses';
import Search from './Search';


const content = "Cybersquare Professional";
const obj = { "title": "cybersquare", "name": "baabtra" };
const courses = ["PHP", "Angular", "React", "Python"];

function App() {
  return (
    <div className="App">
      <h1>{content}</h1>
      <h1>content</h1>
      <h3>{obj.title} courses provided by {obj.name}</h3>
      <ul>
        {
          courses.map(function(item,index){
            return <Courses data={item}/>
          })
        }
      </ul>

      <h1>Php</h1>
      <h2> hi this is test content </h2>
      <h3>check</h3>

      <Search/>

    </div>
  );
}

export default App;
