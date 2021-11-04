import Orchestrator from './orchestrator.js'
class Login  { // faz o login

     constructor (btnLogar, formLogar){

         this.dataLogin(btnLogar, formLogar);
  
                         
     }
 
     //pega os dados do formulario
    dataLogin(btnLogar,formLogar) { // pega todas as informações do formlario de cadastro
        
        this.btn = document.querySelector(btnLogar)

        this.formLogar = document.querySelector(formLogar)
        
        const data = {}

        this.btn.addEventListener('click', e =>{
            e.preventDefault();
        [...this.formLogar].forEach(form=>{

            data[form.name] = form.value

        })

        this.startLogin(data)
      })
    }
// inicia o login
 async startLogin(data){
   const {email_login, senha_login} = data;

   const login = {

         email: email_login,
         password: senha_login
   }
   
   const response =  Orchestrator.logarUser(login)

    response.then(res =>{

        if(res === 200){

            window.location.href = './chat.html'
        }
          }).catch(err =>{

          console.error(err)
             
         }) 
 

    }
    

}

export default Login