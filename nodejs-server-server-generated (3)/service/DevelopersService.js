'use strict';


/**
 * ajoute une offre de stage d'un partenaire aux offres proposées en propre par les équipes Mon stage de seconde
 * Les offres de stages décrits ci-dessous décrivent les offres réservées aux classes de **seconde générale et technologique** 
 *
 * body InternshipOffer  (optional)
 * returns InternshipOffer
 **/
exports.internship_offers = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "remote_id" : "A123-12",
  "period" : 0,
  "city" : "Paris",
  "coordinates" : {
    "latitude" : 48.866667,
    "longitude" : 2.333333
  },
  "description" : "Stage sur le thème de la logistique et de la supply chain",
  "employer_description" : "Créateur de lotions, de parfums et de produits cosmétiques, embaumeur",
  "employer_name" : "BNP Paribas",
  "title" : "Stage d'observation du métier de chef de service",
  "lunch_break" : "12h-14h",
  "zipcode" : "75001",
  "max_candidates" : 1,
  "employer_website" : "http://www.acnee-corporation.fr",
  "sector_uuid" : {
    "sector_uuid" : "s20",
    "name" : "Mode",
    "id" : 1
  },
  "street" : "16 rue de la paix",
  "is_public" : true,
  "permalink" : "http://www.stagechezemployeur.fr",
  "daily_hours" : {
    "lundi" : [ "9:00", "18:00" ],
    "mardi" : [ "9:00", "18:00" ],
    "mercredi" : [ "9:00", "18:00" ],
    "jeudi" : [ "9:00", "18:00" ],
    "vendredi" : [ "9:00", "18:00" ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Supprime une offre de stage d'un partenaire des offres proposées sur le site https://stagedeseconde.1jeune1solution.gouv.fr/
 * Suppression des offres 
 *
 * remote_id String id de l'offre de stage
 * returns InternshipOffer
 **/
exports.internship_offers_delete = function(remote_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "remote_id" : "A123-12",
  "period" : 0,
  "city" : "Paris",
  "coordinates" : {
    "latitude" : 48.866667,
    "longitude" : 2.333333
  },
  "description" : "Stage sur le thème de la logistique et de la supply chain",
  "employer_description" : "Créateur de lotions, de parfums et de produits cosmétiques, embaumeur",
  "employer_name" : "BNP Paribas",
  "title" : "Stage d'observation du métier de chef de service",
  "lunch_break" : "12h-14h",
  "zipcode" : "75001",
  "max_candidates" : 1,
  "employer_website" : "http://www.acnee-corporation.fr",
  "sector_uuid" : {
    "sector_uuid" : "s20",
    "name" : "Mode",
    "id" : 1
  },
  "street" : "16 rue de la paix",
  "is_public" : true,
  "permalink" : "http://www.stagechezemployeur.fr",
  "daily_hours" : {
    "lundi" : [ "9:00", "18:00" ],
    "mardi" : [ "9:00", "18:00" ],
    "mercredi" : [ "9:00", "18:00" ],
    "jeudi" : [ "9:00", "18:00" ],
    "vendredi" : [ "9:00", "18:00" ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * liste (index) les offres déposées
 * Les offres retournées sont celles qui ont été déposées par le partenaire de Mon stage de seconde.fr 
 *
 * returns InternshipOffers
 **/
exports.internship_offers_index = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "remote_id" : "A123-12",
  "period" : 0,
  "city" : "Paris",
  "coordinates" : {
    "latitude" : 48.866667,
    "longitude" : 2.333333
  },
  "description" : "Stage sur le thème de la logistique et de la supply chain",
  "employer_description" : "Créateur de lotions, de parfums et de produits cosmétiques, embaumeur",
  "employer_name" : "BNP Paribas",
  "title" : "Stage d'observation du métier de chef de service",
  "lunch_break" : "12h-14h",
  "zipcode" : "75001",
  "max_candidates" : 1,
  "employer_website" : "http://www.acnee-corporation.fr",
  "sector_uuid" : {
    "sector_uuid" : "s20",
    "name" : "Mode",
    "id" : 1
  },
  "street" : "16 rue de la paix",
  "is_public" : true,
  "permalink" : "http://www.stagechezemployeur.fr",
  "daily_hours" : {
    "lundi" : [ "9:00", "18:00" ],
    "mardi" : [ "9:00", "18:00" ],
    "mercredi" : [ "9:00", "18:00" ],
    "jeudi" : [ "9:00", "18:00" ],
    "vendredi" : [ "9:00", "18:00" ]
  }
}, {
  "remote_id" : "A123-12",
  "period" : 0,
  "city" : "Paris",
  "coordinates" : {
    "latitude" : 48.866667,
    "longitude" : 2.333333
  },
  "description" : "Stage sur le thème de la logistique et de la supply chain",
  "employer_description" : "Créateur de lotions, de parfums et de produits cosmétiques, embaumeur",
  "employer_name" : "BNP Paribas",
  "title" : "Stage d'observation du métier de chef de service",
  "lunch_break" : "12h-14h",
  "zipcode" : "75001",
  "max_candidates" : 1,
  "employer_website" : "http://www.acnee-corporation.fr",
  "sector_uuid" : {
    "sector_uuid" : "s20",
    "name" : "Mode",
    "id" : 1
  },
  "street" : "16 rue de la paix",
  "is_public" : true,
  "permalink" : "http://www.stagechezemployeur.fr",
  "daily_hours" : {
    "lundi" : [ "9:00", "18:00" ],
    "mardi" : [ "9:00", "18:00" ],
    "mercredi" : [ "9:00", "18:00" ],
    "jeudi" : [ "9:00", "18:00" ],
    "vendredi" : [ "9:00", "18:00" ]
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * met à jour une offre de stage d'un partenaire aux offres proposées en propre par les équipes Mon stage de seconde
 * Mise à jour des offres . Possibilité de désactiver son offre en passant le paramètre published_at à null 
 *
 * body InternshipOfferPatch  (optional)
 * remote_id String clé étrangère unique , id de l'offre de stage chez le partenaire
 * returns InternshipOffer
 **/
exports.internship_offers_updatte = function(body,remote_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "remote_id" : "A123-12",
  "period" : 0,
  "city" : "Paris",
  "coordinates" : {
    "latitude" : 48.866667,
    "longitude" : 2.333333
  },
  "description" : "Stage sur le thème de la logistique et de la supply chain",
  "employer_description" : "Créateur de lotions, de parfums et de produits cosmétiques, embaumeur",
  "employer_name" : "BNP Paribas",
  "title" : "Stage d'observation du métier de chef de service",
  "lunch_break" : "12h-14h",
  "zipcode" : "75001",
  "max_candidates" : 1,
  "employer_website" : "http://www.acnee-corporation.fr",
  "sector_uuid" : {
    "sector_uuid" : "s20",
    "name" : "Mode",
    "id" : 1
  },
  "street" : "16 rue de la paix",
  "is_public" : true,
  "permalink" : "http://www.stagechezemployeur.fr",
  "daily_hours" : {
    "lundi" : [ "9:00", "18:00" ],
    "mardi" : [ "9:00", "18:00" ],
    "mercredi" : [ "9:00", "18:00" ],
    "jeudi" : [ "9:00", "18:00" ],
    "vendredi" : [ "9:00", "18:00" ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Récupère la liste des secteurs économiques
 * Secteur économique. Voir la liste complète ici : [https://github.com/betagouv/monstagedeseconde/blob/staging/doc/README.md#secteurs-dactivité](https://github.com/betagouv/monstagedeseconde/blob/staging/doc/README.md#secteurs-dactivité)
 *
 * returns List
 **/
exports.sectors = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "sector_uuid" : "s20",
  "name" : "Mode",
  "id" : 1
}, {
  "sector_uuid" : "s20",
  "name" : "Mode",
  "id" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

