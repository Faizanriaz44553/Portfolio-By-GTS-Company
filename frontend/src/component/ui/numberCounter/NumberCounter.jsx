
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './NumberCounter.css'
const NumberCounter = ({end , duration , percent}) => {
    console.log(end , duration);
    
        const { ref, inView } = useInView({
          triggerOnce: false,
          threshold: 0.5 
        });
  return (
    <div>
      <h1 ref={ref} className='NumberCounter-heading'>
          {inView ? <CountUp end={end} duration={duration} /> : 0}{percent}
        </h1>
    </div>
  )
}

export default NumberCounter
