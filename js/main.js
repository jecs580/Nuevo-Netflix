const carrusel=document.querySelector('.container-carrusel');
const movie= document.querySelectorAll('.movie');  
/*Con el metodo querySelectorAll obtenemos un array con cada elemento que tuviera la clase .movie */

const rightArrow=document.getElementById('right-arrow');
const leftArrow=document.getElementById('left-arrow');

// Event Listener para las Fechas
rightArrow.addEventListener('click',()=>{
 carrusel.scrollLeft+=carrusel.offsetWidth;  /* offsetWidth = Ancho del elemento*/
const activeIndicator=document.querySelector('.indicators .active');
if(activeIndicator.nextSibling){
    /*Preguntamos si el indicador activo tiene un indicador activo, que nos sirve como referencia para saber si se pueden mover a la derecha*/
    activeIndicator.nextSibling.classList.add('active');
    activeIndicator.classList.remove('active');
}
});
leftArrow.addEventListener('click',()=>{
 carrusel.scrollLeft-=carrusel.offsetWidth;
 const activeIndicator=document.querySelector('.indicators .active');
 if (activeIndicator.previousSibling) {
     /*Preguntamos si se devuelve el hermano anterior. */
    activeIndicator.previousSibling.classList.add('active');
    activeIndicator.classList.remove('active');
 }
});
// Paginacion
// movie es un array, con el metodo .length obtenenmos el tamaño del array.
const numberPages=Math.ceil(movie.length / 5);
for (let i = 0; i < numberPages; i++) {
    const indicador = document.createElement('button');
    if (i===0) {
        indicador.classList.add('active');
    }
    document.querySelector('.indicators').appendChild(indicador);
    indicador.addEventListener('click',(e)=>{
        carrusel.scrollLeft= i*carrusel.offsetWidth;
        document.querySelector('.indicators .active').classList.remove('active');
        e.target.classList.add('active');
    })
}

// Hove para cada pelicula
movie.forEach(m =>{
    m.addEventListener('mouseenter',(e)=>{
        const element =e.currentTarget; //Obtenemos el elemento al cual pasamos con el cursor
        setTimeout(()=>{
            movie.forEach(m => {
                m.classList.remove('hover') // Eliminamos la clase hover a todas las peliculas
            });
            element.classList.add('hover'); // Agregamos el hover al elemento que pasamos con el mouse
        },300);
    })
});

carrusel.addEventListener('mouseleave',() =>{
    // mouseleave sirve para detectar cuando saquemos el mouse del carrusel
    movie.forEach(m => {
        m.classList.remove('hover') // Eliminamos la clase hover a todas las peliculas
    });
});