import React from "react";
import clientBg from '../../Assets/Images/client-bgImg.png';







function ClientImages(){

    return(<>
    <div className="container-fluid my-5 px-5 clientImagesContainer">
        <img src={clientBg}/>
    </div>
    </>)
}

export default React.memo(ClientImages);