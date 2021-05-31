import axios from 'axios'; //passa axios
import React, {useEffect, useState} from 'react'; 

function Pergunta(){//função do react
    let [pergunta, setPergunta] = useState({"pergunta":{"id":11,"titulo":" ","descricao":"","createdAt":"","updatedAt":""},"respostas":[]}); // passa o parametro default
    useEffect(()=>{
        axios.get("http://localhost:8080/pergunta/11").then(res =>{ //passa o endereçamento do json
            setPergunta(res.data);// altera a variavel pergunta e redesenha a tela
        });
    },[]);

    return( //react
        <div>
            <h1>{pergunta.pergunta.titulo}</h1> 
            <p>{pergunta.pergunta.descricao}</p>
            <h2>respostas</h2>
        </div>
    );
}
 
export default Pergunta;