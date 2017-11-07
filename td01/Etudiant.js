var etudiant = {
  nom: "Thibault",
  prenom: "Mansier",
  Numetu: "5764576456754",
  datenaissance: [11,11,1997],
}

function Etudiant(nom,prenom,numetu,datenaissance){
  this.nom = nom;
  this.prenom = prenom;
  this.numetu = numetu;
  this.datenaissance = datenaissance;
  this.presenter = function(){
    console.log("Je suis " + this.prenom + " " + this.nom + ", etudiant n°" + this.numetu + ", né(e) le " + this.datenaissance[0]+ "/" +this.datenaissance[1]+ "/" + this.datenaissance[2] +".");
  };
  this.age = function(){
    //
  }
}

  var etu1 = new Etudiant("A","AA","147852369",[14,12,1888]);
  var etu2 = new Etudiant("B","BB","963258741",[31,01,2021]);
  etu1.presenter();
  etu2.presenter();
