class Raquette{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($html.css("top"));
        this.hauteur=parseInt($html.css("height"));
        this.gauche=parseInt($html.css("left"));
        this.largeur=parseInt($html.css("width"));
        this.vitesse=1;
        this.direction=1;
    }
    //getter des raquettes
    get bas(){
        return this.haut+this.hauteur;
    }

    get droite(){
        return this.gauche+this.largeur;
    }
    //setter des raquettes
    set bas(value){
        this.haut=value-this.hauteur;
    }
    
    set droite(value){
        this.gauche=value-this.largeur;
    }

    majHTML(){
        this.$html.css("top",raquetteGauche.haut);
        this.$html.css("top",raquetteDroite.haut);
        this.$html.css("height",raquetteGauche.hauteur);
        this.$html.css("height",raquetteDroite.hauteur);
    }
    monte(){
        this.direction=-1;
    }
    descend(){
        this.direction=1;
    }
    mouvement(){
        this.haut += this.vitesse * this.direction;       
        this.limiteMouvements();
        this.majHTML();
    }
    limiteMouvements(){
        //console.log(this.bas);
        if (this.bas>terrain.hauteur){this.monte();}
        if (this.haut<0){this.descend();}
    }


}
/** 
  
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) { return}
        console.log("La touche '"+event.key+ "' a été enfoncée")
        event.preventDefault();
    }, true);

 window.addEventListener("keyup", function (event) {
        if (event.defaultPrevented) { return}
        console.log("La touche '"+event.key+ "' a été relachée")
        event.preventDefault();
    }, true);
    
    **/