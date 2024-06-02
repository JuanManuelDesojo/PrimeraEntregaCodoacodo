
let contenedorLibros=document.getElementById("libros")

fetch("books.json")
.then((response)=>response.json())
.then((datos)=>{
    console.log(datos);
    console.log(datos.data);
    datos.data.forEach((elementos)=>{
        //console.log(elementos.author)
        const contenedorCreado=document.createElement('div')
        contenedorCreado.innerHTML=`
        <img src="${elementos.imageLink}">
        <h4>${elementos.author}</h4>
        <h4>${elementos.title}<h4>
        <h4>${elementos.country}<h4>
        
        
        `;
        contenedorLibros.append(contenedorCreado)
    });
    
    
;  })
