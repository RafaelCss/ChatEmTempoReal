import Orchestrator from './orchestrator.js'
class FormCad  {

     constructor (btnCadastrar, formCadastro){

         this.dataformcad(btnCadastrar, formCadastro);
  
                         
     }
 
     
    dataformcad(btnCadastrar,formCadastro) { // pega todas as informações do formlario de cadastro
        
        this.btn = document.querySelector(btnCadastrar)

        this.formCadastro = document.querySelector(formCadastro)
        
        const data = {}

        this.btn.addEventListener('click', e =>{
            e.preventDefault();
        [...this.formCadastro].forEach(form=>{

            data[form.name] = form.value

        })
            
        this.edit(data)
      })
    }


async edit(data){ // edita o cadastro

        const {email_cad, nome_cad, senha_cad} = data

        const user = {
            email: email_cad,
            name: nome_cad,
            password: senha_cad
        }

    const response  =  Orchestrator.cadatroUser(user)
        response.then(res=>{
            console.log(res)
            if(res === 200){
                alert('Cadastro realizado com sucesso')
           
             } if(res === 'Bad Request'){
                alert('Email já cadastrado')
            }
        }).catch(err=>{
            console.log(err)
        })
    }

}   


export default FormCad