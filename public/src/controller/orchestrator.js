
class Orchestrator {

 

static async cadatroUser(user){
        
    const response = await fetch('http://localhost:3333/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response =>{
        if(response.status === 200 ){
            return response.status;
        }else{
           console.log(response.status); 
                return  response.statusText
            }     
        }).catch(err =>{
            console.log(`Erro ao realizar requisição ${err, response}`);
        });
    /* .catch(err =>{ 
        console.log(err);
        if(err === 400){
        console.log('Erro 400')
        }
      })   */     

      return response
    }

 static async logarUser (login){

    const response = await fetch('http://localhost:3333/login', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response =>{
        if(response.status === 200 ){
            return response.status;
        }else{
           console.log(response.status); 
                return  response.statusText
            }     
        }).catch(err =>{
            console.log(`Erro ao realizar requisição ${err}`);
        });


    } 



}    
export default Orchestrator