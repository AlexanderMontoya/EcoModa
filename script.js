/*Creando BD Basica*/
let ropa=[
    {
        'id_ropa': 01,
        'nombre': 'Vaqueros RUMAA HEMP true mid blue',
        'imagen': 'https://www.veganized.es/16847-thickbox_default/vaqueros-rumaa-hemp-true-mid-blue.jpg',
        'precio': 60
    },
    {
        'id_ropa': 02,
        'nombre': 'Blusa FREYAA',
        'imagen':'https://www.veganized.es/12837-thickbox_default/blusa-freyaa.jpg',
        'precio': 30
    },
    {
        'id_ropa': 03,
        'nombre': 'Blusa MEMAA SKETCH OF',
        'imagen': 'https://www.veganized.es/16698-thickbox_default/blusa-memaa-sketch-of.jpg',
        'precio': 35
    },
    {
        'id_ropa': 04,
        'nombre': 'Camisa QUAASI cloudbusting',
        'imagen': 'https://www.veganized.es/15841-large_default/camisa-quaasi-cloudbusting.jpg',
        'precio': 40
    },
    {
        'id_ropa': 05,
        'nombre': 'Cardigan AAGADI COMPACT acid black',
        'imagen': 'https://www.veganized.es/14262-large_default/cardigan-aagadi-compact-acid-black.jpg',
        'precio': 50
    },
    {
        'id_ropa': 06,
        'nombre': 'Pijama RETRO LONG JOHN palmeras',
        'imagen': 'https://www.veganized.es/16059-thickbox_default/pijama-retro-long-john.jpg',
        'precio': 80
    },
    {
        'id_ropa': 07,
        'nombre': 'Pijama RETRO LONG JOHN lemon',
        'imagen': 'https://www.veganized.es/16061-thickbox_default/pijama-retro-long-john.jpg',
        'precio': 80
    },
    {
        'id_ropa': 08,
        'nombre': 'LONG JOHN RETRO Terry Pijama Agua stripe',
        'imagen': 'https://www.veganized.es/14525-thickbox_default/long-john-retro-terry-pijama-agua-stripe.jpg',
        'precio': 75
    },
    {
        'id_ropa': 09,
        'nombre': 'Tank Top Basket verde',
        'imagen': 'https://www.veganized.es/11287-thickbox_default/tank-top-basket-verde.jpg',
        'precio': 50
    },
    {
        'id_ropa': 10,
        'nombre': 'Nilo - Sneaker negro',
        'imagen': 'https://www.veganized.es/11050-thickbox_default/nilo-sneaker-negro.jpg',
        'precio': 80
    },
]
let mostrando=false;

let conteiner=document.getElementById('conteiner_productos');
let caja_producto="";

for(i=0 ; i<ropa.length ; i++){
    caja_producto+=`
    <div class="producto">
        <div class="img">
            <img src="${ropa[i].imagen}" alt="" width="100">
        </div>
        <div class="detalles_producto">
            <span>${ropa[i].nombre}</span>
            <span class="precio">S/${ropa[i].precio}.00</span>
            <button onclick="contar()">Agregar al Carrito</button>
        </div>
    </div>
    `;
}

function mostrar_enlaces(){
    if(mostrando){
        document.getElementById('enlaces_responsive').style.transform="translateX(-100%)";
        mostrando=false;
    }else{
        document.getElementById('enlaces_responsive').style.transform="translateX(0%)";
        mostrando=true;
    }
    
}

conteiner.innerHTML=caja_producto;

console.log(ropa);