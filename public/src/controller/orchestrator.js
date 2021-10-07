import User from "../../../server/models/Users.js";
class Orchestrator  {

    static receiveData (data){

        const idUser = data
        const dataUser = JSON.stringify(idUser)
        console.log('User conectado :', dataUser)

    }

    static receiveMsg (data){

        const dataMsg = msg;

        console.log('User conectado :', dataMsg)
        
        this.sendMessage(msg)
     const enviar = async () => await  User.create({
            name :'Rafael',
            email : 'rf208@minhabunda.com'
        })();
    }


    static sendMessage(msg) {

       

    }


}


export default Orchestrator;