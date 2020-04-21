(function (window, document) {

})(window, document);
function avvia() {
location.href = "schermata.html";

}
var id_ciclo_breve;
var ciclo_lungo;
var id_ciclo_tempo;
function ciclo_lungo() {
var cent = (1000/60).toFixed(20);
 var a = Model.get_risposta();
 if (a == true) {
  view.azzera_timer();
     window.clearTimeout(id_ciclo_tempo);
      window.clearTimeout(id_ciclo_breve);
 view.svuota_schermo();
 var cas = controller.genera_cas();
    Model.set_val_attuale(cas);
    view.aggiorna_valore_attuale(cas);
    Model.inc_punteggio();
    view.aggiorna_punteggio();
    Model.set_livello();
    view.mostra_pulsanti(Model.get_val_attuale());

    id_ciclo_tempo = window.setInterval(ciclo_tempo,cent);
        id_ciclo_breve = window.setTimeout(ciclo_breve,40000);
 }
 if (a == false) {
 ciclo_breve();
 }


}
function ciclo_tempo() {
view.aggiorna_timer();
}
function ciclo_breve () {
window.clearTimeout(id_ciclo_tempo);
view.svuota_schermo();
//document.getElementById("piedi").removeChild(document.getElementById("is2"));
window.clearTimeout(id_ciclo_breve);
window.clearInterval(ciclo_lungo);

 view.mostra_info_fine();

}
var   controller =  {
  genera_cas : function () {
  var casuale = Math.floor((Math.random()*500)+1);
  return casuale;

  },
  avvia2 : function () {
  var val_ini = this.genera_cas();
  Model.set_val_attuale(val_ini);
  view.mostra_val_ini(val_ini);


   },
   avanti : function () {
   view.svuota_schermo();
   var cent = (1000/60).toFixed(20);
    var cas = this.genera_cas();
       Model.set_val_attuale(cas);
       view.aggiorna_valore_attuale(cas);
       Model.inc_punteggio();
       view.aggiorna_punteggio();
       Model.set_livello();
       view.mostra_pulsanti(Model.get_val_attuale());

   //
   id_lungo = window.setInterval(ciclo_lungo,5);
    id_breve = window.setTimeout(ciclo_breve,40000);
    id_ciclo_tempo = window.setInterval(ciclo_tempo,cent);

   //

   },
   fine : function () {
   location.href = "index.html";
   }
}
function avanti () {
document.getElementById("piedi").removeChild(document.getElementById("is2"));
controller.avanti();

}
var view = {
  aggiorna_valore_attuale: function (valore) {
  var a = document.getElementById("val");
  a.innerHTML = "Valore: "+ valore;
  } ,
  azzera_timer : function () {
    var a = document.getElementById("time1");
    var b = document.getElementById("time2");
    a.innerHTML = "00";
    b.innerHTML = "00";

    },
  aggiorna_timer : function () {
  var a = document.getElementById("time1");
    var b = document.getElementById("time2");
    var ai = parseInt(a.innerHTML);
    var bi = parseInt(b.innerHTML);
    if ((bi + 1) == 60) {
    b.innerHTML = "00";
    a.innerHTML =  ai + 1;
    }
    if ((bi +1) < 60 )  {
      b.innerHTML=  bi + 1;
    }
  },
  aggiorna_punteggio: function() {
  var a = document.getElementById("pu1");
   a.innerHTML=  parseInt(a.innerHTML) + 1;
  },
  mostra_val_ini : function (valore) {
   var nodo = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  	  nodo.setAttribute("x",80);
  	  nodo.setAttribute("y",150);
  	  nodo.setAttribute("fill","red");
  	  nodo.setAttribute("font-size","2em");
  	  var testo = "Il valore da cui";
  	    var t = document.createTextNode(testo);
  	   nodo.appendChild(t);
  	   nodo.firstChild.nodoValue = testo;
  	  var schermo = document.getElementById("schermo");
  	      schermo.appendChild(nodo);


  	       var nodo2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            	  nodo2.setAttribute("x",80);
            	  nodo2.setAttribute("y",200);
            	  nodo2.setAttribute("fill","red");
            	  nodo2.setAttribute("font-size","2em");
            	  var testo2 = " partire : "+valore;
            	    var t2 = document.createTextNode(testo2);
            	   nodo2.appendChild(t2);
            	   nodo2.firstChild.nodoValue = testo2;
            	      schermo.appendChild(nodo2);
  },
  mostra_pulsanti : function (valore_attuale) {
 var schermo = document.getElementById("schermo");
 	  var val_giusto = valore_attuale;
 	  var val1 = val_giusto + Math.floor((Math.random()*100)+1);
 	  var val2 = val_giusto - Math.floor((Math.random()*100)+1);
 	  var val3 = val_giusto + Math.floor((Math.random()*100)+1);
 	  var risp_giusta = document.createElementNS('http://www.w3.org/2000/svg', 'a');
 	  var risp_1 = document.createElementNS('http://www.w3.org/2000/svg', 'a');
 	  var risp_2 = document.createElementNS('http://www.w3.org/2000/svg', 'a');
 	  var risp_3 = document.createElementNS('http://www.w3.org/2000/svg', 'a');
 	  risp_giusta.setAttribute("href","javascript:setta_risposta(true)");
 	  risp_1.setAttribute("href","javascript:setta_risposta(false)");
 	  risp_2.setAttribute("href","javascript:setta_risposta(false)");
 	  risp_3.setAttribute("href","javascript:setta_risposta(false)");
 	  var cerchio_g = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
 	  var cerchio_1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
 	  var cerchio_2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
 	  var cerchio_3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
 	  var testo_g = document.createElementNS('http://www.w3.org/2000/svg', 'text');
 	     var testo_1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
 	      var testo_2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
 	       var testo_3 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
 	       testo_g.setAttribute("fill","blue");
 	       testo_1.setAttribute("fill","blue");
 	       testo_2.setAttribute("fill","blue");
 	       testo_3.setAttribute("fill","blue");
 	       testo_g.setAttribute("font-size",50);
           testo_1.setAttribute("font-size",50);
           testo_2.setAttribute("font-size",50);
           testo_3.setAttribute("font-size",50);
 	  var array = [0, 0, 0, 0];
 	  var i = 1;
 	 while ((0 == array[0] ) || (0 == array[1])  || (0 == array[2])  || (0 == array[3]) ) {
 	  var n = Math.floor(Math.random()*4 + 1);
 	  if (n == 5) {
 	  n = 4;
 	  }
 	  if ((n != array[0] ) && (n != array[1])  && (n != array[2]) && (n != array[3])  ) {
 	  array[i-1] = n;
 	  //
 	  if (n == 1) {
 	  if ( i == 1) {
 	  cerchio_1.setAttribute("cx",120);
 	  cerchio_1.setAttribute("cy",140);
 	  testo_1.setAttribute("x",75);
 	  testo_1.setAttribute("y",155);
 	  } if (i == 2) {
 	cerchio_1.setAttribute("cx",240);
 	  cerchio_1.setAttribute("cy",140);
 	    testo_1.setAttribute("x",200);
 	    testo_1.setAttribute("y",155);
 	  } if (i == 3) {
 	cerchio_1.setAttribute("cx",120);
 	  cerchio_1.setAttribute("cy",240);
 	    testo_1.setAttribute("x",75);
 	    testo_1.setAttribute("y",255);
 	  } if (i == 4) {
 	cerchio_1.setAttribute("cx",240);
 	  cerchio_1.setAttribute("cy",240);
 	    testo_1.setAttribute("x",200);
 	    testo_1.setAttribute("y",255);
 	  }

 	  }if (n == 2) {
 	   if ( i == 1) {
 	  cerchio_2.setAttribute("cx",120);
 	  cerchio_2.setAttribute("cy",140);
 	    testo_2.setAttribute("x",75);
 	    testo_2.setAttribute("y",155);
 	    } if (i == 2) {
 	cerchio_2.setAttribute("cx",240);
 	  cerchio_2.setAttribute("cy",140);
 	    testo_2.setAttribute("x",200);
 	      testo_2.setAttribute("y",155);
 	    } if (i == 3) {
 	cerchio_2.setAttribute("cx",120);
 	  cerchio_2.setAttribute("cy",240);
 	   testo_2.setAttribute("x",75);
 	      testo_2.setAttribute("y",255);
 	    } if (i == 4) {
 	cerchio_2.setAttribute("cx",240);
 	  cerchio_2.setAttribute("cy",240);
 	   testo_2.setAttribute("x",200);
 	      testo_2.setAttribute("y",255);
 	    }
 	  }if (n == 3) {
 	   if ( i == 1) {
 	    cerchio_3.setAttribute("cx",120);
 	    cerchio_3.setAttribute("cy",140);
 	       testo_3.setAttribute("x",75);
 	        testo_3.setAttribute("y",155);
 	      } if (i == 2) {
 	  cerchio_3.setAttribute("cx",240);
 	    cerchio_3.setAttribute("cy",140);
 	     testo_3.setAttribute("x",200);
 	          testo_3.setAttribute("y",155);
 	      } if (i == 3) {
 	  cerchio_3.setAttribute("cx",120);
 	    cerchio_3.setAttribute("cy",240);
 	      testo_3.setAttribute("x",75);
 	          testo_3.setAttribute("y",255);
 	      } if (i == 4) {
 	  cerchio_3.setAttribute("cx",240);
 	    cerchio_3.setAttribute("cy",240);
 	       testo_3.setAttribute("x",200);
 	          testo_3.setAttribute("y",255);
 	      }
 	  }if (n == 4) {
 	   if ( i == 1) {
 	      cerchio_g.setAttribute("cx",120);
 	      cerchio_g.setAttribute("cy",140);
 	       testo_g.setAttribute("x",75);
 	              testo_g.setAttribute("y",155);
 	        } if (i == 2) {
 	    cerchio_g.setAttribute("cx",240);
 	      cerchio_g.setAttribute("cy",140);
 	        testo_g.setAttribute("x",200);
 	                testo_g.setAttribute("y",155);
 	        } if (i == 3) {
 	    cerchio_g.setAttribute("cx",120);
 	      cerchio_g.setAttribute("cy",240);
 	         testo_g.setAttribute("x",75);
 	                testo_g.setAttribute("y",255);
 	        } if (i == 4) {
 	    cerchio_g.setAttribute("cx",240);
 	      cerchio_g.setAttribute("cy",240);
 	        testo_g.setAttribute("x",200);
 	                testo_g.setAttribute("y",255);
 	        }
 	  }
 	  ++i;
 	  }

 	  }
 	  cerchio_1.setAttribute("r",50);
 	   cerchio_2.setAttribute("r",50);
 	    cerchio_3.setAttribute("r",50);
 	     cerchio_g.setAttribute("r",50);
 	     cerchio_1.setAttribute("style","stroke:red");
 	     cerchio_2.setAttribute("style","stroke:red");
 	     cerchio_3.setAttribute("style","stroke:red");
 	     cerchio_g.setAttribute("style","stroke:red");
 	      var t_g = document.createTextNode(val_giusto);
 	      var t_1 = document.createTextNode(val1);
 	      var t_2 = document.createTextNode(val2);
 	      var t_3 = document.createTextNode(val3);
 	      testo_g.appendChild(t_g);
 	      testo_1.appendChild(t_1);
 	      testo_2.appendChild(t_2);
 	      testo_3.appendChild(t_3);
 	      testo_g.firstChild.nodoValue = val_giusto;
 	      testo_1.firstChild.nodoValue = val1;
 	      testo_2.firstChild.nodoValue = val2;
 	      testo_3.firstChild.nodoValue = val3;
 	      risp_giusta.appendChild(cerchio_g);
 	      risp_giusta.appendChild(testo_g);
 	      risp_1.appendChild(cerchio_1);
 	      risp_1.appendChild(testo_1);
 	      risp_2.appendChild(cerchio_2);
 	      risp_2.appendChild(testo_2);
 	      risp_3.appendChild(cerchio_3);
 	      risp_3.appendChild(testo_3);
 	      schermo.appendChild(risp_giusta);
 	      schermo.appendChild(risp_1);
 	      schermo.appendChild(risp_2);
 	      schermo.appendChild(risp_3);
  },
  svuota_schermo : function () {
  var schermo = document.getElementById("schermo");
  while(schermo.firstChild != null) {
  schermo.removeChild(schermo.firstChild);
  }
  },
  mostra_info_fine : function () {
  var a = Model.get_info();
  var schermo = document.getElementById("schermo");

   var nodo = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    	  nodo.setAttribute("x",80);
    	  nodo.setAttribute("y",150);
    	  nodo.setAttribute("fill","red");
    	  nodo.setAttribute("font-size","2em");
    	  var testo = "Hai perso";
    	    var t = document.createTextNode(testo);
    	   nodo.appendChild(t);
    	   nodo.firstChild.nodoValue = testo;
    	      schermo.appendChild(nodo);

    	       var nodo2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                  	  nodo2.setAttribute("x",80);
                  	  nodo2.setAttribute("y",200);
                  	  nodo2.setAttribute("fill","red");
                  	  nodo2.setAttribute("font-size","2em");
                  	  var testo2 = "Punteggio :"+ a.punteggior;
                  	    var t2 = document.createTextNode(testo2);
                  	   nodo2.appendChild(t2);
                  	   nodo2.firstChild.nodoValue = testo2;
                  	      schermo.appendChild(nodo2);

                  	       var nodo3 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                                            	  nodo3.setAttribute("x",80);
                                            	  nodo3.setAttribute("y",250);
                                            	  nodo3.setAttribute("fill","red");
                                            	  nodo3.setAttribute("font-size","2em");
                                            	  var testo3 = "Livello :"+ a.livellor;
                                            	    var t3 = document.createTextNode(testo3);
                                            	   nodo3.appendChild(t3);
                                            	   nodo3.firstChild.nodoValue = testo3;
                                            	      schermo.appendChild(nodo3);

                                            	      var nodo4 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                                                     nodo4.setAttribute("x",80);
                                               	  nodo4.setAttribute("y",300);                                                                                                  	  nodo4.setAttribute("fill","red");
                                              nodo4.setAttribute("font-size","2em");
                                  var testo4 = "Valore finale :"+ a.valore_finale;
                        var t4 = document.createTextNode(testo4);
                                 nodo4.appendChild(t4);
                                      nodo4.firstChild.nodoValue = testo4;
                                   schermo.appendChild(nodo4);


                                   var risp_1 = document.createElementNS('http://www.w3.org/2000/svg', 'a');
                                   risp_1.setAttribute("href","javascript:controller.fine()");

                                   var testo_1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                                   testo_1.setAttribute("fill","blue");
                                   testo_1.setAttribute("font-size",50);


                                    	  testo_1.setAttribute("x",75);
                                    	  testo_1.setAttribute("y",350);

                                    	    var t_1 = document.createTextNode("FINE");
                                    	     testo_1.appendChild(t_1);
                                    	      testo_1.firstChild.nodoValue = "FINE";

                                    	      risp_1.appendChild(testo_1);
                                    	        schermo.appendChild(risp_1);


  },
  torna_indietro : function () {
  location.href = "index.html";
  }

}
function setta_risposta(boolean) {
var a  = Model.get_livello();
Model.set_risposta(a,boolean);
}

 var Model =  {
    punteggio : 0 ,
    livello : 0 ,
    risposte : new Array() ,
    valore_attuale : 0 ,
    set_risposta : function(livello,boolean) {
              this.risposte[livello] = boolean;
    },
    get_risposta : function() {
               return this.risposte[this.livello];
    },
    set_livello : function() {
               this.livello = this.livello + 1;
    },
    get_livello : function() {
               return this.livello;
    },
    set_val_attuale : function (valore) {

                this.valore_attuale = this.valore_attuale + valore;
    },
    get_val_attuale : function () {
                return this.valore_attuale;

    },
    inc_punteggio : function () {

                this.punteggio = this.punteggio + 1;
    },
    get_info : function () {
                var info = {
                livellor : this.livello ,
                punteggior : this.punteggio * 5,
                valore_finale : this.valore_attuale
                }
                return info;
    }
}





