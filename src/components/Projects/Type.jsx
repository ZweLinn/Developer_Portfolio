import { useTypewriter , Cursor } from 'react-simple-typewriter'
function TypeForProjects() {
    const [text] = useTypewriter({
        words: ["Here are a few projects I've worked on recently"],
        loop: 1,
        typeSpeed: 80,
        cursorStyle: '_',
        cursorColor : "red",
        cursorBlinking	: true
      })
    return (
        <div className="my_job ">
           <h5>{text} <Cursor cursorColor='rgb(62, 62, 238)' cursorStyle='_'/></h5>
           
        </div>
        )
        
  }
  
  export default TypeForProjects;