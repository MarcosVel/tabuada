function calculaTabuada() {

    let tabuada = document.querySelector("#tabuada tbody");
    //obtendo o valor A do input
    let valorA = parseInt(document.querySelector("#valorA").value); /**parseInt transforma o String em num inteiro para não ter erro */

    tabuada.innerHTML = ""; //para limpar a tabela caso aperte F5, se não, acrescenta

    for (let valorB = 0; valorB <= 10; valorB++) {

        let resultado = valorA * valorB;

        let template = `        
                <td>${valorA}</td>
                <td>x</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${resultado}</td>        
            `;

        // criando a linha dinamicamente
        let tr = document.createElement("tr");

        tr.innerHTML = template; //dizendo que a linha (tr) é o template

        tabuada.append(tr);

    }

}       /*joguei a tabuada dentro da função, embaixo agora tenho que chamar */

calculaTabuada();

/*adicionando evento no valorA que estará mudando o calculaTabuada */
document.querySelector("#valorA").addEventListener("change", calculaTabuada);














