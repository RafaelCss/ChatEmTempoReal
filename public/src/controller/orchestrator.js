
class Orchestrator  {

    static async receiveData (data){

        const idUser = data
        const dataUser = JSON.stringify(idUser)
        console.log('User conectado :', dataUser)
/* 
        await User.create(dataUser) 
        .then(user => {
            console.log('User creado :', user)
        })  .catch(err => {
            console.log('Error :', err)
        })    */        

    }


}


export default Orchestrator;