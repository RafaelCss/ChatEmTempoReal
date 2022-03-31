//passar a responsabilidade do servidor entregar caminho
const urlCadastro = "http://localhost:3333/cadastro";
const urlLogin = "http://localhost:3333/login";
const urlChat = "http://localhost:3333/chat";
const messageUrl = "http://localhost:3333/message";

//*******
class Orchestrator {
  // static async cadastrarUser (user){ //user = {nome, email, senha}
  static async cadatroUser(user) {
    const resposta = await fetch(urlCadastro, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        const data = res.json();
        console.log(data);
        return data;
      })
      .catch((err) => {
        const erro = err.json();

        return erro;
      });

    return resposta;
  }

  static async logarUser(login) {
    //login = {email, senha} e retorna o nome do usuário e email.
    const response = await fetch(urlLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((response) => {
        const data = response.json();

        return data;
      })
      .catch((err) => {
        const erro = err.json();

        return erro;
      });

    return response;
  }

  static async dataProcessing(data) {
    // tratando os dados de login
    const url = data;
    try {
      const response = await fetch(`${urlChat}/${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  static async salveMessage(message) {
    // Salvando as messagens no banco de dados
    try {
      const response = await fetch(`${urlChat}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  } // fim da função

  static async deleteMessage(message) {
    // deletando as messagens no banco de dados
    try {
      const response = await fetch(`${urlChat}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  } // fim da função

  static async bringMessage(emaildata) {
    // trazer as messagens
    const { email } = emaildata;
    try {
      const response = await fetch(`${messageUrl}/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  } // fim da função
}
export default Orchestrator;
