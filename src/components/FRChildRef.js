import React, { forwardRef } from 'react';

// function FRChildRef() {
//   return (
//     <div>
//       <input type='text' />
//     </div>
//   );
// }

const FRChildRef = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type='text' ref={ref} />
        </div>
    )
})

export default FRChildRef;