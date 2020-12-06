class  Balle{
    constructor($html){
        this.$html=$html;
        this.gauche=parseInt($("#balle").css("left"));
        this.haut=parseInt($("#balle").css("top"));
        this.rayon=parseInt($("#balle").css("width"))
        this.vitesseX=2;
        this.vitesseY=0.5;
        this.vitesse=2;
        this.vitesseMax=10;
        this.buf = Math.random();
        this.angle = this.defAngle();
    }
 //getter de la balle
 get bas(){
    return this.haut+this.hauteur;
}

get droite(){
    return this.gauche+this.largeur;
}
//setter de la balle
set bas(value){
    this.haut=value-this.hauteur;
}
set droite(value){
    this.gauche=value-this.largeur;
}
defAngle() {
    return this.buf < 0.5 ? (5 * Math.PI / 4) - Math.random() * (2 * Math.PI / 4) : (Math.PI / 4) - Math.random() * (2 * Math.PI / 4);
}
accelerer() {
    if (Math.abs(this.vitesse) < this.vitesseMax) {
        
        this.vitesse *= this.acceleration;
        //console.log(Math.abs(this.vitesse));
    }
    else {
        this.vitesse = this.vitesseMax;
    }
}
    majHTML(){
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
        //this.$html.css("width",balle.haut);

    }
    /*affectation des vitesses à la balle...*/
    mouvementBalle(){
        this.gauche += Math.cos(this.angle) * this.vitesse;
        this.haut += Math.sin(this.angle) * this.vitesse;
        this.limite();
        this.majHTML();
    }
    limite(){

            //REBONDS:
        //à droite on reset 
        if(balle.gauche>terrain.largeur-balle.rayon){
            if( Math.random() > 0.5){
            balle.vitesse*=-1; }; 
            balle.gauche=terrain.largeur/2;
            balle.haut=terrain.hauteur/2;}
        //rebond du bas
        if(balle.haut>terrain.hauteur-balle.rayon){ this.angle = -(this.angle);}
        //à gauche on reset
        if(balle.gauche<0){
            if( Math.random() > 0.5){
                balle.vitesse*=-1; }; 
                balle.gauche=terrain.largeur/2;
                balle.haut=terrain.hauteur/2;}
        //rebond du haut
        if(balle.haut<0){ this.angle = -(this.angle);}

        //rebondRaquette
        if (this.gauche < raquetteGauche.droite) { //si la balle dépasse à gauche de la raquette gauche
            if (this.bas > raquetteGauche.haut) { //et si la balle est plus basse que le haut de la raquette
                if (this.haut < raquetteGauche.bas) { // et si la balle est plus haute que le bas de la raquette

                    this.accelerer();
                    this.angle = Math.PI - this.angle;
                   
                }
            }
        }
        //D
        if(this.droite < raquetteDroite.gauche){ 
            if(this.bas > raquetteDroite.haut){
              if(this.haut < raquetteDroite.bas){ 
                this.accelerer();
                this.angle = Math.PI - this.angle;
                }
            }
        }  
    }
}