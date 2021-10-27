// formulario de cadastro de usuario
// ============================================================


class FormCad {

    constructor (){
     this.dataformcad()            

    }

    dataformcad () { // pega todas as informações do formlario de cadastro

            const dataUser = {}
    addEventListener('submit', (e) => {
            document.querySelectorAll("#cadastro").forEach(element =>{

            dataUser[Format.getCamelCase(element.id)] = element.value

        })
            console.log(dataUser)
    })

}       

}