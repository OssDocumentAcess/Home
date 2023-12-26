const maintag = document.querySelector('main');// A divisão entre login e conteudo
var aba = window.document.getElementById('content');// O container do arquivo
var info = document.querySelector('.info');//O container da descrição
var decider = document.getElementById('info');//Check box da descrição
var loadScreen = document.querySelector('.load-screen');
var chave 
var docs

//change() é o botão de descrição da pasta
function change() {
if(decider.checked){
    info.style.width = '0%';
    info.querySelector('p').style.display = 'none';
    aba.querySelector('#myimage').style.maxWidth = '80%';
    aba.querySelector('#myimage').style.left = '50%';
} else {
   
    info.style.width = '20%';
    info.querySelector('p').style.display = 'block';
    aba.querySelector('#myimage').style.maxWidth = '60%';
    aba.querySelector('#myimage').style.left = '60%';
    }
}
document.querySelector('#locker').addEventListener('keyup', (e)=> {
    if (e.key === "Enter") {
      destrancar()
    }
});
//Fecha ons Contents, lockers e reseta seu conteúdo
function fechar(){
    aba.style.display = 'none';
    maintag.style.opacity = '1';
    decider.checked = false;
    info.style.width = '0%';
    info.querySelector('p').style.display = 'none';
    aba.querySelector('#myimage').style.maxWidth = '80%';
    aba.querySelector('#myimage').style.left = '50%';
    aba.querySelector('#locker').value = '';
    chave = ''
    
}

//Abre os Contents e escolhe qual arquivo e texto serão exibidos
function abrir(clicked_id){
const myImage = aba.querySelector('#myimage');
docs = document.getElementById(clicked_id);
aba.querySelector('h1').innerText = document.getElementById(clicked_id).querySelector('p').innerText;
//A mecanica de trancar arquivos
if(document.getElementById(clicked_id).classList.contains('xxx')) {
    document.getElementById('locked').style.display = 'block';
    aba.querySelector('article').style.backgroundColor = '#67121280';
    aba.querySelector('article').style.border = '#b0181880 outset 5px';
    
} else { 
    document.getElementById('locked').style.display = 'none';
    aba.querySelector('article').style.backgroundColor = '#121f6780';
    aba.querySelector('article').style.border = '#182fb080 outset 5px';
}

    switch (clicked_id) {
case 's01':
myImage.src ="img/content/cadeirante.jpg";
info.querySelector('p').innerHTML = ''
 chave =  ''
    break;
case 's02':
myImage.src ="img/content/Chupataro.png";
info.querySelector('p').innerHTML = ''
 chave =  ''  
    break;
case 's03':
myImage.src ="img/content/guindaste.jpg";
info.querySelector('p').innerHTML = ''
 chave =  ''          
    break;
case 's04':
myImage.src ="img/content/";
info.querySelector('p').innerHTML = ''
 chave =  ''        
    break;
case 's05':
myImage.src ="img/content/";
info.querySelector('p').innerHTML = ''
 chave =  ''          
    break;
case 's06':
myImage.src ="img/content/";
info.querySelector('p').innerHTML = ''
 chave =  ''          
    break;
case 's07':
myImage.src ="img/content/";
info.querySelector('p').innerHTML = ''
 chave =  ''          
    break;
case 's08':
myImage.src ="img/content/";
info.querySelector('p').innerHTML = ''
 chave =  ''          
    break;
case 's09':
myImage.src ="img/content/";
info.querySelector('p').innerHTML = ''
 chave =  ''          
    break;
case 's10':
myImage.src ="img/content/";
info.querySelector('p').innerHTML = ''
 chave =  ''          
    break;
case 's11':
myImage.src ="img/content/";
info.querySelector('p').innerHTML = ''
 chave =  ''          
    break;
case 's12':
myImage.src ="img/content/12-1.png";
info.querySelector('p').innerHTML = '&#34;<i>Julgueis os pecados dos inocentes, a troco das chamas do Cplqfcoqtvg. Por pura satisfação. Ó paradoxo.</i>&#34; <br><br>&#8211;Cesar '
 chave =  ''
    break;
case 's13':
myImage.src ="img/content/12-2.png";
info.querySelector('p').innerHTML = ' Il secondo figlio porta lo stemma Buonarroti. Posso persino sentire i suoi <a href="https://ossdocumentacess.github.io/X/" target="_blank">"<i>bussare</i>"</a> nella culla:'
 chave =  ''          
    break;
case 's14':
myImage.src ="img/content/cadeirante.jpg";
info.querySelector('p').innerHTML = '' 
 chave =  '123'         
    break;
case 's15':
myImage.src ="img/content/";
info.querySelector('p').innerHTML = '' 
 chave =  ''         
    break;  
case 's16':
myImage.src ="img/content/";
info.querySelector('p').innerHTML = ''
 chave =  ''          
    break; 
}
    if(info.querySelector('p').textContent.length === 0) {  
        aba.querySelector('label').style.display = 'none';
    }else { 
        aba.querySelector('label').style.display = 'block';
    }
    aba.style.display = 'block';
    maintag.style.opacity = '0.5'
}
   
    document.querySelector('#id').addEventListener('keydown', (e)=> {
    if (e.key === "Enter") {
      list()
    }
  });
  document.querySelector('#name').addEventListener('keydown', (e)=> {
    if (e.key === "Enter") {
      list()
    }
  });

  document.querySelector('#locker').addEventListener('keyup', (e)=> {
    if (e.key === "Enter") { {
        if (document.querySelector('#locker').value.toLowerCase() === chave) {
            
                document.querySelector('#locked').style.display = 'none';
                aba.querySelector('article').style.backgroundColor = '#121f6780';
                aba.querySelector('article').style.border = '#182fb080 outset 5px';
                docs.classList.remove('xxx');
                abrir()
        } else {window.alert('Acess Denied');}
    }
}   
});
//Recebe os inputs da area Login e ativa a função entrar
function list(){
    var name = document.getElementById("name").value.toLowerCase();
    var id = document.getElementById("id").value.toLowerCase();
    const formtag = document.getElementById('login-screen');
    
    
      
    //depois de que o login foi escolhido escode o Login e mostra o Main
    function entrar(){
        formtag.style.display = 'none';
        setTimeout(() => {
            loadScreen.style.display='block'
          }, 100); 
            setTimeout(() => {
              loadScreen.style.opacity='1'
          }, 200); 
          progress();
        for (var i = 0; i < docs.length; i++) {
            docs[i].style.display = "block";
        }
    }
    
    switch (name + " " + id) {
case "bob 0":
    var docs = document.querySelectorAll(`.docs > div`);
    entrar();
    break;
case "chiara d'angelo 66020140000":
    document.getElementById("myuser").innerHTML = "Chiara D'Angelo";
    var docs = document.getElementsByClassName('d01');
    entrar();
    break;
case "klaus saphira 31102150000":
    document.getElementById("myuser").innerHTML = "Klaus Saphira";
    var docs = document.getElementsByClassName('d02');
    entrar();
    break;
case "nimeria tallon 19170490000":
    document.getElementById("myuser").innerHTML = "Nimeria Tallon";
    var docs = document.getElementsByClassName('d03');
    entrar();
    break;
case "mirai misuzune 00339850000":
    document.getElementById("myuser").innerHTML = "Mirai Misuzune";
    var docs = document.getElementsByClassName('d05');
    entrar();
    break;
case "isaac kollins 70120220000":
    document.getElementById("myuser").innerHTML = "Isaac Kollins";
    var docs = document.getElementsByClassName('d06');
    entrar();
    break;
default:
    window.alert('Acess Denied');
}
}

function progress(){
    
    var percent = document.querySelector('.percent');
    var text = document.querySelector(".text");
    var progress = document.querySelector('.progress');
    var count = 1;
    var per = 1;
    var loading = setInterval(animate, 50);
    var textArray = [
      "Rastreando seu IPv4...",
      "Analizando seu Historico...",
      "Fazendo um Sandwish...",
      "Nenhum lugar para esconder.",
    ];
    var randomNumber = Math.floor(Math.random() * textArray.length);
    document.querySelector(".text").innerHTML = textArray[randomNumber];
    
    function animate(){
      if(count >= 100 && per >= 100){
        text.innerHTML = "Completed!";
        clearInterval(loading);
      ativar()
      }else{
        per = per + 1;
        count = count + 1;
        progress.style.width = per + '%';
        percent.textContent = count + '%';
      }
    function ativar() {
      setTimeout(() => {
        loadScreen.style.opacity='0'
      }, 500); 
        setTimeout(() => {
        loadScreen.style.display='none'
        maintag.style.display = 'block';
      }, 1000); 
    }
    setTimeout(() => {document.querySelector('.imgPixel').style.opacity='0'}, 300)
  }
  }
  
  