
class InputsKey {

  constructor(){

    this.socketIo()
    this.elementsProtoType();
    this.loadElements();

  }



loadElements(){ // Pegando todos os elementos da chat...

   this.dataClass = {};

     document.querySelectorAll('[id]').forEach(element =>{

      this.dataClass[Format.getCamelCase(element.id)] = element ;

       return this.dataClass

          })

          this.socketIo(this.dataClass)
  }

elementsProtoType(){ //Elementos para ajudar nas criações dos eventos ...

    Element.prototype.hide = function(){  // hide esconde
        this.style.display = 'none'
    }
    Element.prototype.show = function(){  // showw aparece
        this.style.display = 'block'
    }
    Element.prototype.toggle = function(){  // toggle se apaecer esconde , se escodeu aparece
        this.style.display = (this.style.display === 'none') ? 'block' : 'none';
    }

    

  }

socketIo(data){

    

  }  







  }








