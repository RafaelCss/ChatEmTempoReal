
class Orchestrator  {

    static async receiveData (data){

        const idUser = data
        const dataUser = JSON.stringify(idUser)
        console.log('User conectado :', dataUser)

       /*  await User.create(dataUser) */

    }


}


export default Orchestrator;