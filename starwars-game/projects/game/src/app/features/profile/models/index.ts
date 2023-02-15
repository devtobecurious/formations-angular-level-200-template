export class ProfileC {
  prenom !: string;
}

export interface ProfileI {
  prenom: string;
}

const profile = new ProfileC();
profile.prenom = 'Luke';

const profile2: ProfileI = {
  prenom: 'Luke'
};


function afficherProfile(profil: ProfileC): void {
  console.info(profil.prenom);
}
afficherProfile(profile);
afficherProfile(profile2);

afficherProfile({ prenom: 'Leia' });

const unObjetAvecSonType = {
  prenom: 'Anakin'
}

function afficherPrenom(item: { prenom: string }): void {
  console.info(item.prenom);
}

afficherPrenom(profile);
afficherPrenom(profile2);


type AvecPrenom = {
  prenom: string
}

type AvecNomEtPrenom = {
  nom: string
} & AvecPrenom;

function afficherPrenomAvecType(item: AvecPrenom): void {
  console.info(item.prenom);
}

const solo: AvecPrenom = {
  prenom: 'Han'
}
afficherPrenomAvecType(solo);
afficherPrenomAvecType(unObjetAvecSonType);
afficherPrenomAvecType(profile);
afficherPrenomAvecType(profile2);
