import { realizarLogin } from "../src/gerenciarLogin.js";
import assert from 'node:assert';

const msgEsperadaObrigatoriedade = 'É obrigatório informar Usuário e Senha';

describe ('Testes da Login de Usuários', function() {
    it('Validar que passando email e senhas corretos o login seja realizado com sucesso', function() {
        //Pré-condições
        const paramEmail = 'asenna@gmail.com';
        const paramSenha = 'Senna@tri';
        const mensagemEsperada = 'Login realizado com sucesso';

        //Ações
        const resultado = realizarLogin(paramEmail, paramSenha);

        //Pós-condições
        assert.equal(resultado, mensagemEsperada);
    })

    it('Validar que o Usuário está com as credenciais expiradas', function() {
        //Pré-condições
        const paramEmail = 'asouza@gmail.com';
        const paramSenha = 'souza123';
        const mensagemEsperada = 'Renove suas credenciais';

        //Ações
        const resultado = realizarLogin(paramEmail, paramSenha);

        //Pós-condições
        assert.equal(resultado, mensagemEsperada);

    })

    it('Validar que ao informar um Usuario não cadastrado retorne mensagem de Usuário não encontrado', function() {
        //Pré-condições
        const paramEmail = 'teste@gmail.com';
        const paramSenha = '12345';
        const mensagemEsperada = 'Usuário não encontrado';

        //Ações
        const resultado = realizarLogin(paramEmail, paramSenha);

        //Pós-condições
        assert.equal(resultado, mensagemEsperada);

    })

    it('Validar que ao informar um Usuario não cadastrado retorne mensagem de Senha incorreta', function() {
        //Pré-condições
        const paramEmail = 'csilvestre@gmail.com';
        const paramSenha = 'casilvestre';
        const mensagemEsperada = 'Senha incorreta';

        //Ações
        const resultado = realizarLogin(paramEmail, paramSenha);

        //Pós-condições
        assert.equal(resultado, mensagemEsperada);

    })

    //Outros cenários
    it('Validar que se não informar o email exiba mensagem É obrigatório informar Usuário e Senha', function() {
        //Pré-condições
        let paramEmail; //inclui um let pois a const precisa ser inicializada no momento da sua declaração
        const paramSenha = '12345';
        
        //Ações e Pós-condições
        assert.throws(
            function() { realizarLogin(paramEmail, paramSenha);}, 
            {
                message: msgEsperadaObrigatoriedade
            }
        )

    })

    it('Validar que se informar o email como null exiba mensagem É obrigatório informar Usuário e Senha', function() {
        //Pré-condições
        const paramEmail = null; 
        const paramSenha = '12345';

        //Ações e Pós-condições
        assert.throws(
            function() { realizarLogin(paramEmail, paramSenha);}, 
            {
                message: msgEsperadaObrigatoriedade
            }
        )

    })

    it('Validar que se informar o email como uma string vazia exiba mensagem É obrigatório informar Usuário e Senha', function() {
        //Pré-condições
        const paramEmail = '';
        const paramSenha = '12345';

        //Ações e Pós-condições
        assert.throws(
            function() { realizarLogin(paramEmail, paramSenha);}, 
            {
                message: msgEsperadaObrigatoriedade
            }
        )

    })

    it('Validar que se não informar a senha exiba mensagem É obrigatório informar Usuário e Senha', function() {
        //Pré-condições
        const paramEmail = 'asenna@gmail.com'; 

        //Ações e Pós-condições
        assert.throws(
            function() { realizarLogin(paramEmail);}, 
            {
                message: msgEsperadaObrigatoriedade
            }
        )

    })

    it('Validar que se informar a Senha como null exiba mensagem É obrigatório informar Usuário e Senha', function() {
        //Pré-condições
        const paramEmail = 'asenna@gmail.com'; 
        const paramSenha = null;

        //Ações e Pós-condições
        assert.throws(
            function() { realizarLogin(paramEmail, paramSenha);}, 
            {
                message: msgEsperadaObrigatoriedade
            }
        )

    })

    it('Validar que se informar a Senha como uma string vazia exiba mensagem É obrigatório informar Usuário e Senha', function() {
        //Pré-condições
        const paramEmail = 'asenna@gmail.com';
        const paramSenha = '';

        //Ações e Pós-condições
        assert.throws(
            function() { realizarLogin(paramEmail, paramSenha);}, 
            {
                message: msgEsperadaObrigatoriedade
            }
        )

    })

    it('Validar que se não informar Usuário e Senha exiba mensagem É obrigatório informar Usuário e Senha', function() {
        //Ações e Pós-condições
        assert.throws(
            function() { realizarLogin();}, 
            {
                message: msgEsperadaObrigatoriedade
            }
        )

    })

})