
class Orchestrator {

 
// static async cadastrarUser (user){ //user = {nome, email, senha}
static async cadatroUser(user){
        
    const response = await fetch('http://localhost:3333/cadastro', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response =>{
        if(response.status === 200 ){
            return response.status;
        }else{
         
                return  response.statusText
            }     
        }).catch(err =>{
            console.error(`Erro ao realizar requisição ${err, response}`);
        });   

      return response
    }

 static async logarUser (login){ //login = {email, senha}

    const response = await fetch(`http://localhost:3333/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(login)
    }).then(response =>{
        if(response.status === 200 ){
            return  200
        }else{
           console.log(response.status); 
                return  400
            }      
        }).catch(err =>{
            console.log(`Erro ao realizar requisição ${err}`);
        });
        this.dataProcessing(response);
    return response

    } 

    static async dataProcessing (response){ // tratando os dados de login

        console.log(response);





    }

}    
export default Orchestrator