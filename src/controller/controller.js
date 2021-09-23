
class InputsKey {

  constructor(){

    this.elementsProtoType();
    this.loadElements();
    //this.socketIo()
    this.addContact()

  }



loadElements(){ // Pegando todos os elementos pelo id da chat...
   this.dataClass = {};

     document.querySelectorAll('[id]').forEach(element =>{

      this.dataClass[Format.getCamelCase(element.id)] = element ;

          })
 
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
    Element.prototype.on = function(events, fn){  // on criando eventos de click
        events.split(' ').forEach(event =>{
          this.addEventListener(event, fn)
        })
    }
    

  }


addContact(){

    this.dataClass.addcontact.on('click', e =>{

      this.dataClass.contacts.hide()
      this.dataClass.contacts2.show()

    })


}







/* socketIo(){

  const socket = io()

    this.dataClass.submit.on('click', e =>{      
      e.preventDefault()
      if (this.textMessage.value) {
        socket.emit('chat message', this.textMessage.value);
        this.textMessage.value = '';
      }

    })

    socket.on('chat message', function(msg) {
      var item = document.createElement('li');
      item.textContent = msg;
      this.messages.appendChild(item);
     window.scrollTo(0, document.body.scrollHeight);
    });



  }  
 */






  }








