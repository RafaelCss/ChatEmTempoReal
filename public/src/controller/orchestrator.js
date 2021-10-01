class Orchestrator {

    static receiveData (socket){

        const idUser = socket;

        console.log('User conectado :', idUser)

    }

    static receiveMsg (msg){

        const dataMsg = msg;

        console.log('User conectado :', dataMsg)
        
    }





}


export default Orchestrator