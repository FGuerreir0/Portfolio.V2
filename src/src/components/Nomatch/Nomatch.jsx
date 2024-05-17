import './Nomatch.css';
import { Link } from 'react-router-dom';

function Nomatch () {
  return (
    <div>
      <span>NoMatch</span>
      <Link to="/">Go to the home page</Link>
    </div>
  );
}

export default Nomatch;