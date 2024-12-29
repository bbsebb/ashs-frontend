import { Injectable } from '@angular/core';
import {IInstagramService} from "@app/share/services/i-instagram.service";
import {Observable, of} from "rxjs";
import {Media} from "@app/share/models/media";
import {map} from "rxjs/operators";
import { MediaType } from '@app/share/models/media'; // Chemin relatif au fichier

@Injectable({
  providedIn: 'root'
})
export class StubInstagramService implements IInstagramService{


  constructor() { }

  getMedias(): Observable<Media[]> {
    return of(
      [
        {
          "id": "18023712068322551",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/470332614_17970892091803616_455008513141595661_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=n6dKWARMmWEQ7kNvgF5pEm8&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=A5bSTogDMi1sA7IfTcmRi5U&oh=00_AYC22b1bKKTGj5GNEjlIh-z70aKLZAY-EQp_A-HNvphYoQ&oe=6776DC77",
          "username": "as_hoenheim_sports",
          "caption": "Notre SF2 termine l’année 2024 sans avoir connu la défaite depuis le début de saison ⚡️ 9ème victoire ce dimanche contre Marckolsheim (38-26) 🙌",
          "timestamp": "2024-12-15T18:00:21Z",
          "permalink": "https://www.instagram.com/p/DDm7jEpN3Jz/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "17878416093204625",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/470274162_17970890969803616_2887944888945169786_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=_kciCDkeObYQ7kNvgG_carK&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=A5bSTogDMi1sA7IfTcmRi5U&oh=00_AYDoYM0IbFvr0A4ZnQFJ_FOUavtV7ejeTTzDlh1XviiE0w&oe=6776C85B",
          "username": "as_hoenheim_sports",
          "caption": "Troisième succès de rang pour nos SF3 🍾 Après leur victoire contre Wissembourg/Soultz (32-25), elles consolident leur 3ème place au classement ☄️",
          "timestamp": "2024-12-15T17:49:55Z",
          "permalink": "https://www.instagram.com/p/DDm6WlaN4UW/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "17899531170011813",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra3-2.cdninstagram.com/v/t51.75761-15/470094099_17970790673803616_531511440582512521_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=qiWL-ukgmIAQ7kNvgFTYMgr&_nc_zt=23&_nc_ht=scontent-fra3-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=A5bSTogDMi1sA7IfTcmRi5U&oh=00_AYB3K8rC8HpD514XSHzMDuAaP93pj-V4IuPse8VcgKQozw&oe=6776C6EF",
          "username": "as_hoenheim_sports",
          "caption": "𝐂̧𝐚 𝐞𝐧𝐜𝐡𝐚𝐢𝐧𝐞 𝐛𝐢𝐞𝐧 ! \n\nLarge et solide victoire pour nos SF1 qui consolident leur place au classement 😎 Elles s’imposent facilement contre Hochfelden (46-29) 🥳",
          "timestamp": "2024-12-15T00:51:18Z",
          "permalink": "https://www.instagram.com/p/DDlFyCrNsPw/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "17954226611756274",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/470271455_17970789203803616_9221003665061586778_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=xZSUFZ1NR5UQ7kNvgFbpkJm&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=A5bSTogDMi1sA7IfTcmRi5U&oh=00_AYCwXQyEb4r14tEYFA1KERopzKrihPnVUao6vWq2d8RTjQ&oe=6776DC2C",
          "username": "as_hoenheim_sports",
          "caption": "𝐎𝐛𝐣𝐞𝐜𝐭𝐢𝐟 𝟐𝐞̀𝐦𝐞 𝐩𝐥𝐚𝐜𝐞 🎯\n\nNos SM1 s’attendaient à un gros duel face à la réserve de Plobsheim, et ça a été le cas ! Solide prestation pour Hoenheim qui s’impose au terme d’un match maîtrisé de bout en bout (34-28) 🫡",
          "timestamp": "2024-12-15T00:31:04Z",
          "permalink": "https://www.instagram.com/p/DDlDd2DNOBr/",
          "thumbnailUrl": null,
          "children": null
        }
      ]
    ).pipe(
      map(data =>
        data.map(item => ({
          ...item,
          mediaType: MediaType[item.mediaType as keyof typeof MediaType], // Conversion explicite
        }))
      )
    );
  }
}
