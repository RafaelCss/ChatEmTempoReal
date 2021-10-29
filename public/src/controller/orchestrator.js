
class Orchestrator  {

    static async sendMessage(data){

        let response = {
            status: 200,
            data: data
        };

        return response;

    }

    static async receiveData (data){

        let response = {
            status: 200,
            data: data
        };

        return response;

    }

    static async sendError (error){

        let response = {
            status: 500,
            error: error
        };

        return response;

    }



}


export default Orchestrator;