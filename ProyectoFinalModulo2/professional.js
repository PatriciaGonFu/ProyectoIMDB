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

}


let actor1 = new Professional('Tom Hanks', 67,85,180,false,'Estadounidense',2,'actor','https://cadenaser.com/resizer/8VxdqAGx5TB5kk9D4Rx47tYnqNQ=/990x743/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/P3IP5J5VGPG4JK2U6JT3V54DWM.jpg');
let actriz1 = new Professional('Meryl Streep',74,58,172,false,'Estadounidense',3,'actriz','https://media.revistavanityfair.es/photos/60e850a1c575901c42628445/master/w_1600,c_limit/7502.jpg');
let director1 = new Professional('Juan Antonio Bayona',48,53,157,false,'Español',0,'director','https://imagenes.elpais.com/resizer/sD4M8ZmBsE2uh9V5_VafMniH98M=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ZVZKIN2JQCQCYRGHSQIH64PKTU.jpg');
let actor2 = new Professional('Keanu Reeves', 59, 79, 186, false,'Libanés', 0, 'actor','https://www.nzherald.co.nz/resizer/CCjyNXP3Jt0D5xUr7QZST-fBAPs=/1440x958/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/YPHKGN7N4IK3LGQ6GFL67YH6NI.jpg'); 
let actriz2 = new Professional('Julia Roberts', 56, 58, 175, false, 'Estadounidense',1, 'actriz','https://cdn-3.expansion.mx/dims4/default/81cdd8c/2147483647/strip/true/crop/4500x3000+0+0/resize/1200x800!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fd6%2Feb%2Fdb56ea61462f8a9cc925f01d7221%2Fgettyimages-1456771562.jpg');
let directora1 = new Professional('Sofia Coppola', 52, 52, 166, false, 'Estadounidense', 1, 'directora','https://ew.com/thmb/L2vTsUWtOneU8ptkJ5ikeUWowbY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Sofia-Coppola-082323-9f1e739d8f8a4dbe9fd496c753fb93f0.jpg' );
let actor3 = new Professional('Robert John Downey Jr.',58, 78, 174, false, 'Estadounidense', 0, 'actor', 'https://media.gq.com.mx/photos/5ffa22129274cd36fe35681a/16:9/w_1920,c_limit/robert-downey-jr-star-wars.jpg'  );
let actriz3 = new Professional('Scarlett Johansson', 39,58, 160, false, 'Estadounidense', 0, 'actriz', 'https://media.lacapital.com.ar/p/7ad7025a23c7e5247b39b7c9cb86b05c/adjuntos/203/imagenes/027/285/0027285980/642x0/smart/2019-08-26-esc-74466220jpg.jpg' );
let director2 = new Professional('Alejandro Amenábar', 51,70, 168, false, 'Chileno', 1, 'director', 'https://cadenaser.com/resizer/n5LkJexfraLD-1doU4UuzkWOj5E=/990x557/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/6VMDRLF26FM2VAGSSQNQHOFCE4.jpg'  );
let actor4 = new Professional('Javier Bardem', 54, 84, 181, false, 'Español', 1, 'actor', 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/10/javier-bardem-2847519.jpg?tf=1920x'  );
let actriz4 = new Professional('Penélope Cruz', 49, 50, 163, false, 'Española', 1, 'actriz', 'https://hips.hearstapps.com/hmg-prod/images/penelope-cruz-cine-madres-paralelas-oscar-estilo-1644333087.jpg?crop=1.00xw:1.00xh;0,0&resize=2048:*'  );
const newProfessionals = [actor1,actriz1,actor2,director1, actriz2, directora1, actor3, actriz3, director2,actor4, actriz4]; 


function volcarDatos() {
    let card = "";
    for (let i = 0; i < newProfessionals.length; i++) {
        card += `<div class="card">
            <div class="img-container">
                <img src="${newProfessionals[i].photo}" alt="">
            </div>
            <h6>${newProfessionals[i].name}</h6>
            <p>Edad: ${newProfessionals[i].age}</p>
            <p>Peso: ${newProfessionals[i].weight}</p>
            <p>Altura: ${newProfessionals[i].height}</p>
            <p>¿Está Retirado? ${newProfessionals[i].isRetired}</p>
            <p>Nacionalidad: ${newProfessionals[i].nationality}</p>
            <p>Nº de Oscars: ${newProfessionals[i].oscarNumber}</p>
            <p>Profesión: ${newProfessionals[i].profession}</p>
        </div>`;
    }
    document.getElementById('volcarDatos').innerHTML = card;
}


