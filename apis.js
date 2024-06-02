let contenedorPersonajes=document.getElementById("libros")

fetch("https://stephen-king-api.onrender.com/api/books")
.then((response)=>response.json())
.then((datos)=>{
    console.log(datos)
    
    datos.data.forEach((elementos)=>{
    
    const contenedorCreado=document.createElement('div')
    
    contenedorCreado.innerHTML=`
    <h4>Titulo:${elementos.Title}<h4>
    <h4>cantidad de paginas:${elementos.Pages}<h4>
    <h4>Año de publicacion:${elementos.Year}<h4>
    `;

    contenedorPersonajes.append(contenedorCreado)
    });

})
