
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
        this.vitesseX=2;
        this.vitesseY=0.5;
    }
    majHTML(){
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
        
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
        raquette_gauche.$html.css("left",raquette_gauche.gauche);
        raquette_droite.$html.css("left",raquette_droite.gauche);
        raquette_gauche.$html.css("top",raquette_gauche.haut);
        raquette_droite.$html.css("top",raquette_droite.haut);
    }
}
    
let terrain=new Terrain($("#terrain"));
let balle=new Balle($("#balle"));
let raquette_gauche=new Raquette($("#raquette"));
let raquette_droite=new Raquette($("#raquetteDROITE"));

//La balle part soit à gauche, soit à droite:
if( Math.random() > 0.5){
    balle.vitesseX=-2;
}
setInterval(function(){
    
    /*affectation des vitesses à la balle...*/
    balle.gauche+=balle.vitesseX;
    balle.haut+=balle.vitesseY;
    /*...et de la raquette gauche... */
    raquette_gauche.haut+=raquette_gauche.vitesse;
    /*...et droite. */
    raquette_droite.haut+=raquette_droite.vitesse;
    raquette_droite.gauche=terrain.largeur-10;
    


    //REBONDS:
    //rebond de droite
    if(balle.gauche>terrain.largeur-20){balle.vitesseX*=-1}
    //rebond du bas
    if(balle.haut>terrain.hauteur-20){balle.vitesseY*=-1}
    //rebond de gauche
    if(balle.gauche<0){balle.vitesseX*=-1;}
    //rebond du haut
    if(balle.haut<0){balle.vitesseY*=-1;}
    balle.majHTML();

        //rebond de la raquette gauche sur les bords de l'écran
    if(raquette_gauche.haut<-20){raquette_gauche.vitesse*=-1;}
    if(raquette_gauche.haut>terrain.hauteur-120){raquette_gauche.vitesse*=-1;}
        //rebond de la raquette gauche sur les bords de l'écran
    if(raquette_droite.haut<-120){raquette_droite.vitesse*=-1;}
    if(raquette_droite.haut>terrain.hauteur-220){raquette_droite.vitesse*=-1;}

    raquette_gauche.majHTML();
    raquette_droite.majHTML();

}, 10);


