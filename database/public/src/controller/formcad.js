import Orchestrator from './orchestrator.js'
class FormCad {
  constructor(btnCadastrar, formCadastro) {
    this.dataFormCad(btnCadastrar, formCadastro)
  }

  dataFormCad(btnCadastrar, formCadastro) {
    // pega todas as informações do formulário de cadastro
    this.btn = document.querySelector(btnCadastrar)
    this.formCadastro = document.querySelector(formCadastro)
    const data = {}
    this.btn.addEventListener('click', (e) => {
      e.preventDefault()
      ;[...this.formCadastro].forEach((form) => {
        console.log(form)
        data[form.name] = form.value
      })

      this.edit(data)
    })
  }

  async edit(data) {
    // edita o cadastro
    // editar
    const { email_cad, nome_cad, senha_cad } = data

    const user = {
      email: email_cad,
      name: nome_cad,
      password: senha_cad,
    }
    const response = await Orchestrator.cadatroUser(user)
    console.log(response)
    response
      .then((res) => {
        if (res.status == 200) {
          alert('Cadastro realizado com sucesso')
        }
        if (res.status == 400) {
          alert('Email já cadastrado')
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
}

export default FormCad
