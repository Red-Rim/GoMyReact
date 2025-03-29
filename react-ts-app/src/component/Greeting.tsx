import React from "react";

type GreetingProps = {
    name: string;
}

const Greeting:React.FC<GreetingProps> =({name})=>{
    return <div>
        hilo how r u {name}
    </div>
}

export default Greeting