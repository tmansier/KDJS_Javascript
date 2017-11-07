var Personne = {
  nom: "",
  prenom: "",
  dateNaissance: [1,1,1977],
  taille : 0,

  init:function(nom,prenom,dateNaissance){
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance
  },

  decrire: function(){
    console.log("Je suis " + this.prenom + " " + this.nom + ", né(e) le " + this.dateNaissance[0]+"/"+this.dateNaissance[1]+"/"+this.dateNaissance[2]+".");
  },

  direAge: function(){
    
  }

}


var Professeur = Object.create(Personne);
Professeur.email = "";
Professeur.initProfesseur = function(nom,prenom,dateNaissance,email){
  this.init(nom,prenom,dateNaissance);
  this.email = email;
};
Professeur.decrire =  function(){
  console.log("Je suis le professeur " + this.prenom + " " + this.nom + ", né(e) le " + this.dateNaissance[0]+"/"+this.dateNaissance[1]+"/"+this.dateNaissance[2] + ", mon adresse email est " + this.email + "." )
}

var prof1 = Object.create(Professeur);
prof1.initProfesseur("AAA", "AAAA", [21,11,1555], "a@a.fr")
prof1.decrire();
var prof2 = Object.create(Professeur);
prof2.initProfesseur("BBB", "BBBB", [29,03,1789], "b@b.fr")
prof2.decrire();
