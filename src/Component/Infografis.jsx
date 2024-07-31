import React from "react";

const Infografis = () =>  {
    return (
        <div className=" md:mx-20 md:my-20 flex justify-center flex-row col-span-4">
            <h1 className="text-teal-500 text-xl font-extrabold ">Infografis</h1>
            <div className="flex justify-between justify-items-center"> 
                <img src="src/assets/I1.jpg" 
                    alt="Infografis1" 
                    className="mt-20 w-1/2"/>
            </div>
            <div className="flex justify-between"> 
                <img src="src/assets/i2.jpg" 
                    alt="Infografis1" 
                    className="mt-20 w-1/2"/>
            </div>
            <div className="flex justify-between"> 
                <img src="src/assets/i3.jpg" 
                    alt="Infografis1" 
                    className="mt-20 w-1/2"/>
            </div>
            <div className="flex justify-between"> 
                <img src="src/assets/i3.jpg" 
                    alt="Infografis1" 
                    className="mt-20 w-1/2"/>
            </div>
            <div className="flex justify-between"> 
                <img src="src/assets/i3.jpg" 
                    alt="Infografis1" 
                    className="mt-20 w-1/2"/>
            </div>
        </div>
    );
}

export default Infografis;