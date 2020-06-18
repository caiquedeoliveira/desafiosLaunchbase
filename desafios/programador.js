
const empresa = {
    name: 'Rocketseat',
    color: 'Roxo',
    focus: 'Programação',
    address: {
        street: "Rua Guilherme Gemballa",
        number: "260"
    }
}

console.log(`A empresa ${empresa.name} está localizada em ${empresa.address.street}, ${empresa.address.number}`)

const programador = {
    nome: 'Caique',
    idade: '23',
    tecnologias: [
        {nome: 'JavaScript', especialidade: 'Web/Mobile' },
        {nome: 'Python', especialidade: 'Data Science'},
        {nome: 'C++', especialidade: 'Desktop'}
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade} `)