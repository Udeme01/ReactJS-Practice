import React from 'react';

function ListRendering() {
    const names = ['udeme', 'emma', 'ebony'];
    const namesList = names.map(name => <h6>{name}</h6>)
  return (
    <div>
        {namesList}
    </div>
  );
}

export default ListRendering;