import { useTypewriter , Cursor } from 'react-simple-typewriter'
function Type() {
    const [text] = useTypewriter({
        words: ['Junior Web Developer', 'React Developer', 'MERN Stack Developer'],
        loop: true,
        deleteSpeed: 100,
        typeSpeed: 100,
        delaySpeed: 1000,
        cursorStyle: '_',
        cursorColor : "red",
        cursorBlinking	: true
      })
    return (
        <div className="my_job ">
           <h3>{text} <Cursor cursorColor='rgb(62, 62, 238)' cursorStyle='_'/></h3>
           
        </div>
        )
        
  }
  
  export default Type;