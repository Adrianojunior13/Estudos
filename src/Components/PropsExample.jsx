import React from "react";

const PropsExample = ({nome , idade}) => {
    return (
        <div>
            <h1>Hello, {nome}!</h1>
            <p>Eu tenho {idade} anos!</p>
        </div>
    )
}

export default PropsExample;