class Format {
                                   
    static getCamelCase(text){ // Converte em Camel Case

        let div = document.createElement('div')

        div.innerHTML = `<div data-${text}="id"></div>`

        return Object.keys(div.firstChild.dataset)[0];

    }


}

export default Format;