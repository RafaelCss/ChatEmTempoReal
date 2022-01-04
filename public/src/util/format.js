class Format {
  static getCamelCase(text) {
    // Converte em Camel Case
    let div = document.createElement("div");

    div.innerHTML = `<div data-${text}="id"></div>`;

    return Object.keys(div.firstChild.dataset)[0];
  }

  static transformToDate(date) {
    // transforma a data em formato de data
    let newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${day}/${month}/${year}`;
  }

  static transformToTime(date) {
    // transforma a data em formato de data
    let newDate = new Date(date);
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();

    return `${hour}:${minute}`;
  }
  
}

export default Format;
