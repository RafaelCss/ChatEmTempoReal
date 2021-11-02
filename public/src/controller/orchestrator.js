
class Orchestrator {

    constructor(user){
       this.cadatroUser(user)
    }
    

 async cadatroUser(user){
        
    const response = await fetch('http://localhost:3333/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => console.log(response))
    .catch(err => console.log(err))
            
    }

  async logarUser (){

    


    } 



}    
export default Orchestrator