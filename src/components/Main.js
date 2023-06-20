import React from 'react';
import Todos from './Todos';


function Main({children}) {

  return (
    <div className="Main">
      <Todos />
    </div>
  );
}

export default Main;