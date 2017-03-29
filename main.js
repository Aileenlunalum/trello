//constructor  de comentarios crear un  costructor q llebe   el  nombre   y   comentaroio  a una caja  de texto
function intinerario(nombre; comentario){
  this.nombre=nombre;
  this.comentario=comentario;
}
var arreglo=[]

// jala   los  vslores del htmlpara utilizar el constructor  y asi  crear un   obleto   con   propiedad  mombre  y  pendiente  a  si  mismo  lo  manda
// al  arreglo arreglo  el   objeto   creado   y    lo   pierdo  !
function crearcomentario(){
  var nombre = document.getElementById("nombre") ;
  var pendiente= document.getElementById()"pendiente");


  var nuevoPendiente = new intinerario (nombre.value,
                              pendiente.value);

                  for(var i=0;i<=10;i++){
                 arreglo[i].push(nuevoPendiente);
}
}



//funsion q crea un  elemnto  de la  lista con el conttenido de  textarea
//??  es  como  podria   jara   cada  intinerario  nuevo    en  vez de l  comentario  de textarea
function myFunction() {
    var node = document.createElement("li");
    var textnode = document.createTextNode( document.getElementById("pendiente");
    node.appendChild(textnode);
    document.getElementById("lista").appendChild(node);
  }

//funcion  crea    un  elemento  en el  select   con  el  contenid o de  textarea   y   se  repite el  anterior
function funsionselct() {
      var node1 = document.createElement("option");
      var textnode1 = document.createTextNode(document.getElementById("pendiente").value);
      node.appendChild(textnode1);
      document.getElementById("comentarios").appendChild(node1);
  }
  //funcion  para  crear listas
  function myFunction lista() {
      var node2 = document.createElement("ul");
      var textnode2 = document.create();
      node.appendChild(textnode2);
      document.getElementById("seccion1").appendChild(node2);
    }
