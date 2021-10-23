class InputsKey{

  constructor(){
    this.elementsProtoType();
    this.loadElements();
    this.initEvents()
    this.inputEventMsg()
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
        return this;
    }
    Element.prototype.show = function(){  // showw aparece
        this.style.display = 'block'
        return this;
    }
    Element.prototype.toggle = function(){  // toggle se apaecer esconde , se escodeu aparece
        this.style.display = (this.style.display === 'none') ? 'block' : 'none';
        return this;  
    }
    Element.prototype.on = function(events, fn){  // on criando eventos de click
        events.split(' ').forEach(event =>{
          this.addEventListener(event, fn)
        })
        return this;
    }

    Element.prototype.css = function(style){  // posso criar um objeto com definiçoes css
      for(let name in styles){
        this.style[name] = styles[name]
      }
      return this
    }
    
    Element.prototype.addClass = function(name){ // adiciono uma classe com esse métodp
      this.classList.add(name)
      return this
    }

    Element.prototype.removeClass = function(name){ // removo uma classe com esse métodp
      this.classList.remove(name)
      return this
    }

    Element.prototype.toggleClass = function(name){ // se uma classe eu tiro 
      this.classList.toggle(name)
      return this
    }
    Element.prototype.hasClass = function(name){ // se uma classe eu tiro 
      return this.classList.contains(name)
  
    }
  }


initEvents(){  //eventos de div configuração e add contatos

      this.dataClass.addcontact.on('click', e =>{ // Click Div addcontatos..
        this.dataClass.contacts.toggle()
      })

      this.dataClass.settings.on('click', fn=>{  // Click Div div confirações..
        this.dataClass.contacts.toggle()

      })

      this.dataClass.profileImg.on("click", fn =>{  // add foto

        this.dataClass.photo.click()

      })

 }


inputEventMsg(){  // evento de enviar mensagem
    const socket = io()
    

                
      this.dataClass.submit.on('click keypress',  e => {
             e.preventDefault();
             const input = this.dataClass.textMessage
      
             const dataUser = {
                name: "Rafael Carlos",
                message: input.value,
                photo: this.dataClass.photo.value,
                time: new Date().getTime(),
                id: socket.id
             }   
                
              if(input.value){
               socket.emit('chat message', dataUser)
                 input.value = '';
            }
      
           const messages = this.dataClass.messages

            socket.on('chat message',  (dataUser) => {
                messages.innerHTML +=`
                  <div id='msguser'> 
                  <div id ='msgss'><strong>${dataUser.name}: </strong>${dataUser.msg} -${dataUser.date}</div>
                  </div>       
              `
           window.scrollTo(0, document.body.scrollHeight);

             });
     
        })

   this.dataClass.textMessage.on('keypress' , e =>{ // enviar mensagem com enter
          if(e.key === 'Enter'){
        this.dataClass.submit.click()
            }
      }) 
  } 



  
}







