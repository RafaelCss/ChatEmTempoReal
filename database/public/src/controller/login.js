import Orchestrator from './orchestrator.js'

class Login {
  // faz o login
  constructor(btnLogar, formLogar) {
    this.dataLogin(btnLogar, formLogar)
  }

  //pega os dados do formulário
  async dataLogin(btnLogar, formLogar) {
    // pega todas as informações do formulário de cadastro
    const form = document.querySelector(formLogar)
    console.log(formLogar)
    const btn = document.querySelector(btnLogar)
    const data = {}
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      ;[...form].forEach((form) => {
        data[form.name] = form.value
      })
      this.startLogin(data)
    })
  }

  // inicia o login
  async startLogin(data) {
    const { email_login, senha_login } = data
    const login = {
      email: email_login,
      password: senha_login,
    }
    const resposta = Orchestrator.logarUser(login)
    resposta
      .then((res) => {
        console.loh(res)
        if (res.status === 200) {
          localStorage.setItem('user', JSON.stringify(res))
          window.location.href = `http://localhost:3000/chat/${res.user}`
        } else {
          alert(res.message)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

export default Login
