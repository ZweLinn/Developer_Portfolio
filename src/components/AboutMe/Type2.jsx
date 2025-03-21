import { useTypewriter , Cursor } from 'react-simple-typewriter'
function TypeforHobby() {
    const [text] = useTypewriter({
        words: ['Some other activities that I love to do!'],
        loop: 1,
        typeSpeed: 70,
        cursorBlinking	: true
      })
    return (
        <div className="my_job ">
           <h4 className=" words left-side_title text-start ">{text} <Cursor cursorColor='rgb(62, 62, 238)' cursorStyle='_'/></h4>
           
        </div>
        )
        
  }
  
  export default TypeforHobby;