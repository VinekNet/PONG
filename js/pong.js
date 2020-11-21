let terrain=new Terrain($("#terrain"));
let balle=new Balle($("#balle"));
let raquetteGauche=new Raquette($("#raquetteG"));
let raquetteDroite=new Raquette($("#raquetteD"));

//La balle part soit à gauche, soit à droite:
if( Math.random() > 0.5){
    balle.vitesseX*=-1; }
setInterval(function(){
    raquetteDroite.mouvement();
    raquetteGauche.mouvement();
    balle.mouvementBalle();
}, 10);