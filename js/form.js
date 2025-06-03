
// Classe contato com todos os campos do formulário
class contato {
    constructor(nome, email, cpf, sobrenome, telefone, tipoContato) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.sobrenome = sobrenome;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
    }
}

// Função que captura os dados do formulário e cria um objeto
function Post(event, form) {
    event.preventDefault(); // Impede o recarregamento da página

    // Captura dos dados pelos names definidos no HTML
    const nome = form.elements.namedItem("nome").value;
    const email = form.elements.namedItem("email").value;
    const cpf = form.elements.namedItem("cpf").value;
    const sobrenome = form.elements.namedItem("sobrenome").value;
    const telefone = form.elements.namedItem("telefone").value;
    const tipoContato = form.elements.namedItem("contato").value;

    // Criação do objeto com os dados
    const dadosContato = new contato(nome, email, cpf, sobrenome, telefone, tipoContato);

    // Para testes: mostrar dados no console
    console.log("Dados do formulário:", dadosContato);

    // Chamada da função para dar feedback ao usuário
    Enviar(dadosContato);

    return false; // Garante que o form não será enviado/recarregado
}

// Função que mostra alerta com nome do usuário
function Enviar(data) {
    if (data.nome !== "") {
        alert(`Obrigado sr(a) ${data.nome}, os seus dados foram encaminhados com sucesso.`);
    } else {
        alert("Por favor, preencha o campo Nome.");
    }
}
