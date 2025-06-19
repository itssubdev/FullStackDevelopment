import React from "react";

function CardChild({children}) {
  return<>
    <div className="h-[300px] w-[300px] border-2 border-black flex flex-col items-center justify-center">
        {children}
    </div>
  </>;
}

export default CardChild;
