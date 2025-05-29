let plataforma = prompt(&quot;Escolha uma plataforma: CMD ou Linux? &quot;)
if (plataforma == &quot;CMD&quot; || plataforma == &quot;cmd&quot;){
console.log(&quot;modo CMD ativado&quot;)

let cmd = prompt(&quot;Qual comando do CMD você gostaria de saber mais? &quot;)
switch (cmd){
case&quot;dir&quot;:
console.log(&quot;É utilizado para listar arquivos e pastas dentro de um diretório&quot;)
break;

case &quot;move&quot;:
console.log(&quot;Esse comando é utilizado para mover um arquivo&quot;)
break;

case &quot;cd..&quot;:
console.log(&quot;O comando solicitado efetua o retorno para a pasta anterior&quot;)
break;

case &quot;del&quot;:
console.log(&quot;Ele é utilizado para apagar o arquivo&quot;)
break;

case &quot;mkdir&quot;:
console.log(&quot;Ele é usado para criar um diretório&quot;)
break;

case &quot;cd&quot;:
console.log(&quot;O comando socilitado efetua o acesso o diretório&quot;)
break;

case &quot;cls&quot;:
console.log(&quot;Esse comando é utilizado para limpar a tela do cmd&quot;)
break;

case &quot;echo&quot;:
console.log(&quot;Ele é usado para criar um arquivo&quot;)
break;

case &quot;copy&quot;:
console.log(&quot;Esse comando é utilizado para copiar um arquivo para um outro
diretório&quot;)
break;

case &quot;rmdir&quot;:
console.log(&quot;O comando solicitado serve para remover um diretório&quot;)
break;

case &quot;exit&quot;:
console.log(&quot;Esse comando é utilizado para fechar um terminal&quot;)
break;

default:
console.log(&quot;Código não indentificado&quot;)
}
}
else if (plataformas == &quot;linux&quot; || &quot;LINUX”)
 console.log(&quot;Modo linux ativado&quot;)
 
 let linux = prompt(&quot;Qual comando você gostaria de aprender?:&quot;)
switch (linux){

    
    case&quot;mkdir&quot;:
        console.log(&quot;Criar um diretórios&quot;)
        break;
    case&quot;ls&quot;:
        console.log(&quot;Acessar um diretório e verificar o que tem dentro&quot;)
        break;
      case&quot;cd&quot;:
      console.log(&quot;Entrar no diretório&quot;)
       break;
      case&quot;cd ..&quot;
      console.log(&quot;Voltar para o diretório&quot;)
      break;
      case&quot;Rm&quot;:
     console.log(&quot;Remover um diretório&quot;)
     break;
      case&quot;Clear&quot;:
     console.log(&quot;Limpar a tela do terminal&quot;)
     break;
      case&quot;Cp&quot;:
     console.log(&quot;Copiar um arquivo&quot;)
     break;
       case&quot;mv&quot;:
     console.log(&quot;Mover um arquivo para outro diretório&quot;)
     break;
      case&quot;cat&quot;:
     console.log(&quot;Ver o que tem dentro do arquivo&quot;)
     break;

       case&quot;echo&quot;:
     console.log(&quot;Exibir um texto no terminal&quot;)
     break;
default:
     console.log(&quot;código não encontrado&quot;)
}