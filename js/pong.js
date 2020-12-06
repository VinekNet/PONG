let terrain=new Terrain($("#terrain"));
let balle=new Balle($("#balle"));
let raquetteGauche=new Raquette($("#raquetteG"));
let raquetteDroite=new Raquette($("#raquetteD"));

//Détection d'INPUTS
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }

    //J1
    if(event.key === "a"){

        raquetteGauche.monte();
    }
    if(event.key === "q"){

        raquetteGauche.descend();
    }
    //J2
    if(event.key === "p"){

        raquetteDroite.monte();
    }
    if(event.key === "m"){

        raquetteDroite.descend();
    }
    
    event.preventDefault(); 
}, true);
//Détection d'arrêt d'INPUTS
window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
        return;
    }

    //J1
    if(event.key === "a"){

        raquetteGauche.stop();
    }
    if(event.key === "q"){

        raquetteGauche.stop();
    }
    //J2
    if(event.key === "p"){

        raquetteDroite.stop();
    }
    if(event.key === "m"){

        raquetteDroite.stop();
    }
    
    event.preventDefault(); 
}, true);

//La balle part soit à gauche, soit à droite:
if( Math.random() > 0.5){
    balle.vitesseX*=-1; }
setInterval(function(){
    raquetteGauche.mouvement();
    raquetteDroite.mouvement();
    balle.mouvementBalle();
}, 10);
