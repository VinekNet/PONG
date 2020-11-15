
//classe du Terrain
class Terrain{
    constructor($element){
        this.$element=$element;
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
        this.rayon=parseInt($("#balle").css("width"))
        this.vitesseX=2;
        this.vitesseY=0.5;
    }
    majHTML(){
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
        //this.$html.css("width",balle.haut);
        
    }
}
//classe de la raquette        
class Raquette{
    constructor($html){
        this.$html=$html;
        this.gauche=parseInt($("#raquette").css("left"));
        this.haut=parseInt($("#raquette").css("top"));
        this.haut=parseInt($("#raquetteDROITE").css("top"));
        this.vitesse=1;
    }  
    majHTML(){
        raquetteGauche.$html.css("left",raquetteGauche.gauche);
        raquetteDroite.$html.css("left",raquetteDroite.gauche);

        raquetteGauche.$html.css("top",raquetteGauche.haut);
        raquetteDroite.$html.css("top",raquetteDroite.haut);
    }
}
    
let terrain=new Terrain($("#terrain"));
let balle=new Balle($("#balle"));
let raquetteGauche=new Raquette($("#raquette"));
let raquetteDroite=new Raquette($("#raquetteDROITE"));

//La balle part soit à gauche, soit à droite:
if( Math.random() > 0.5){
    balle.vitesseX=-2;
}
setInterval(function(){
    
    /*affectation des vitesses à la balle...*/
    balle.gauche+=balle.vitesseX;
    balle.haut+=balle.vitesseY;
    /*...et de la raquette gauche... */
    raquetteGauche.haut+=raquetteGauche.vitesse;
    /*...et droite. */
    raquetteDroite.haut+=raquetteDroite.vitesse;

    raquetteDroite.gauche=terrain.largeur-10;
    


    //REBONDS:
    //rebond de droite
    if(balle.gauche>terrain.largeur-balle.rayon){balle.vitesseX*=-1}
    //rebond du bas
    if(balle.haut>terrain.hauteur-balle.rayon){balle.vitesseY*=-1}
    //rebond de gauche
    if(balle.gauche<0){balle.vitesseX*=-1;}
    //rebond du haut
    if(balle.haut<0){balle.vitesseY*=-1;}
    balle.majHTML();

        //rebond de la raquette gauche sur les bords de l'écran
    if(raquetteGauche.haut<-20){raquetteGauche.vitesse*=-1;}
    if(raquetteGauche.haut>terrain.hauteur-120){raquetteGauche.vitesse*=-1;}
        //rebond de la raquette gauche sur les bords de l'écran
    if(raquetteDroite.haut<-120){raquetteDroite.vitesse*=-1;}
    if(raquetteDroite.haut>terrain.hauteur-220){raquetteDroite.vitesse*=-1;}

    raquetteGauche.majHTML();
    raquetteDroite.majHTML();

}, 10);


