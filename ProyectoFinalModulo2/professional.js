class Professional{
    constructor( name, age, weight, height, isRetired, nationality, oscarNumber, profession, photo){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
        this.photo = photo;
    }
    printProperties() 
    {
        let arrayProperties = [
            this.name,
            this.age, 
            this.weight, 
            this.height, 
            this.isRetired, 
            this.nationality, 
            this.oscarNumber, 
            this.profession
        ]
            
        return arrayProperties;
    }
}

let actor1 = newProfessional('/IMAGENES/f.elconfidencial.com_original_add_e12_1be_adde121befc64dd385bbacad5e188bc0.jpg','Tom Hanks', 67,85,180,false,'Estadounidense',2,'actor');
let actor2 = newProfessional('/IMAGENES/476324.webp','Meryl Streep',74,58,172,false,'Estadounidense',3,'actriz');
let director1 = newProfessionals('/IMAGENES/Jurassic_World_Fallen_Kingdom_Japan_Premiere_Red_Carpet_J._A._Bayona_(cropped)_(cropped).jpg','Juan Antonio Bayona',48,53,157,false,'Español',0,'director');
const newProfessionals = [[actor1],[actor2],[director1]];


function volcarDatos(){
    let card = "";
    for(let i=0;i<newProfessionals.length;i++){
        card += `<img>${newProfessionals[i].photo}</img>
        <p>Nombre: ${newProfessionals[i].name}</p>
        <p>Edad: ${newProfessionals[i].age}</p>
        <p>Peso: ${newProfessionals[i].weight}</p>
        <p>Altura: ${newProfessionals[i].height}</p>
        <p>¿Está Retirado? ${newProfessionals[i].isRetired}</p>
        <p>Nacionalidad: ${newProfessionals[i].nationality}</p>
        <p>Nº de Oscars: ${newProfessionals[i].oscarNumber}</p>
        <p>Profesión: ${newProfessionals[i].profession}</p>`
    }
    console.log(newProfessionals[i]);
    document.getElementById('volcarDatos').innerHTML = `${card}`;
}

// document.addEventListener('DOMContentLoaded', function() {
//     volcarDatos(); 
// });

