const Paginas = window.document.querySelectorAll('.Paginas');
let indice=0;
const trava =[6,18];

function proxima(){
    if(trava.includes(indice)) return;
    Paginas[indice].style.display="none";
    indice++;

     if(indice < Paginas.length){
        Paginas[indice].style.display='flex';
    }else{
        indice = Paginas.length -1;
    }
}

Paginas[indice].style.display='flex';

document.body.addEventListener('click', proxima);



const fogebotao = document.getElementById("botaoFujao");
const velocidade= 180;

document.addEventListener("mousemove", (event) =>{
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const botaoRect =fogebotao.getBoundingClientRect();
    const botaoX = botaoRect.left + botaoRect.width /2;
    const botaoY = botaoRect.top + botaoRect.height /2;

    const distX = mouseX - botaoX;
    const distY = mouseY - botaoY;
    const distancia = Math.sqrt(distX **2+ distY **2);

    if(distancia < 100){
        const direcaoX = distX / distancia;
        const direcaoY = distY / distancia;
        
        let novoX = botaoX - direcaoX * velocidade;
        let novoY = botaoY - direcaoY * velocidade;

       if(novoX< 0 || novoX >window.innerWidth-botaoRect.width){
            novoX = Math.random() * (window.innerWidth - botaoRect.width);
       }
       if(novoY< 0 || novoY >window.innerHeight-botaoRect.height){
            novoY = Math.random() * (window.innerHeight - botaoRect.height);
       }

        fogebotao.style.left = `${novoX}px`;
        fogebotao.style.top =  `${novoY}px`;
    }

});

fogebotao.addEventListener("click", (event)=>{
    event.stopPropagation();
    Paginas[indice].style.display ="none";
    indice++;
    if (indice< Paginas.length){
        Paginas[indice].style.display = "flex";
    }
});


const fotosdacarta = [
    {id: "carta_1png", imagens:["Imagens e arte/frente.jpg","Imagens e arte/fundo.jpg","Imagens e arte/carta.jpg"]},
    {id: "carta_2png", imagens:["Imagens e arte/Carta2Costas.png","Imagens e arte/carta2.png"]}
];

fotosdacarta.forEach(({id, imagens}) =>{
    const img =document.getElementById(id);
    let indice = 0;

    img.addEventListener("click", (event) =>{
        event.stopPropagation();
        indice = (indice + 1) % imagens.length;
        img.src = imagens[indice];
    });
});

