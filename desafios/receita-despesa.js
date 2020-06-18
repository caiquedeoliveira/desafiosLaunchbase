
const usuarios = [
    {
        nome: "Caique",
        receitas: [100, 20, 80],
        despesas: [50, 15]
    },
    {
        nome: "Diego",
        receitas: [200, 100, 300],
        despesas: [50, 300]
    },
    {
        nome: "Mayk",
        receitas: [300, 200, 200],
        despesas: [40, 160]
    },
    {
        nome: "Novo usuário",
        receitas: [800, 300, 560],
        despesas: [1000, 2300]
    }
];

for (let i = 0; i < usuarios.length; i++){
    const receita = usuarios[i].receitas.reduce((acc,cur) => {
        return acc + cur
    })
    const despesa = usuarios[i].despesas.reduce((acc, cur) => {
        return acc + cur
    })
    const total = receita - despesa
    if (total > 0) {
        console.log(`O usuário ${usuarios[i].nome} possui saldo POSITIVO de ${total.toFixed(2)}`)
    } else {
        console.log(`O usuário ${usuarios[i].nome} possui saldo NEGATIVO de ${total.toFixed(2)}`)
    }
}