
//classe du Terrain
class Terrain{
    constructor($element){
        this.$element=$element
        this.largeur=$element.width();
        this.hauteur=$element.height();    
    }
  }
//classe de la Balle
class  Balle{
    constructor($html){
        this.$html=$html;
        this.gauche=parseInt($("#balle").css("left"));
        this.haut=parseInt($("#balle").css("top"));
        this.vitesseX=2;
        this.vitesseY=0.5;
    }
    majHTML(){
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
    }
}
let terrain=new Terrain($("#terrain"));
let balle=new Balle($("#balle"));

setInterval(function(){
    /**affectation des vitesses à la balle:**/
    balle.gauche+=balle.vitesseX;
    balle.haut=balle.haut+balle.vitesseY;

    //REBONDS:
    //rebond de droite
    if(balle.gauche>terrain.largeur){balle.vitesseX*=-1}
    //rebond du bas
    if(balle.haut>terrain.hauteur){balle.vitesseY*=-1}
    //rebond de gauche
    if(balle.gauche<0){balle.vitesseX*=-1}
    //rebondn du haut
    if(balle.haut<0){balle.vitesseY*=-1}
    balle.majHTML();
    
}, 10);


