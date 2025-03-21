import { useTypewriter , Cursor } from 'react-simple-typewriter'
function TypeforAbout() {
    const [text] = useTypewriter({
        words: ['Who am I ?'],
        loop: 1,
        typeSpeed: 200,
        cursorBlinking	: true
      })
    return (
        <div className="my_job ">
           <h2 className="text-light words left-side_title">{text} <Cursor cursorColor='rgb(62, 62, 238)' cursorStyle='|'/></h2>
           
        </div>
        )
        
  }
  
  export default TypeforAbout;