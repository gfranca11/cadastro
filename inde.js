let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#lw')

let nome = document.querySelector('#Nome')
let jnome = document.querySelector('#lNome')

let usuario = document.querySelector('#usuario')
let lusuario = document.querySelector('#lUsuario')



let senha= document.querySelector('#senha')
let lsenha = document.querySelector('#lSenha')


let comfirma = document.querySelector('#Corfimasenha')
let  lco = document.querySelector('#lCo')



nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    jnome.setAttribute('style', 'color: red')
    jnome.innerHTML = ' Nome * insira no minimo 3 caracteres '
    nome.setAttribute('style', 'border-color: red')
    
  } else { jnome.setAttribute('style', 'color: green')
  jnome.innerHTML = 'Nome'
  nome.setAttribute('style', 'border-color: green')

  }
}
  
  )

  usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4){
      lusuario.setAttribute('style', 'color: red')
      lusuario.innerHTML = ' Nome * insira no minimo 5 caracteres '
      usuario.setAttribute('style', 'border-color: red')
      
    } else { lusuario.setAttribute('style', 'color: green')
    lusuario.innerHTML = 'usuario'
    usuario.setAttribute('style', 'border-color: green')
  
    }
  }
    
    )
    senha.addEventListener('keyup', () => {
      if(senha.value.length <= 8){
        lsenha.setAttribute('style', 'color: red')
        lsenha.innerHTML = ' senha * insira no minimo 9 caracteres '
        senha.setAttribute('style', 'border-color: red')
        
      } else { lsenha.setAttribute('style', 'color: green')
      lsenha.innerHTML = 'senha'
      senha.setAttribute('style', 'border-color: green')
    
      }
    }
      
      )
      comfirma.addEventListener('keyup', () => {
        if(senha.value != comfirma.value){
          lco.setAttribute('style', 'color: red')
          lco.innerHTML = ' confirmar senha * As senhas nao conferem '
          confirma.setAttribute('style', 'border-color: red')
          
        } else { lco.setAttribute('style', 'color: green')
        lco.innerHTML = 'confirmar senha'
        confirma.setAttribute('style', 'border-color: green')
      
        }
      }
        
        )
  
  






function cadastrar (){
alert('Cadastrado com sucesso!')
    
}



btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    
    if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha.setAttribute('type', 'password')
    }
  })


  btnConfirm.addEventListener('click', ()=>{
    let ver = document.querySelector('#Corfimasenha')
    
    if(ver.getAttribute('type') == 'password'){
      ver.setAttribute('type', 'text')
    } else {
      ver.setAttribute('type', 'password')
    }
  })

 