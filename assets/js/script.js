function fecha(){
  const dias =["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses =["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const divFecha = document.querySelector('#fechaActual');
  const nuevoP = document.createElement('p');
  divFecha.appendChild(nuevoP);

  function mostrarFecha(){
  const fechaHoy = new Date();

  //Obtener Fecha
  const diaSemana = dias[fechaHoy.getDay()];
  const dia = fechaHoy.getDate();
  const mes = meses[fechaHoy.getMonth()];
  const anio = fechaHoy.getFullYear();

  //Obtener Hora
  let hora = fechaHoy.getHours();
  let minutos = fechaHoy.getMinutes();
  let segundos = fechaHoy.getSeconds();

  if (hora < 10) hora = '0' + hora;
  if (minutos < 10) minutos = '0' + minutos;
  if (segundos <10) segundos = '0' + segundos;

  nuevoP.textContent = `${diaSemana}, ${dia} de ${mes} de ${anio}. ${hora}:${minutos}:${segundos}` 
  }
  mostrarFecha();

  setInterval(mostrarFecha, 1000);
}
fecha();

//agregar clases de animate.css

$('.card-img-top').hover(
  function(){
    $(this).addClass("animate__animated animate__pulse");
  },
  function(){
    $(this).removeClass("animate__animated animate__pulse")
  }
);