class Orchestrator  {

    constructor(date,msg, id){

        this.sendMessage(date, msg, id)

    }
    static async receiveData (data){

        const idUser = data
        const dataUser = JSON.stringify(idUser)
        console.log('User conectado :', dataUser)

/*         await User.create({
                url: 'http://localhost:3000/messagechat/',
                name :"Rafael",
                email : "dataUser.msg",
                password: "12358"
                  })
 */
}

    static async receiveMsg (data){

/*         const dataMsg = data;
        console.log('User conectado :', dataMsg) */

    }


 sendMessage(date,msg, id) {

     
     
    
    }


}


export default Orchestrator;