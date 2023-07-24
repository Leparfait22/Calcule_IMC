const formulario = document.querySelector('#formulario');
let msg;

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('Formulario enviado');
    const input_peso = formulario.querySelector('.peso');
    const input_altura = formulario.querySelector('.altura');
    
    const peso = Number(input_peso.value);
    const altura = Number(input_altura.value);
    
    console.log(peso,altura);
    
    const imc = (peso/(altura**2));
   
    if(!peso){ 
        msg = 'Peso invalido';
        return exibirResultado(msg,false);
        }
    if(!altura){ 
        msg = 'Altura invalida';
        return exibirResultado(msg,false);
    }
    if(!peso && !altura){
         msg = 'Peso e altura incoreto';
         return exibirResultado(msg,false);
    }
    else{
        msg = `IMC = ${imc.toFixed(2)} - ${rangeIMC(imc)}`;
        exibirResultado(msg,true);
    }
  
});

function rangeIMC(imc){
    nivel = ['Abaixo do peso','Peso normal','Sobrepeso',
    'Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];
    let grau;
    if(imc <= 18.5) return nivel[0];
    if(imc <= 24.9) return nivel[1];
    if(imc <= 29.9) return nivel[2];
    if(imc <= 34.9) return nivel[3];
    if(imc <= 39.5) return nivel[4];
    if(imc >= 45)   return nivel[5];
}

function criarP(){
    let p = document.createElement('p');
    return p;
}

function exibirResultado(msg,isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criarP();
    if(isValid){
        p.classList.add('validParagrafo');
    }
    else{
        p.classList.add('invalidParagrafo');

    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}