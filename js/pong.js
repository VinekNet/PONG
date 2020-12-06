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
        this.haut+=this.vitesse*this.direction;
        raquetteGauche.monte();
    }
    if(event.key === "q"){
        this.haut+=this.vitesse*this.direction;
        raquetteGauche.descend();
    }
    //J2
    if(event.key === "p"){
        this.haut+=this.vitesse*this.direction;
        raquetteDroite.monte();
    }
    if(event.key === "m"){
        this.haut+=this.vitesse*this.direction;
        raquetteDroite.descend();
    }
    
    event.preventDefault(); 
}, true);

//La balle part soit à gauche, soit à droite:
if( Math.random() > 0.5){
    balle.vitesseX*=-1; }
setInterval(function(){
    raquetteDroite.mouvement();
    raquetteGauche.mouvement();
    balle.mouvementBalle();
}, 10);
