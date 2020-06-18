const usuarios = [ 
    { nome: "Caique", tecnologias: ["HTML", "CSS", "JavaScript"]},
    { nome: "Mayk", tecnologias: ["JavaScript", "Node.js"]},
    { nome: "Diego", tecnologias: ["React", "CSS", "React Native"]}
]

//Usuários e tecnologias
for(let usuario of usuarios){
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}


function checaCSS(usuario) {
    for(tecnologia of usuario.tecnologias)
      return usuario.tecnologias.indexOf('CSS') > -1 ? true : false
}


for (let i = 0; i < usuarios.length; i++){
   const usuarioCSS = checaCSS(usuarios[i])
   if (usuarioCSS == true) {
       console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
   }
}








