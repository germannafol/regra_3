const caixaPreco=document.getElementById("preco");
const caixaQuantidade=document.getElementById("quantidade");
const caixaSelecao=document.getElementById("caixa-selecao");

//3.Seleciona o pai
const paiPrecoTotal=document.querySelector("#precoTotal");

function criaRespostaTela(mensagem){
    
    //1.cria o elemento
    respostaPrecoTotal = document.createElement("li");
    //console.log(1);

    //2.add class ao elemento criado
    respostaPrecoTotal.classList.add("caixaRespostaPrecoTotal")
    //console.log(2);
   
    //4.add tag pai a tag filha
    paiPrecoTotal.appendChild(respostaPrecoTotal);
    //console.log(4);

    //5.modificar texto
    textoPrecoTotal=document.createTextNode(mensagem);
    //console.log(5);

    //6.coloca o texto no paragrafo
    respostaPrecoTotal.appendChild(textoPrecoTotal);
}   


let quantidade1;
let valor1; //em gramas
const quantidadeTotal=1000; //1 kg= 1000 gramas
const botao=document.getElementById("botao");



botao.addEventListener('click', regra=>{
    
    function regra(quantidade1,valor1){
    
        const valorTotal=valor1*quantidadeTotal/quantidade1;
        const arredondaValortotal=parseFloat(valorTotal.toFixed(2));   
        //console.log(`O Preço, produto com ${quantidade1} é ${arredondaValortotal} o Kg`);
        criaRespostaTela(`R$ ${arredondaValortotal}/Kg : Produto com ${quantidade1} ${caixaSelecao.value}`);
    }

    regra ( caixaQuantidade.value , caixaPreco.value );
    caixaPreco.focus;
}
)


