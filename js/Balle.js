class  Balle{
    constructor($html){
        this.$html=$html;
        this.gauche=parseInt($("#balle").css("left"));
        this.haut=parseInt($("#balle").css("top"));
        this.rayon=parseInt($("#balle").css("width"))
        this.vitesseX=2;
        this.vitesseY=0.5;
    }
    //getter de la balle
    get bas(){
        return this.haut+this.rayon;}
    //setter de la balle
    set bas(value) {
            this.haut = value - this.rayon;
        }
    majHTML(){
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
        //this.$html.css("width",balle.haut);

    }
    /*affectation des vitesses à la balle...*/
    mouvementBalle(){
        balle.gauche+=balle.vitesseX;
        balle.haut+=balle.vitesseY;
            //REBONDS:
        //à droite on reset 
        if(balle.gauche>terrain.largeur-balle.rayon){
            if( Math.random() > 0.5){
            balle.vitesseX*=-1; }; 
            balle.gauche=terrain.largeur/2;
            balle.haut=terrain.hauteur/2;}
        //rebond du bas
        if(balle.haut>terrain.hauteur-balle.rayon){balle.vitesseY*=-1}
        //à gauche on reset
        if(balle.gauche<0){
            if( Math.random() > 0.5){
                balle.vitesseX*=-1; }; 
                balle.gauche=terrain.largeur/2;
                balle.haut=terrain.hauteur/2;}
        //rebond du haut
        if(balle.haut<0){balle.vitesseY*=-1;}

        /* Même problème qu'avec mes raquettes pour la composante "joueur"*/
        balle.majHTML();
        if(this.gauche < raquetteGauche.droite){ 
            if(this.bas > raquetteGauche.haut){
              if(this.haut < raquetteGauche.bas){ balle.vitesseY*=-1
                }
            }
        } 
    }
}