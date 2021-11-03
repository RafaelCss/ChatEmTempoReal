import Orchestrator from './orchestrator.js'

class Login  {

     constructor (btnLogar, formLogar){

         this.dataLogin(btnLogar, formLogar);
  
                         
     }
 
     
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

startLogin(data){
   const {email_login, senha_login} = data;

   const login = {

         email: email_login,
         password: senha_login
   }
   
   console.log(login)

   const response = Orchestrator.logarUser(login)
}
    

}

export default Login