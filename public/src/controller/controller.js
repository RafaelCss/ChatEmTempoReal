class InputsKey  {

  constructor(){
 
    this.elementsProtoType();
    this.loadElements();
    this.addcontact()
    this.inputEventMsg()
    this.eventPhotoProfile();  
    this.settings()
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


addcontact(){  //eventos de div configuração e add contatos

      this.dataClass.addcontact.on('click', e =>{ // Click Div addcontatos..
        this.dataClass.contacts.toggle()
         //criar uma div  que contem espaços para adicionar contatos

          this.dataClass.contacts.innerHTML = `     
          <div class="contact-add">   
          <input type="text" placeholder="Nome" id="contact-name">
          <input type="text" placeholder="Email" id="contact-email">  
          <button id="contact-add">Adicionar</button>   
          </div>  `
      })

  }

  settings(){ // alterar as  confirações.

      this.dataClass.settings.on('click', fn=>{  // Click Div div confirações..
        this.dataClass.contacts.toggle()  
        
          this.dataClass.contacts.innerHTML = `         
          <div class="settings-add">   
          <input type="text" placeholder="Nome" id="settings-name">
          <input type="text" placeholder="Email" id="settings-email">
          <input type="text" placeholder="Senha" id="settings-password"> 
          <label for="settings-photo">Escolher foto do Perfil: </label>
          <input type="file" name="photo-settings" id="photo-settings" style = "display :">     
          <button type="submit" id="settings-add">Salvar</button>   
          </div>  `               

      })
    
  }
  
  inputEventMsg(){  // evento de enviar mensagem
      const socket = io()
  
                  
        this.dataClass.submit.on('click keypress',  e => {
        
               e.preventDefault();
               const input = this.dataClass.textMessage

               /*  const dtaPhoto = this.dataClass.profileImg
                const renderPhoto = new FileReader()
                const myPhoto =  renderPhoto.readAsDataURL(dtaPhoto) */
               
              
               const dataUser = {
                  name: this.dataClass.name,
                  message: this.dataClass.profileImg.src,
                  photo:myPhoto,
                  data: new Date().getDay('DD')+ '/' + new Date().getMonth('MM') + '/' + new Date().getFullYear('YY'),
                  time: new Date().getHours() + ":" + new Date().getMinutes(),
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
                      <div class='date'>  ${dataUser.data} </div>                    
                      <div class='msg-photo'> <img src=${dataUser.photo} alt='foto'></div>
                      <div id ='msgss'><strong>${dataUser.name}: </strong>${dataUser.message} -${(dataUser.time)}</div>
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


eventPhotoProfile(){ // evento de carregar  foto de perfil

         this.dataClass.myPhoto.on("click", fn =>{  // clica na div foto de perfil
           this.dataClass.photo.click()  // add foto de perfil
      const {photo} = this.dataClass  // pega o valor do input photo
    
      photo.on('change', e =>{  // quando eu clico em add foto..    
        const file = photo.files[0] // pego o arquivo  
        const reader = new FileReader() // crio um leitor de arquivo    

        reader.onload = e =>{ // quando eu ler o arquivo.. 

          this.dataClass.profileImg.src = e.target.result // eu pego o arquivo e faço o upload

        } 

        reader.readAsDataURL(file) // faço o upload

      })    
    
  })
  
}


}

