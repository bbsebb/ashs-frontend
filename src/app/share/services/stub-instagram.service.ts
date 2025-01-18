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
          "id": "17892342159117275",
          "mediaType": "CAROUSEL_ALBUM",
          "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/473608272_17974699622803616_906208601806842109_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ap8haphEH5IQ7kNvgHbCQFI&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYBfRa9mFQdkBNVZXNcqu8yY58HZVrDRQU10yaWqQO1IHA&oe=6790DB13",
          "username": "as_hoenheim_sports",
          "caption": "𝐏𝐑𝐎𝐆𝐑𝐀𝐌𝐌𝐄 𝐃𝐔 𝐖𝐄𝐄𝐊-𝐄𝐍𝐃 📆\n\nReprise des championnats régionaux et de la quasi totalité de nos équipes ⚔️\nVenez en nombre les encourager 🗣️\n\nBons matchs à toutes et à tous 🖤🤍",
          "timestamp": "2025-01-13T21:57:07Z",
          "permalink": "https://www.instagram.com/p/DEyBshRNy3B/",
          "thumbnailUrl": null,
          "children": [
            {
              "id": "17950953713914007",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/473608272_17974699622803616_906208601806842109_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ap8haphEH5IQ7kNvgHbCQFI&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=Ap1UeHe7ATCR8c96bpsmP2J&oh=00_AYD--ga1OVnUrx8pc1o38AS4r9tlQ3iIBZSBnarDSd__fQ&oe=6790DB13",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-13T21:57:06Z",
              "permalink": "https://www.instagram.com/p/DEyBsYdN69n/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18057358828792914",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/473653698_17974699631803616_1018983906335693149_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=vD16CCpbhyYQ7kNvgF2y4OK&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=Ap1UeHe7ATCR8c96bpsmP2J&oh=00_AYDf2jIFAJpr9TFdH1yKVNWbdgJ2a-wnZR6vwsEZiwDb1w&oe=6790B663",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-13T21:57:06Z",
              "permalink": "https://www.instagram.com/p/DEyBsYdNXcI/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18033927545439823",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/473652777_17974699643803616_143330579985152773_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=qlOjFMbLZmoQ7kNvgGBNWqr&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=Ap1UeHe7ATCR8c96bpsmP2J&oh=00_AYCWMkIAhluZVE94wcwEUsIl18Gx-2uBCsYvNZ-u2wqqsg&oe=6790BEAD",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-13T21:57:06Z",
              "permalink": "https://www.instagram.com/p/DEyBsYdNXi0/",
              "thumbnailUrl": null,
              "children": null
            }
          ]
        },
        {
          "id": "18113144545442047",
          "mediaType": "CAROUSEL_ALBUM",
          "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/473613037_17974560218803616_3307323272231214852_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=U-zZ1MvICHkQ7kNvgG2JvTv&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYCLx8n6h0trIpcw-AAX4VEZIXN09O5Nwo2vh2YAp8AOfg&oe=6790ECA3",
          "username": "as_hoenheim_sports",
          "caption": "𝐑𝐄́𝐒𝐔𝐋𝐓𝐀𝐓𝐒 𝐃𝐔 𝐖𝐄𝐄𝐊-𝐄𝐍𝐃 ⚡️\n\n✅ 𝟕 𝐯𝐢𝐜𝐭𝐨𝐢𝐫𝐞𝐬 \n🟰 𝟏 𝐦𝐚𝐭𝐜𝐡 𝐧𝐮𝐥\n❌ 𝟐 𝐝𝐞́𝐟𝐚𝐢𝐭𝐞𝐬\n\nFélicitations à toutes et à tous, et merci aux supporters présents tout au long du week-end 🖤🤍",
          "timestamp": "2025-01-12T19:38:14Z",
          "permalink": "https://www.instagram.com/p/DEvNAd6tjTe/",
          "thumbnailUrl": null,
          "children": [
            {
              "id": "18045093584005848",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/473613037_17974560218803616_3307323272231214852_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=U-zZ1MvICHkQ7kNvgG2JvTv&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=AExmwiVer-k6VRhq-WjGH2C&oh=00_AYCgMAINkq0Doaat5T97ULwsV0V0BMlxI10mSzVIHducQA&oe=6790ECA3",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-12T19:38:13Z",
              "permalink": "https://www.instagram.com/p/DEvNAVktZga/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18478224268026839",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra5-1.cdninstagram.com/v/t51.75761-15/473678320_17974560227803616_5891499576205062617_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=-RLV_scvd-IQ7kNvgEnC0x9&_nc_zt=23&_nc_ht=scontent-fra5-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=AExmwiVer-k6VRhq-WjGH2C&oh=00_AYC9K6qBhrcFL5OMxTNafWBkpVdJG4EMZAcgF4lLQi2ftA&oe=6790E0E4",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-12T19:38:13Z",
              "permalink": "https://www.instagram.com/p/DEvNAVhtxHU/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "17946237005922214",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra5-1.cdninstagram.com/v/t51.75761-15/473580497_17974560236803616_3520076462157850233_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=0-dg_KI0GQYQ7kNvgGG8KNw&_nc_zt=23&_nc_ht=scontent-fra5-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=AExmwiVer-k6VRhq-WjGH2C&oh=00_AYDMPzyV2btm2nWxF0NP8mS2Y6SIZ1IJFnKXghTwS0dXPA&oe=6790ECB1",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-12T19:38:13Z",
              "permalink": "https://www.instagram.com/p/DEvNAVhtJP9/",
              "thumbnailUrl": null,
              "children": null
            }
          ]
        },
        {
          "id": "18353692900192410",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/472746785_17974537751803616_2728616511927000611_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=rqjED4IB62wQ7kNvgFhnKOj&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYDAR56kGnKNr1yrTK_rPCGgiYYnScFztdJlNsCRmZtn5Q&oe=6790EA9C",
          "username": "as_hoenheim_sports",
          "caption": "Large victoire de nos -18F face au SATH (51-18) 🎉😎",
          "timestamp": "2025-01-12T16:08:09Z",
          "permalink": "https://www.instagram.com/p/DEu09yaNFO2/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "17904443024999016",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra5-1.cdninstagram.com/v/t51.75761-15/473448503_17974436399803616_4203244456825622855_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=g4BgFqHsjxQQ7kNvgGrbT-o&_nc_zt=23&_nc_ht=scontent-fra5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYB0t3BaYPFREn_6OnTOVNfbQBRwGSm9eld74yc4v6cGXQ&oe=6790C152",
          "username": "as_hoenheim_sports",
          "caption": "Première de l’année réussie pour nos -18M qui enchaînent parfaitement en poule haute contre Marckolsheim (38-19) ☄️🫡",
          "timestamp": "2025-01-11T21:31:49Z",
          "permalink": "https://www.instagram.com/p/DEs1Nh-Ntz7/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "17859022047342068",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/473428622_17974393013803616_3148399721651186157_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=rkVAYZXKicwQ7kNvgFXT6Kd&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYC5DbVPvoTA3xZp2q-uu90Ijaz9HXoVzGeu4bVdDqIacw&oe=6790C9E8",
          "username": "as_hoenheim_sports",
          "caption": "Superbe victoire de nos -13M face à Marckolsheim (28-17) 💪🏽🔥",
          "timestamp": "2025-01-11T14:24:42Z",
          "permalink": "https://www.instagram.com/p/DEsEVKXt5b_/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "18054658576973235",
          "mediaType": "CAROUSEL_ALBUM",
          "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/472711810_17974058918803616_2582203585564627631_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=2lsqxAqiFIcQ7kNvgEEYbOa&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYBBtlTH7tH9ZSz8biZeS46IWqHgVrHqFLK3x-7j_OScbw&oe=6790E5D7",
          "username": "as_hoenheim_sports",
          "caption": "Au cœur de l’ASHS 📰 - Décembre 2024",
          "timestamp": "2025-01-08T21:45:59Z",
          "permalink": "https://www.instagram.com/p/DElIckENjV_/",
          "thumbnailUrl": null,
          "children": [
            {
              "id": "17943889976929090",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/472711810_17974058918803616_2582203585564627631_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=2lsqxAqiFIcQ7kNvgEEYbOa&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=A1m_dQ6Ksj9gC6E8Juom4ko&oh=00_AYDZ5kMqP1Eh_y7cEK9ldN0D-WRx7O29u5ube3yyAq9Oiw&oe=6790E5D7",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-08T21:45:57Z",
              "permalink": "https://www.instagram.com/p/DElIcXjtppB/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18089657395537255",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/472761833_17974058927803616_88521085312899170_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=BW85_og4PGkQ7kNvgGQrkHZ&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=A1m_dQ6Ksj9gC6E8Juom4ko&oh=00_AYDkAZ01o1ZtTGSG-J_rfGjRMpTybZSTiDvP7hojy0R6_g&oe=6790EAF6",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-08T21:45:57Z",
              "permalink": "https://www.instagram.com/p/DElIcXktASh/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "17934971738968103",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra5-1.cdninstagram.com/v/t51.75761-15/472988084_17974058936803616_8356736128322677233_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=eLxspZ2fDHAQ7kNvgEeOJxp&_nc_zt=23&_nc_ht=scontent-fra5-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=A1m_dQ6Ksj9gC6E8Juom4ko&oh=00_AYDmAZAcje37wqTuWtejURbhMJtaHmprjJOjqiYyKqql_g&oe=6790BE99",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-08T21:45:57Z",
              "permalink": "https://www.instagram.com/p/DElIcXktc9S/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "17949749096914677",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/472750160_17974058945803616_6955365478597178924_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=K-eM1Ru63D4Q7kNvgHl3RkE&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=A1m_dQ6Ksj9gC6E8Juom4ko&oh=00_AYB1rmXuL5dfvsSRBtI_RuqqwdJyEMyYfjPIQIKCU-lfYw&oe=6790C465",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-08T21:45:57Z",
              "permalink": "https://www.instagram.com/p/DElIcXlN45o/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18159698614329983",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra5-1.cdninstagram.com/v/t51.75761-15/472716759_17974058954803616_3722793532843587523_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=2jyIcvFpyTwQ7kNvgG-wzDY&_nc_zt=23&_nc_ht=scontent-fra5-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=A1m_dQ6Ksj9gC6E8Juom4ko&oh=00_AYDOmCcjogjEMX_k-IE4kqL-CBzkbXVUW_I5opnPuT6UpQ&oe=6790B9F7",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-08T21:45:57Z",
              "permalink": "https://www.instagram.com/p/DElIcXytI15/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18465087295066171",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/472974365_17974058963803616_3754537689701758619_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=YYV7gxVMXc8Q7kNvgFf4S2e&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=A1m_dQ6Ksj9gC6E8Juom4ko&oh=00_AYDMzgIOHjHhrc5O4G3bgnuervRFReFxkbcDHXmiLHH6XQ&oe=6790DC02",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-08T21:45:57Z",
              "permalink": "https://www.instagram.com/p/DElIcXqNS3J/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18257071996277446",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/472521477_17974058972803616_5744844054228496663_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=8Xh2AjfvYMoQ7kNvgEySA9j&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=A1m_dQ6Ksj9gC6E8Juom4ko&oh=00_AYB6UfKD1GHpI2E18q-M5aIt-e3ddUX1x8NrLoUAZRXHDw&oe=6790E6C6",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-08T21:45:57Z",
              "permalink": "https://www.instagram.com/p/DElIcXztK9U/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "17921080055918694",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra5-1.cdninstagram.com/v/t51.75761-15/472767390_17974058981803616_5504349896574458002_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=psNZq-2c5iMQ7kNvgEniiRH&_nc_zt=23&_nc_ht=scontent-fra5-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=A1m_dQ6Ksj9gC6E8Juom4ko&oh=00_AYB3qbOdf5hlfp7hvTbkkNGctfuig_oAA8F1ltvL0CarpQ&oe=6790D124",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-08T21:45:57Z",
              "permalink": "https://www.instagram.com/p/DElIcXlNPWW/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18081255910581434",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/473026400_17974058990803616_7495488502695392988_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=BiHmq-kbfHMQ7kNvgEQIzMK&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=A1m_dQ6Ksj9gC6E8Juom4ko&oh=00_AYAiEFSQiow0vgs0Hczl0VDYKSiRK01GIP7gJeHJ9yqIBQ&oe=6790C890",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-08T21:45:57Z",
              "permalink": "https://www.instagram.com/p/DElIcXktGZA/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18063922762893894",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/472769062_17974058999803616_5283835470582678271_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=YM7NUZWjMScQ7kNvgGIDLk2&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=A1m_dQ6Ksj9gC6E8Juom4ko&oh=00_AYDpj82rhWHgIjwLCZO9divL6nD5iN0ZAO06fnUAzosVnQ&oe=6790CFCF",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-08T21:45:57Z",
              "permalink": "https://www.instagram.com/p/DElIcXltgEu/",
              "thumbnailUrl": null,
              "children": null
            }
          ]
        },
        {
          "id": "18029307014256257",
          "mediaType": "CAROUSEL_ALBUM",
          "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/472443805_17973817145803616_2624139084274719479_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=EGiLM4W7EeYQ7kNvgHA0nt3&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYDmuGajSpZcT-g2RAIvr14xAmZBJR3roLwEYYzE0KW-DA&oe=6790D298",
          "username": "as_hoenheim_sports",
          "caption": "𝐏𝐑𝐎𝐆𝐑𝐀𝐌𝐌𝐄 𝐃𝐔 𝐖𝐄𝐄𝐊-𝐄𝐍𝐃 📆\n\nFini les fêtes de fin d’année, il est temps pour la plupart de nos équipes de repartir au boulot 💪⏳\nVenez en nombre les encourager 🗣️\n\nBons matchs à toutes et à tous 🖤🤍",
          "timestamp": "2025-01-06T21:08:23Z",
          "permalink": "https://www.instagram.com/p/DEf6jbYNBf9/",
          "thumbnailUrl": null,
          "children": [
            {
              "id": "17983500890635628",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/472443805_17973817145803616_2624139084274719479_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=EGiLM4W7EeYQ7kNvgHA0nt3&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=AI8pwi-OSKK0ZWBLlg2A10D&oh=00_AYAjq3-bGtXyJt7-yMt9jkZ1ItqJUvhX3NNw_Fw51bJ8wQ&oe=6790D298",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-06T21:08:21Z",
              "permalink": "https://www.instagram.com/p/DEf6jQht5ay/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "17999509505559977",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/472595741_17973817154803616_3007690606262534219_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=gHO5HamQOgUQ7kNvgEGDdKp&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=AI8pwi-OSKK0ZWBLlg2A10D&oh=00_AYBdlEj3jFF7aT9o3bQWVGUKrOL2vVgqPyHENi6-4rujrw&oe=6790C5FC",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-06T21:08:21Z",
              "permalink": "https://www.instagram.com/p/DEf6jQrN2ER/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "17903971724998561",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/470956144_17973817163803616_5622390026842190779_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=4wmQ2YJzTy4Q7kNvgEd_dek&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=AI8pwi-OSKK0ZWBLlg2A10D&oh=00_AYCUtRohb388Vr-2JXKFR8u4y5HQDeoeNNSciz4-_TjWBQ&oe=6790E60A",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2025-01-06T21:08:21Z",
              "permalink": "https://www.instagram.com/p/DEf6jQityUW/",
              "thumbnailUrl": null,
              "children": null
            }
          ]
        },
        {
          "id": "18023712068322551",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/470332614_17970892091803616_455008513141595661_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=ZvAkyIFZLfwQ7kNvgFRI6EY&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYDdTQ1qejG9vzm-8ZlLm9dd-qKPOIpD3yQm1fzl1zz40g&oe=6790C9F7",
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
          "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/470274162_17970890969803616_2887944888945169786_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=gYHN-7uF3ycQ7kNvgF0ujdE&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYD0ABkWrm_YO7GnDul9WhCQmT2JvGoV69ydPxvAuPEO9g&oe=6790B5DB",
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
          "mediaUrl": "https://scontent-fra3-2.cdninstagram.com/v/t51.75761-15/470094099_17970790673803616_531511440582512521_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=wTt5oPA72zAQ7kNvgH3gAKb&_nc_zt=23&_nc_ht=scontent-fra3-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYA43cCIEP0v5VhqSWd_QkiZrWyYH60TF72FlNrXwrAVVg&oe=6790ECAF",
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
          "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/470271455_17970789203803616_9221003665061586778_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=OwdY3wBaLrYQ7kNvgF6f7xX&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYAW3NQlaKOEa6dvhHIJTw5rAFH87-a7XzaQhqZw_5krjw&oe=6790C9AC",
          "username": "as_hoenheim_sports",
          "caption": "𝐎𝐛𝐣𝐞𝐜𝐭𝐢𝐟 𝟐𝐞̀𝐦𝐞 𝐩𝐥𝐚𝐜𝐞 🎯\n\nNos SM1 s’attendaient à un gros duel face à la réserve de Plobsheim, et ça a été le cas ! Solide prestation pour Hoenheim qui s’impose au terme d’un match maîtrisé de bout en bout (34-28) 🫡",
          "timestamp": "2024-12-15T00:31:04Z",
          "permalink": "https://www.instagram.com/p/DDlDd2DNOBr/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "18034791335110746",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra5-1.cdninstagram.com/v/t51.75761-15/470095922_17970776816803616_2529311784902417936_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=zL961SrDBqsQ7kNvgF2mY_c&_nc_zt=23&_nc_ht=scontent-fra5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYDSk0p7PLqJjfMYEBRjJMu1cMmGi0zaTv4EbqIXaPkbPQ&oe=6790C8E7",
          "username": "as_hoenheim_sports",
          "caption": "Large victoire de nos SM5 contre Durstel 2 (49-26) 🍻🥳",
          "timestamp": "2024-12-14T21:16:04Z",
          "permalink": "https://www.instagram.com/p/DDktJmRNiVt/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "17952523523856982",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/470341164_17970566948803616_1248972276373809633_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=gmejUAR_r2EQ7kNvgHppa49&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYAtydCwyUFexZbgPHfcZPX03GP6lIIXhnr8A2DKwLKOkw&oe=6790E1EC",
          "username": "as_hoenheim_sports",
          "caption": "𝐉𝐎𝐔𝐑 𝐃𝐄 𝐌𝐀𝐓𝐂𝐇𝐒 𝐒𝐌𝟏/𝐒𝐅𝟏 🤩\n\nTrès grosse confrontation pour nos SM1 dans un derby contre la réserve de Plobsheim, deuxième place en vue ! Notre SF1 devra rebondir contre Hochfelden pour solidifier sa place au classement 🖤🤍\n\n𝟏𝐞𝐫 𝐦𝐚𝐭𝐜𝐡 - 𝐒𝐌𝟏\n⏰ 19h \n🏆 Prénationale Grand-Est\n🆚 @poc_handball 2\n\n𝟐𝐞̀𝐦𝐞 𝐦𝐚𝐭𝐜𝐡 - 𝐒𝐅𝟏 \n⏰ 21h \n🏆 Nationale 3 Territoriale \n🆚 @hochfelden_handball \n\n📍Gymnase municipal \n🍻 Buvette et tartes flambées dès 18h30\n\nNe manquez pas ce rendez-vous pour pousser nos deux équipes fanions vers la victoire ⚔️\n\nVenez nombreuses et nombreux les supporter 🗣️🥁\n\n𝐀̀ 𝐬𝐚𝐦𝐞𝐝𝐢 𝐚𝐮 𝐠𝐲𝐦𝐧𝐚𝐬𝐞 𝐦𝐮𝐧𝐢𝐜𝐢𝐩𝐚𝐥 👋",
          "timestamp": "2024-12-13T09:42:09Z",
          "permalink": "https://www.instagram.com/p/DDg48YhNra8/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "18322764481083282",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/469745338_17970003251803616_9054427416514995729_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=Y_OpN7rjgqcQ7kNvgH5a1ur&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYASgOJLCMqBMizjflY-iZ52r6W7gLvq_tHnf8mU_legjw&oe=6790D689",
          "username": "as_hoenheim_sports",
          "caption": "Victoire aussi pour nos SF3 en déplacement à Haguenau (21-30) 🍾🙌",
          "timestamp": "2024-12-08T18:29:36Z",
          "permalink": "https://www.instagram.com/p/DDU9VFaNCYI/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "17936879420829399",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra5-1.cdninstagram.com/v/t51.75761-15/469714321_17970002924803616_2116592214969686127_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=lrCGtrgoWFEQ7kNvgEoxjOL&_nc_zt=23&_nc_ht=scontent-fra5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYDYgKQDlICjqbCMBKZck5S-ZMWSH_4J9RlhHC5ZEtqJWA&oe=6790D412",
          "username": "as_hoenheim_sports",
          "caption": "Belle réaction de nos SF2, pourtant malmenées une grande partie de la rencontre. Elles s’imposent face à la réserve de Strasbourg Sud (19-25) 🤙🥳",
          "timestamp": "2024-12-08T18:25:07Z",
          "permalink": "https://www.instagram.com/p/DDU80QMtvJS/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "17876756421210750",
          "mediaType": "CAROUSEL_ALBUM",
          "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/469608260_17969893355803616_5911382284038380904_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=lvuqKsSYb9wQ7kNvgG2EoZ-&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYBd1kDtuwvkOTx6pSvEAPgvuYvefaqavdjkUPwhG9Ffgg&oe=6790E388",
          "username": "as_hoenheim_sports",
          "caption": "𝐏𝐚𝐫𝐭𝐨𝐮𝐭 𝐜𝐡𝐞𝐳 𝐧𝐨𝐮𝐬 💥\n\nNos SM1 sont allés s’imposer à Lingolsheim dans un match engagé des deux côtés. Grosse victoire de nos gars avec leurs supporters (23-31) 🫡💪",
          "timestamp": "2024-12-07T22:51:42Z",
          "permalink": "https://www.instagram.com/p/DDS2h6zNKgn/",
          "thumbnailUrl": null,
          "children": [
            {
              "id": "18051614891065827",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/469608260_17969893355803616_5911382284038380904_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=lvuqKsSYb9wQ7kNvgG2EoZ-&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=ATQPS1OI_KYdZh-z_yCEfN5&oh=00_AYD4nLIkaeO3Kusx867gh8sLRF_rS5V4oVBe0A7M85MLZQ&oe=6790E388",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2024-12-07T22:51:41Z",
              "permalink": "https://www.instagram.com/p/DDS2h1ttED_/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18048442639886223",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-2.cdninstagram.com/v/t51.75761-15/469727023_17969893364803616_1001638290129244930_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=tRos4eZ_fcEQ7kNvgH3TEYv&_nc_zt=23&_nc_ht=scontent-fra3-2.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=ATQPS1OI_KYdZh-z_yCEfN5&oh=00_AYDRY4HmzOfru1RvwjZ4Ef0_FZ9fGlOxSbGzBOSBW5ShzA&oe=6790ECBE",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2024-12-07T22:51:41Z",
              "permalink": "https://www.instagram.com/p/DDS2h1ut4_p/",
              "thumbnailUrl": null,
              "children": null
            }
          ]
        },
        {
          "id": "17950487135865678",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra3-2.cdninstagram.com/v/t51.75761-15/469635953_17969893016803616_9132301730197818438_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=o1Vbjb7TbUYQ7kNvgF1ukVu&_nc_zt=23&_nc_ht=scontent-fra3-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYB4ekEzl-_oykzsGDWk8TfRqAEUDOL9_-5BwoHPnje2Pw&oe=6790D00D",
          "username": "as_hoenheim_sports",
          "caption": "Victoire de nos SM5 à Seltz (23-45) 🍾",
          "timestamp": "2024-12-07T22:41:15Z",
          "permalink": "https://www.instagram.com/p/DDS1VXotYNr/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "18037599749069565",
          "mediaType": "CAROUSEL_ALBUM",
          "mediaUrl": "https://scontent-fra3-2.cdninstagram.com/v/t51.75761-15/469506841_17969832998803616_4616725210694849642_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=DWu1gMkW66QQ7kNvgFBTewI&_nc_zt=23&_nc_ht=scontent-fra3-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYA6u7EHoZIgajXi2cigQ28cF44Xye4QQXDO9cgXbjvD7w&oe=6790D96B",
          "username": "as_hoenheim_sports",
          "caption": "𝐏𝐀𝐑𝐓𝐄𝐍𝐀𝐈𝐑𝐄 🤝\n \nNos -15F remercient leur sponsor @superuhoenheim pour le survêtement 🙏\n \n☐ 𝐒𝐔𝐏𝐄𝐑 𝐔 𝐇𝐎𝐄𝐍𝐇𝐄𝐈𝐌 : 13 route de La Wantzenau. \nN’hésitez pas à aller y faire un tour 😁\n\nMerci à eux d’accompagner notre équipe 👊",
          "timestamp": "2024-12-07T12:59:17Z",
          "permalink": "https://www.instagram.com/p/DDRyu_Bts1K/",
          "thumbnailUrl": null,
          "children": [
            {
              "id": "17846027034365644",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-2.cdninstagram.com/v/t51.75761-15/469506841_17969832998803616_4616725210694849642_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=DWu1gMkW66QQ7kNvgFBTewI&_nc_zt=23&_nc_ht=scontent-fra3-2.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=ANLd3UUkbMc9UW2J5NviNTx&oh=00_AYDOHhijNsZ0LhPv9BSTLLA4pSrX2p2R6Qnx8HVB72N43A&oe=6790D96B",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2024-12-07T12:59:17Z",
              "permalink": "https://www.instagram.com/p/DDRyu5iNhg0/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18047579480279169",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/469500334_17969833007803616_8369228072444516963_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=gNtHMrD0CkMQ7kNvgHMS9Eh&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=ANLd3UUkbMc9UW2J5NviNTx&oh=00_AYAtEpy_09Vwa0p_UNygTonXxlt3l16DvrhHTGeyyNaZng&oe=6790D565",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2024-12-07T12:59:17Z",
              "permalink": "https://www.instagram.com/p/DDRyu5mtMXN/",
              "thumbnailUrl": null,
              "children": null
            }
          ]
        },
        {
          "id": "18319428637092863",
          "mediaType": "CAROUSEL_ALBUM",
          "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/469495237_17969741561803616_6666263317366157721_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=ukSelcY-zZ8Q7kNvgEewknG&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYBVcgmD-G-c5KGKfa0gq95eJ6QLcaTx0Qk_gAIv1c0Jyw&oe=6790E821",
          "username": "as_hoenheim_sports",
          "caption": "Au cœur de l’ASHS 📰 - Novembre 2024",
          "timestamp": "2024-12-06T18:23:09Z",
          "permalink": "https://www.instagram.com/p/DDPzAKSt8ze/",
          "thumbnailUrl": null,
          "children": [
            {
              "id": "18048587977887238",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/469495237_17969741561803616_6666263317366157721_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=ukSelcY-zZ8Q7kNvgEewknG&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=AEOALK7XPN5CduutLIhtUWC&oh=00_AYAJbFW0GWVhlEMKesY5VjGA0u4H0lWnOJ4UQkH0-BPHEQ&oe=6790E821",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2024-12-06T18:23:07Z",
              "permalink": "https://www.instagram.com/p/DDPy_9PtLlA/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18036919151519744",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/469708441_17969741558803616_6318217773132901125_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=D2r7mld1wgEQ7kNvgFVZEqr&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=AEOALK7XPN5CduutLIhtUWC&oh=00_AYC3JFedWDB447lkN7ThePsICbw-6bf-O6PYjw0beR4vog&oe=6790DD6A",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2024-12-06T18:23:07Z",
              "permalink": "https://www.instagram.com/p/DDPy_9QtBs_/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "17848405824332875",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-2.cdninstagram.com/v/t51.75761-15/469498612_17969741531803616_1297799777653533398_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=SDSA-pxxNn4Q7kNvgFSqKbq&_nc_zt=23&_nc_ht=scontent-fra3-2.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=AEOALK7XPN5CduutLIhtUWC&oh=00_AYCsJbHjoMYCNdsFb7_YFKwRz1XMB7FGICKq5lpJKAaPuA&oe=6790EAC3",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2024-12-06T18:23:07Z",
              "permalink": "https://www.instagram.com/p/DDPy_9PNacE/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18447578860069755",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-2.cdninstagram.com/v/t51.75761-15/469497900_17969741555803616_2277643959039618048_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=sWeFKDwHjSYQ7kNvgHZnJLw&_nc_zt=23&_nc_ht=scontent-fra3-2.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=AEOALK7XPN5CduutLIhtUWC&oh=00_AYCXhnsRt4iG4WYsjXiHFkFmF4_Kp5hNHtRDvMlqZsFHiA&oe=6790D109",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2024-12-06T18:23:07Z",
              "permalink": "https://www.instagram.com/p/DDPy_9ZN8LW/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18038907254199349",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-2.cdninstagram.com/v/t51.75761-15/469634547_17969741627803616_6593668652998707491_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=1sPdU4VoRyAQ7kNvgG6gIXO&_nc_zt=23&_nc_ht=scontent-fra3-2.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=AEOALK7XPN5CduutLIhtUWC&oh=00_AYA0VSbhfpOSJelwVY8dBtb05R1HZUpmW3yO4AV7pqwdxg&oe=6790D9E8",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2024-12-06T18:23:07Z",
              "permalink": "https://www.instagram.com/p/DDPy_9RNm00/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18053757037813550",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/469412849_17969741633803616_2091005328155396709_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=Th3UvUDwdgMQ7kNvgGlUjwj&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=AEOALK7XPN5CduutLIhtUWC&oh=00_AYCZCODwM4eH9kcUVuzGbTfkRRY2JvaE_bsSpdk2_ANgdg&oe=6790E6B1",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2024-12-06T18:23:07Z",
              "permalink": "https://www.instagram.com/p/DDPy_9PtkQW/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "18055009993769675",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/469630766_17969741666803616_8323495001530653023_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=JSwikIsYoa4Q7kNvgHaNQjI&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=AEOALK7XPN5CduutLIhtUWC&oh=00_AYDMljp7oDBYYA_LrRiJ-QWZAsGe1tMpdHcBTF_mn9Xi1g&oe=6790C669",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2024-12-06T18:23:07Z",
              "permalink": "https://www.instagram.com/p/DDPy_9OtD3g/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "17893985937038607",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/469414871_17969741657803616_5152388522632984063_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=fi32hmzZoJQQ7kNvgEQcziD&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=AEOALK7XPN5CduutLIhtUWC&oh=00_AYAK3jEajwEn8i3PpmsQRjoTH0rXrlXyvhjGTxMGbzRltg&oe=6790BFC8",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2024-12-06T18:23:07Z",
              "permalink": "https://www.instagram.com/p/DDPy_9QNv-X/",
              "thumbnailUrl": null,
              "children": null
            },
            {
              "id": "17922060473901928",
              "mediaType": "IMAGE",
              "mediaUrl": "https://scontent-fra3-1.cdninstagram.com/v/t51.75761-15/469410155_17969741675803616_5779300691834053951_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=X5igsTj5CUMQ7kNvgFIyCW3&_nc_zt=23&_nc_ht=scontent-fra3-1.cdninstagram.com&edm=ABbrh9MEAAAA&_nc_gid=AEOALK7XPN5CduutLIhtUWC&oh=00_AYCi8BkHK_oWTGvUQOl9MU0NfbLqEATP3TBa1QF-qFH4ug&oe=6790DC36",
              "username": "as_hoenheim_sports",
              "caption": null,
              "timestamp": "2024-12-06T18:23:07Z",
              "permalink": "https://www.instagram.com/p/DDPy_9Ot92N/",
              "thumbnailUrl": null,
              "children": null
            }
          ]
        },
        {
          "id": "18021589274328422",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra3-2.cdninstagram.com/v/t51.75761-15/469087156_17969202542803616_7041049674152477748_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=jmyEQTdt7ccQ7kNvgFsA8TA&_nc_zt=23&_nc_ht=scontent-fra3-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYCwh0_E0_Kj5P428datzhI8uaw1NnMty8flW0lR6WISag&oe=6790ECA4",
          "username": "as_hoenheim_sports",
          "caption": "𝐅𝐄̂𝐓𝐄 𝐃𝐄 𝐍𝐎𝐄𝐋 🎄🎅🏻\n\nLa fête de Noël du club aura lieu samedi 14 décembre, à partir de 14h. Cet évènement est destiné à toutes les équipes, jeunes et adultes. C’est une occasion pour tous les membres du club de se réunir dans un cadre festif 🥳\n\nAu programme :\n- Des matchs et animations, de 14h à 17h30, pour tous les âges 🤾‍♀️\n- Un goûter et notre traditionnel concours de gâteaux 🍰\nLes participants sont invités à apporter leurs gâteaux.\n\nLa soirée se terminera par les matchs de nos deux équipes une. Nos SM1 pour un gros derby contre la réserve de Plobsheim. Et nos SF1 face à Hochfelden/Dettwiller ⚡️\n\nBuvette et restauration sur place 🍻🍽️\n\nNous vous attendons nombreuses et nombreux pour cette fête de Noël ✨",
          "timestamp": "2024-12-02T10:29:23Z",
          "permalink": "https://www.instagram.com/p/DDEpmvEtjG2/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "18188153758307388",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/469087158_17969122271803616_1814117909404935551_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=e7IwsprsjOgQ7kNvgG8w2Fu&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYArO0JjCqe2BrfmdrOm2HJRNsYjvkBnttO-F_lnzmXmRQ&oe=6790E7D2",
          "username": "as_hoenheim_sports",
          "caption": "Encore une solide victoire pour nos SF2 qui s’imposent contre Ingwiller/Bouxwiller (31-28) 👏",
          "timestamp": "2024-12-01T17:32:22Z",
          "permalink": "https://www.instagram.com/p/DDC1N3WtvFH/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "18151330597339179",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra3-2.cdninstagram.com/v/t51.75761-15/468900778_17969121965803616_1153921999090500214_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=lHh87EK9dVIQ7kNvgF5xGWI&_nc_zt=23&_nc_ht=scontent-fra3-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYBHckR36vdGqydMVTmXtXh1-ZVK2ksyk-fH1EbAb7qf-g&oe=6790C44C",
          "username": "as_hoenheim_sports",
          "caption": "Il n’y a pas eu match cet après-midi pour nos SF3. Victoire écrasante contre Ingwiller/Bouxwiller 2 (37-8) 🍾💪",
          "timestamp": "2024-12-01T17:29:27Z",
          "permalink": "https://www.instagram.com/p/DDC04fPtAPl/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "18065244472690822",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/468906965_17969013206803616_7960859415861833414_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=6uhza6NuoNQQ7kNvgFv3ZHU&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYAko70bRFWRiy2-96Vngm4qowJDdBGt1A68BZInGs3faQ&oe=6790E06C",
          "username": "as_hoenheim_sports",
          "caption": "Ça continue pour nos SM1 🫡 Grosse victoire face à @burnhaupt.handball (33-27) 🖤🤍",
          "timestamp": "2024-11-30T22:22:52Z",
          "permalink": "https://www.instagram.com/p/DDAxqrEthen/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "18044966534322836",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra5-1.cdninstagram.com/v/t51.75761-15/468912723_17969013143803616_6261063259921057695_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=izv13XG0qUEQ7kNvgHfpRWv&_nc_zt=23&_nc_ht=scontent-fra5-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYA7t2Vcb3ZaiFj8cus0BV5leuXWzxviJ9MCxFN0CZ5FBg&oe=6790CC06",
          "username": "as_hoenheim_sports",
          "caption": "On enchaîne sur une troisième victoire pour nos SF1 à domicile (37-25) face à @thann_handball_club 💪🏽🫡🔥",
          "timestamp": "2024-11-30T22:20:10Z",
          "permalink": "https://www.instagram.com/p/DDAxW1MtwlF/",
          "thumbnailUrl": null,
          "children": null
        },
        {
          "id": "18062230630836575",
          "mediaType": "IMAGE",
          "mediaUrl": "https://scontent-fra5-2.cdninstagram.com/v/t51.75761-15/468559400_17968702757803616_6899346226829144165_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=MeOTq4tlSFYQ7kNvgHKfL6A&_nc_zt=23&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ALmrtPWYRxr0yQuH79e2KuI&oh=00_AYC0xClWh0uP05UPwAfk1GL2GiBWcqRwCLW9c6anmErQcA&oe=6790B80E",
          "username": "as_hoenheim_sports",
          "caption": "𝐉𝐎𝐔𝐑 𝐃𝐄 𝐌𝐀𝐓𝐂𝐇𝐒 𝐒𝐌𝟏/𝐒𝐅𝟏 🤩\n\nAdversaire de taille pour nos SM1 qui devront s’employer pour consolider leur place sur le podium. Pour nos SF1, il faudra poursuivre la bonne série de victoires en cours 🖤🤍\n\n𝟏𝐞𝐫 𝐦𝐚𝐭𝐜𝐡 - 𝐒𝐌𝟏\n⏰ 19h \n🏆 Prénationale Grand-Est\n🆚 @burnhaupt.handball \n\n𝟐𝐞̀𝐦𝐞 𝐦𝐚𝐭𝐜𝐡 - 𝐒𝐅𝟏 \n⏰ 21h \n🏆 Nationale 3 Territoriale \n🆚 @thann_handball_club \n\n📍Gymnase municipal \n🍻🍚🍗 Buvette et riz/poulet pour le repas \n\nNe manquez pas ce rendez-vous pour pousser nos deux équipes fanions vers la victoire ⚔️\n\nNotre SM5 jouera en ouverture à 17h alors venez nombreuses et nombreux les supporter 🗣️🥁\n\n𝐀̀ 𝐬𝐚𝐦𝐞𝐝𝐢 𝐚𝐮 𝐠𝐲𝐦𝐧𝐚𝐬𝐞 𝐦𝐮𝐧𝐢𝐜𝐢𝐩𝐚𝐥 👋",
          "timestamp": "2024-11-28T13:53:19Z",
          "permalink": "https://www.instagram.com/p/DC6tw1JNxUq/",
          "thumbnailUrl": null,
          "children": null
        }
      ]
    ).pipe(
      map(data =>
        data.map(item => this.transformToMedia(item))
      )
    );
  }
  private transformToMedia(item: any): Media {
    return {
      id: item.id,
      mediaType: MediaType[item.mediaType as keyof typeof MediaType], // Conversion en énumération
      mediaUrl: item.mediaUrl,
      username: item.username,
      caption: item.caption,
      timestamp: item.timestamp,
      permalink: item.permalink,
      thumbnailUrl: item.thumbnailUrl,
      children: item.children
        ? item.children.map((child: any) => this.transformToMedia(child))
        : null,
    };
  }
}
