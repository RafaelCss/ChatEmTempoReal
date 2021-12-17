import Orchestrator from "./orchestrator.js";

class Login {
  // faz o login
  constructor(btnLogar, formLogar) {
    this.dataLogin(btnLogar, formLogar);
  }

  //pega os dados do formulario
  dataLogin(btnLogar, formLogar) {
    // pega todas as informações do formlario de cadastro
    const btn = document.querySelector(btnLogar);
    const formLogar = document.querySelector(formLogar);
    const data = {};
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      [...formLogar].forEach((form) => {
        data[form.name] = form.value;
      });
      this.startLogin(data);
    });
  }

  // inicia o login
  async startLogin(data) {
    const { email_login, senha_login } = data;
    const login = {
      email: email_login,
      password: senha_login,
    };
    const response = Orchestrator.logarUser(login);
    response
      .then((res) => {
        if (res.status === 200) {
          window.location.href = `http://localhost:3000/chat/${res.user}`;
        } else {
          alert(res.message);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

export default Login;
