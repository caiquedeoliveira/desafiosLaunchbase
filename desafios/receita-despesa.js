
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

const soma = (acc,cur) => acc + cur;

for (usuario of usuarios){
    const receita = usuario.receitas.reduce(soma);
    const despesa = usuario.despesas.reduce(soma);
    const total = receita - despesa;

    console.log(`O usuário ${usuario.nome} possui saldo de ${total.toFixed(2)}`);
}
