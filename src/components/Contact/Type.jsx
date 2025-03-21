import { useTypewriter , Cursor } from 'react-simple-typewriter'
function TypeforContact() {
    const [text] = useTypewriter({
        words: ["I'm avaliable for Freelance Project"],
        loop: true,
        deleteSpeed: 100,
        typeSpeed: 100,
        delaySpeed: 1000,
        cursorStyle: '_',
        cursorColor : "red",
        cursorBlinking	: true
      })
    return (
        <div className="my_job text-light ">
           <h4>{text} <Cursor cursorColor='rgb(62, 62, 238)' cursorStyle='_'/></h4>
           
        </div>
        )
        
  }
  
  export default TypeforContact;