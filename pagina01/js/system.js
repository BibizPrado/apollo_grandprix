document.getElementsByTagName('h1')[0].focus();

let codar=`<!doctype html><html lang="pt-br"><head><title>Título da página</title></head><body><h1>Título do corpo da página</h1><p>Parágrafo</p></body></html>`, aumento1=0, aumento2=1;

for(let aumentar = 0; aumentar<1000; aumentar++){
  
    function correto(event){
  let tecla = event.key;
  let atual=(codar.substring(aumento1,aumento2));

  if (tecla==atual){
  if (aumento2==15 & codar.substring(0,aumento2).length==15) {
    setTimeout(function(){
      alert("Sucesso! Sua primeira tag html é o doctype html e ela é usada para informar o navegador a versão do html. Aperte ENTER para continuar.")
  },300);
  var audio = new Audio(
    'Audiosbc/doctype.m4a');
    audio.play(); 
}}
if (tecla==atual){
  if (aumento2==34 & codar.substring(0,aumento2).length==34) {
    setTimeout(function(){
      alert("Sucesso! Sua segunda tag html é o html lang e ela é usada declaração para informar ao navegador qual é o idioma padrão da página html. Aperte ENTER para continuar.")
  },300);
  var audio = new Audio(
    'Audiosbc/langptbr.m4a');
    audio.play();  
}}

if (tecla==atual){
  if (aumento2==40 & codar.substring(0,aumento2).length==40) {
    setTimeout(function(){
      alert("Sucesso! Sua terceira tag html é o head nela, fica os metadados da página, como o título. Aperte ENTER para continuar.")
  },300);
  var audio = new Audio(
    'Audiosbc/head.m4a');
    audio.play();
}}

if (tecla==atual){
  if (aumento2==47 & codar.substring(0,aumento2).length==47) {
    setTimeout(function(){
      alert("Sucesso! Sua quarta tag html é o title que define o título da sua página. Aperte ENTER para continuar.")
  },300);
  var audio = new Audio(
    'Audiosbc/abretitle.m4a');
    audio.play();
}}

if (tecla==atual){
  if (aumento2==71 & codar.substring(0,aumento2).length==71) {
    setTimeout(function(){
      alert("Sucesso! Você fechou a tag title, o título está definido. Aperte ENTER para continuar.")
  },300);
  var audio = new Audio(
    'Audiosbc/fechatitle.m4a');
    audio.play();
}}

if (tecla==atual){
  if (aumento2==78 & codar.substring(0,aumento2).length==78) {
    setTimeout(function(){
      alert("Sucesso! Você fechou a tag head, onde estão contidos os metadados da sua página (no momento o título). Aperte ENTER para continuar.")
  },300);
  var audio = new Audio(
    'Audiosbc/fechahead.m4a');
    audio.play();
}}

if (tecla==atual){
  if (aumento2==84 & codar.substring(0,aumento2).length==84) {
    setTimeout(function(){
      alert("Sucesso! Você abriu a tag body, onde o conteúdo da sua página ficará. Aperte ENTER para continuar.")
  },300);
  var audio = new Audio(
    'Audiosbc/bodyabre.m4a');
    audio.play();
}}

if (tecla==atual){
  if (aumento2==88 & codar.substring(0,aumento2).length==88) {
    setTimeout(function(){
      alert("Sucesso! Você abriu a tag h1, onde o título do corpo da sua página ficará. Aperte ENTER para continuar.")
  },300);
  var audio = new Audio(
    'Audiosbc/h1abre.m4a');
    audio.play();
}}

if (tecla==atual){
  if (aumento2==118 & codar.substring(0,aumento2).length==118) {
    setTimeout(function(){
      alert("Sucesso! Você fechou a tag h1, delimitando o título principal do corpo da sua página. Aperte ENTER para continuar.")
  },300);
  var audio = new Audio(
    'Audiosbc/fechah1.m4a');
    audio.play();
}}

if (tecla==atual){
  if (aumento2==121 & codar.substring(0,aumento2).length==121) {
    setTimeout(function(){
      alert("Sucesso! Você abriu a tag p, onde ficará um parágrafo. Aperte ENTER para continuar.")
  },300);
  var audio = new Audio(
    'Audiosbc/abrep.m4a');
    audio.play();
}}

if (tecla==atual){
  if (aumento2==134 & codar.substring(0,aumento2).length==134) {
    setTimeout(function(){
      alert("Sucesso! Você fechou a tag parágrafo. Aperte ENTER para continuar.")
  },300);
  var audio = new Audio(
    'Audiosbc/fechap.m4a');
    audio.play();
}}
if (tecla==atual){
  if (aumento2==141 & codar.substring(0,aumento2).length==141) {
    setTimeout(function(){
      alert("Sucesso! Você fechou a tag body. Aperte ENTER para continuar.")
  },300);
  var audio = new Audio(
    'Audiosbc/fechabody.m4a');
    audio.play();
}}
if (tecla==atual){
  if (aumento2==148 & codar.substring(0,aumento2).length==148) {
    setTimeout(function(){
      alert("Sucesso! Você fechou a tag html, concluindo sua página. Parabéns.")
  },300);
  document.getElementById("result").style.color = "black";
  var audio = new Audio(
    'Audiosbc/htmlfecha.m4a');
    audio.play();
}}
  

if (tecla.toLowerCase() == atual.toLowerCase()) {
  aumento1++;
  aumento2++;
  document.getElementById("codigo").style.backgroundColor = "#CDF5C1";
  
}

else if(tecla == 'Shift' || tecla == 'Enter' || tecla == 'Control' || tecla == 'Tab' || tecla == 'Dead' || tecla == 'CapsLock' || tecla == 'Insert' || tecla == 'AudioVolumeUp' || tecla == 'AudioVolumeDown' || tecla == 'AudioVolumeMute' || tecla == 'Alt'){
}

  else{
    document.getElementById("codigo").style.backgroundColor = "#FAD1CE";
    event.preventDefault();
  }

  setTimeout(function(){
    if (tecla != 'Shift' && tecla !='Dead' && tecla != 'Control' && tecla != 'CapsLock' && tecla != 'Insert' && tecla != 'AudioVolumeUp' && tecla != 'AudioVolumeDown' && tecla != 'AudioVolumeMute' && tecla != 'Alt' && tecla != 'Tab' ) {
    
  
      switch (codar.substring(aumento1,aumento2)) {

        case '1':
          var audio = new Audio(
            'Audiosbc/n1.m4a');
            audio.play();
          break;

        case '/':
          var audio = new Audio(
            'Audiosbc/barra.m4a');
            audio.play();
          break;
        
        case '<':
          var audio = new Audio(
            'Audiosbc/Menor que.m4a');
            audio.play();
          break;
    
          case '>':
          var audio = new Audio(
            'Audiosbc/Maior que.m4a');
            audio.play();
          break;
    
          case '!':
          var audio = new Audio(
            'Audiosbc/Exclamação.m4a');
            audio.play();
          break;
    
          case 'a':
          var audio = new Audio(
            'Audiosbc/1.m4a');
            audio.play();
          break;
    
          case 'b':
          var audio = new Audio(
            'Audiosbc/1 (1).m4a');
            audio.play();
          break;
    
          case 'c':
          var audio = new Audio(
            'Audiosbc/1 (2).m4a');
            audio.play();
          break;
    
          case 'd':
          var audio = new Audio(
            'Audiosbc/1 (3).m4a');
            audio.play();
          break;
    
          case 'e':
          var audio = new Audio(
            'Audiosbc/1 (4).m4a');
            audio.play();
          break;
    
          case 'f':
          var audio = new Audio(
            'Audiosbc/1 (5).m4a');
            audio.play();
          break;
    
          case 'g':
          var audio = new Audio(
            'Audiosbc/1 (6).m4a');
            audio.play();
          break;
    
          case 'h':
          var audio = new Audio(
            'Audiosbc/1 (7).m4a');
            audio.play();
          break;
    
          case 'i':
          var audio = new Audio(
            'Audiosbc/1 (8).m4a');
            audio.play();
          break;
    
          case 'j':
          var audio = new Audio(
            'Audiosbc/1 (9).m4a');
            audio.play();
          break;
    
          case 'k':
          var audio = new Audio(
            'Audiosbc/1 (10).m4a');
            audio.play();
          break;
    
          case 'l':
          var audio = new Audio(
            'Audiosbc/1 (11).m4a');
            audio.play();
          break;
    
          case 'm':
          var audio = new Audio(
            'Audiosbc/1 (12).m4a');
            audio.play();
          break;
    
          case 'n':
          var audio = new Audio(
            'Audiosbc/1 (13).m4a');
            audio.play();
          break;
    
          case 'o':
          var audio = new Audio(
            'Audiosbc/1 (14).m4a');
            audio.play();
          break;
    
          case 'p':
          var audio = new Audio(
            'Audiosbc/1 (15).m4a');
            audio.play();
          break;
    
          case 'q':
          var audio = new Audio(
            'Audiosbc/1 (16).m4a');
            audio.play();
          break;
    
          case 'r':
          var audio = new Audio(
            'Audiosbc/1 (17).m4a');
            audio.play();
          break;
    
          case 's':
          var audio = new Audio(
            'Audiosbc/1 (18).m4a');
            audio.play();
          break;
    
          case 't':
          var audio = new Audio(
            'Audiosbc/1 (19).m4a');
            audio.play();
          break;
    
          case 'u':
          var audio = new Audio(
            'Audiosbc/1 (20).m4a');
            audio.play();
          break;
    
          case 'v':
          var audio = new Audio(
            'Audiosbc/1 (21).m4a');
            audio.play();
          break;
    
          case 'w':
          var audio = new Audio(
            'Audiosbc/1 (22).m4a');
            audio.play();
          break;
    
          case 'x':
          var audio = new Audio(
            'Audiosbc/1 (23).m4a');
            audio.play();
          break;
    
          case 'y':
          var audio = new Audio(
            'Audiosbc/1 (24).m4a');
            audio.play();
          break;
    
          case 'z':
          var audio = new Audio(
            'Audiosbc/1 (25).m4a');
            audio.play();
          break;
    
          case ' ':
          var audio = new Audio(
            'Audiosbc/Espaço.m4a');
            audio.play();
          break;
  
          case '"':
          var audio = new Audio(
            'Audiosbc/Aspas.m4a');
            audio.play();
          break;
  
          case '-':
          var audio = new Audio(
            'Audiosbc/Hifen.m4a');
            audio.play();
          break;
  
          case '=':
          var audio = new Audio(
            'Audiosbc/Igual.m4a');
            audio.play();
          break;
  
          case '8':
          var audio = new Audio(
            'Audiosbc/8.m4a');
            audio.play();
          break;

          case 'é':
          var audio = new Audio(
            'Audiosbc/agudoe.m4a');
            audio.play();
          break;

          case 'í':
          var audio = new Audio(
            'Audiosbc/agudoi.m4a');
            audio.play();
          break;

          case 'á':
          var audio = new Audio(
            'Audiosbc/agudoa.m4a');
            audio.play();
          break;
      
        default:
          break;
      }
    }
},300);

  }
}

function irParaCodigo() { setTimeout(function(){
  switch (codar.substring(aumento1,aumento2)) {

    case '1':
      var audio = new Audio(
        'Audiosbc/n1.m4a');
        audio.play();
      break;

    case '/':
      var audio = new Audio(
        'Audiosbc/barra.m4a');
        audio.play();
      break;
    
    case '<':
      var audio = new Audio(
        'Audiosbc/Menor que.m4a');
        audio.play();
      break;

      case '>':
      var audio = new Audio(
        'Audiosbc/Maior que.m4a');
        audio.play();
      break;

      case '!':
      var audio = new Audio(
        'Audiosbc/Exclamação.m4a');
        audio.play();
      break;

      case 'a':
      var audio = new Audio(
        'Audiosbc/1.m4a');
        audio.play();
      break;

      case 'b':
      var audio = new Audio(
        'Audiosbc/1 (1).m4a');
        audio.play();
      break;

      case 'c':
      var audio = new Audio(
        'Audiosbc/1 (2).m4a');
        audio.play();
      break;

      case 'd':
      var audio = new Audio(
        'Audiosbc/1 (3).m4a');
        audio.play();
      break;

      case 'e':
      var audio = new Audio(
        'Audiosbc/1 (4).m4a');
        audio.play();
      break;

      case 'f':
      var audio = new Audio(
        'Audiosbc/1 (5).m4a');
        audio.play();
      break;

      case 'g':
      var audio = new Audio(
        'Audiosbc/1 (6).m4a');
        audio.play();
      break;

      case 'h':
      var audio = new Audio(
        'Audiosbc/1 (7).m4a');
        audio.play();
      break;

      case 'i':
      var audio = new Audio(
        'Audiosbc/1 (8).m4a');
        audio.play();
      break;

      case 'j':
      var audio = new Audio(
        'Audiosbc/1 (9).m4a');
        audio.play();
      break;

      case 'k':
      var audio = new Audio(
        'Audiosbc/1 (10).m4a');
        audio.play();
      break;

      case 'l':
      var audio = new Audio(
        'Audiosbc/1 (11).m4a');
        audio.play();
      break;

      case 'm':
      var audio = new Audio(
        'Audiosbc/1 (12).m4a');
        audio.play();
      break;

      case 'n':
      var audio = new Audio(
        'Audiosbc/1 (13).m4a');
        audio.play();
      break;

      case 'o':
      var audio = new Audio(
        'Audiosbc/1 (14).m4a');
        audio.play();
      break;

      case 'p':
      var audio = new Audio(
        'Audiosbc/1 (15).m4a');
        audio.play();
      break;

      case 'q':
      var audio = new Audio(
        'Audiosbc/1 (16).m4a');
        audio.play();
      break;

      case 'r':
      var audio = new Audio(
        'Audiosbc/1 (17).m4a');
        audio.play();
      break;

      case 's':
      var audio = new Audio(
        'Audiosbc/1 (18).m4a');
        audio.play();
      break;

      case 't':
      var audio = new Audio(
        'Audiosbc/1 (19).m4a');
        audio.play();
      break;

      case 'u':
      var audio = new Audio(
        'Audiosbc/1 (20).m4a');
        audio.play();
      break;

      case 'v':
      var audio = new Audio(
        'Audiosbc/1 (21).m4a');
        audio.play();
      break;

      case 'w':
      var audio = new Audio(
        'Audiosbc/1 (22).m4a');
        audio.play();
      break;

      case 'x':
      var audio = new Audio(
        'Audiosbc/1 (23).m4a');
        audio.play();
      break;

      case 'y':
      var audio = new Audio(
        'Audiosbc/1 (24).m4a');
        audio.play();
      break;

      case 'z':
      var audio = new Audio(
        'Audiosbc/1 (25).m4a');
        audio.play();
      break;

      case ' ':
      var audio = new Audio(
        'Audiosbc/Espaço.m4a');
        audio.play();
      break;

      case '"':
      var audio = new Audio(
        'Audiosbc/Aspas.m4a');
        audio.play();
      break;

      case '-':
      var audio = new Audio(
        'Audiosbc/Hifen.m4a');
        audio.play();
      break;

      case '=':
      var audio = new Audio(
        'Audiosbc/Igual.m4a');
        audio.play();
      break;

      case '8':
      var audio = new Audio(
        'Audiosbc/8.m4a');
        audio.play();
      break;

      case 'é':
      var audio = new Audio(
        'Audiosbc/agudoe.m4a');
        audio.play();
      break;

      case 'í':
      var audio = new Audio(
        'Audiosbc/agudoi.m4a');
        audio.play();
      break;

      case 'á':
      var audio = new Audio(
        'Audiosbc/agudoa.m4a');
        audio.play();
      break;
  
    default:
      break;
  }},6000);
  document.getElementById("codigo").focus();
  var audio = new Audio(
    'Audiosbc/Passoapasso.m4a');
    audio.play();
}

function reset() {
  document.getElementById("codigo").focus();
  aumento1=0, aumento2=1;
  document.getElementById("codigo").value='';
}

function funcexecut() {
  if (aumento2==149 & codar.substring(0,aumento2).length==148) {
    window.open('result-page.html', '_blank');
  } else {
    alert("Complete o código antes de executar.")
  
  }
}

function alertentrar(){
  alert("No momento, nossa aplicação é livre para usar, sem necessidade de login.")
}

function news(){
  alert("A função de notificação por e-mail será implementada em breve.")
}