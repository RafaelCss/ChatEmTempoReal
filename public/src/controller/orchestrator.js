import User from "../../../server/models/Users.js";
class Orchestrator  {

    static async receiveData (data){

        const idUser = data
        const dataUser = JSON.stringify(idUser)
        console.log('User conectado :', dataUser)

        await User.create({
                name :"Rafael",
                email : "dataUser.msg",
                password: "12358"
                  })

}

    static async receiveMsg (data){

        const dataMsg = data;
        console.log('User conectado :', dataMsg)

    }


    static sendMessage(msg) {

       

    }


}


export default Orchestrator;