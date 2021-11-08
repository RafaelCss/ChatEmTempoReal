import InputsKey from "./controller.js";

    const urlCadastro = 'http://localhost:3333/cadastro';
    const urlLogin = 'http://localhost:3333/login';
    const urlChat = 'http://localhost:3333/chat';
class Orchestrator {

    
// static async cadastrarUser (user){ //user = {nome, email, senha}
static async cadatroUser(user){
        
    const response = await fetch(urlCadastro, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)

    }).then(response =>{

        const data = response.json()

        return data
      
        }).catch(err =>{

        const erro = err.json()

        return erro
            
        });   

      return response
    }

 static async logarUser (login){ //login = {email, senha} e retorna o nome do usuário e email.
        try {
            const response = await fetch(urlLogin, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(login)
                       })

            const data = await response.json()        
            return data

          } catch (error) {

            console.error(error)

        }
    

    }


 

 static async dataProcessing (data){ // tratando os dados de login
    const url = data
    try {
        const response = await fetch(`${urlChat}/${url}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
         
        })

        const data = await response.json()        
        return data

      } catch (error) {

        console.error(error)

    }

} 

}
export default Orchestrator