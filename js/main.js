//Código para Datables

//$('#example').DataTable(); //Para inicializar datatables de la manera más simple

$(document).ready(function() {    
    $('#example').DataTable({
    //para cambiar el lenguaje a español
        "language": {
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
			     },
			     "sProcessing":"Procesando...",
            }
    });     
});


//variables

let nav = document.getElementById('nav');/*para hacceder el menu de navegacion*/
let menu=  document.getElementById('enlaces');
let abrir= document.getElementById('open');
let botones= document.getElementsByClassName('btn-header');
let cerrado= true;

function menus(){/*funcion para agrandar el scrol*/
    let Desplazamiento_Actual = window.pageYOffset;
    if (Desplazamiento_Actual <=476){
            nav.classList.remove('nav2');
            nav.className = ('nav1');
            nav.style.transition = '1s'
            menu.style.top = '80px';
            abrir.style.color= '#000';
        }
        else {
            nav.classList.remove('nav1');
            nav.className = ('nav2');
            nav.style.transition = '1s'
            menu.style.top='100px';
            abrir.style.color='#CBA052';
        }
}

function apertura(){
    if(cerrado){
        menu.style.width = '70vw';
        cerrado=false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow= 'hidden';
        cerrado=true;
    }
}

window.addEventListener('load', function(){
    $('#onload').fadeOut();/*funcion usando query*/
    $('body').removeClass('hidden');
    menus();
});
window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
                menu.style.width = '0%';
                menu.style.overflow= 'hiden';
                cerrado =true;
        }
    }
});
window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});
window.addEventListener('resize',function(){
    if(screen.width>=700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
}
});
abrir.addEventListener('click',function(){
    apertura();
});

/*funcion de inicio de secion*/

// si usuario no esta logueado mostrar login, si no mostrar nombre