/*
Orientações: Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos usuarios como expirado sendo true.

Desafio:
Construa uma função de para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. A função deve dizer que as credenciais expiraram caso expirado for true. A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.

Testes:
Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.

Exemplo:
fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais

Entrega:
Suba seu código no Github e entregue o link até o dia 10 de maio às 23:59:59. 
*/

const usuarios = [
    {
        id: 1,
        nome: 'Airton Senna',
        email: 'asenna@gmail.com',
        senha: 'Senna@tri',
        expirado: false
    },
    {
        id: 2,
        nome: 'Maria da Silva',
        email: 'maria@gmail.com',
        senha: '12345',
        expirado: false
    },
    {
        id: 3,
        nome: 'Camila Silvestre',
        email: 'csilvestre@gmail.com',
        senha: 'caSilvestre',
        expirado: false
    },
    {
        id: 4,
        nome: 'Antonio Souza',
        email: 'asouza@gmail.com',
        senha: 'souza123',
        expirado: true
    },
    {
        id: 5,
        nome: 'Bruna Godoy',
        email: 'brunagodoy@gmail.com',
        senha: 'godoy85',
        expirado: false
    }
]

export function realizarLogin(email, senha) {
    
    if (!email || email == '' || !senha || senha == '') {  
        throw new Error('É obrigatório informar Usuário e Senha');
    } 

    for (let i=0; i < usuarios.length; i++) {
        if (usuarios.at(i).email == email) {
            if (usuarios.at(i).senha == senha) {
                if (usuarios.at(i).expirado == true) {
                    return 'Renove suas credenciais';
                } else { 
                    return 'Login realizado com sucesso';
                }

                break;
            } else {
                return 'Senha incorreta';    
                break;
            }

        }    
    }

    return 'Usuário não encontrado';

}