document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const movieGrid = document.getElementById("movieGrid");
    const suggestionsContainer = document.getElementById("suggestions");

    // Liste des films
    const movies = [
        { title: "MUSTAPHA EL ATRASSI  QUE DU SALE", url: "spectacle/MUSTAPHAELATRASSIQUEDUSALE.html", image: "https://media.senscritique.com/media/000021472398/300/que_du_sale.jpg" },
        { title: "MUSTAPHA EL ATRASSI  COMMUNAUTAIRE", url: "spectacle/MUSTAPHAELATRASSICOMMUNAUTAIRE.html", image: "https://www.h264distribution.com/wp-content/uploads/2023/06/COMMUNAUTAIRE-Affiche.png" },
        { title: "MUSTAPHA EL ATRASSI  GAME OVER ", url: "spectacle/MUSTAPHAELATRASSIGAMEOVER.html", image: "https://www.h264distribution.com/wp-content/uploads/2023/05/MEA_AFF_1000x1440_GAMEOVER.png" },
        { title: "REDOUANE BOUGHERABA ON M'APPELLE MARSEILLE ", url: "spectacle/REDOUANEBOUGHERABA.html", image: "https://m.media-amazon.com/images/S/pv-target-images/6dec300ab8931248db096732cad53eef4fdc92b65e9b94bbadfd5aa5c8c9fcfd.jpg" },
        { title: "INES REG  HORS NORMES ", url: "spectacle/INESREGHORSNORMES.html", image: "https://img.seriebox.com/films/97/97966/affich_97966_2.jpg" },
        { title: "LAURA FELPIN   ÇA PASSE ", url: "spectacle/LAURAFELPINÇAPASSE.html", image: "https://media.senscritique.com/media/000022172340/0/laura_felpin_ca_passe.jpg" },
        { title: "FARY  AIME-MOI SI TU PEUX ", url: "spectacle/FARYAIMEMOISITUPEUX.html", image: "https://img.mapado.net/2023/6/20/6491a6579160c-40x60-fary-tournee-inter-vf-ok-web.jpeg" },
        { title: "Thomas VDB s'acclimate  ", url: "spectacle/Thomas.html", image: "https://www.billetreduc.com/zg/n180/vz-A7686D5E-C798-4709-A3B3-D68F8AF152FF.jpeg" },
        { title: "Booder Is Back ", url: "spectacle/Booder.html", image: "https://www.ville-yutz.fr/wp-content/uploads/2022/06/booder.jpg" },
        { title: "Dédo - Biafine ", url: "spectacle/Dedo.html" , image: "https://lartdutheatre.fr/wp-content/uploads/2021/07/Dedo-LArt-D%C3%BB-Th%C3%A9%C3%A2tre-Stand-Up-Humour-Biafine-13006.jpg"},
        { title: "Florence Foresti  Boys Boys Boys ", url: "spectacle/FlorenceForesti.html", image: "https://www.esc-distribution.com/15512/florence-foresti-spectacle-boys-boys-boys-dvd.jpg" },
        { title: "Kamel le magicien  Crois en tes rêves ", url: "spectacle/Kamellemagicien.html" , image: "https://www.familinparis.fr/wp-content/uploads/2022/10/spectacle-magie-enfant-kamel-le-magicien-2.jpg"},
        { title: "SENNA ", url: "documentaire/SENNA.html", image: "https://media.themoviedb.org/t/p/original/tb7wzwMtqPCcrvFwoc2PTnZnn0z.jpg" },
        { title: "LOST ON EVEREST  ", url: "documentaire/LOSTONEVEREST.html", image: "https://media.themoviedb.org/t/p/original/nI8ZnMvlVtbXZcZN55baRDbGPn3.jpg" },
        { title: "J'IRAI DORMIR CHEZ VOUS - SPÉCIALE ALGÉRIE ", url: "documentaire/JRAIDORMIRCHEZVOUSSPECIALEALGERIE.html", image: "https://i.imgur.com/3RzlZm2.jpeg" },
        { title: "JE SUIS  CÉLINE DION ", url: "documentaire/JESUISCELINEDION.html", image: "https://fr.web.img6.acsta.net/img/80/63/8063e4fbc4d75f3909ee88f4b5699499.jpg" },
        { title: "GAMESTOP ", url: "documentaire/GAMESTOP.html", image: "https://media.themoviedb.org/t/p/original/tsgWIDZTcgQUeGVhs5RaMO2TLmO.jpg" },
        { title: "Money Electric  The Bitcoin Mystery ", url: "documentaire/MoneyElectric.html", image: "https://fr.web.img4.acsta.net/c_310_420/img/49/38/4938620762262665379fc1653b78d159.jpg" },
        { title: "Harry Potter fête ses 20 ans  retour à Poudlard ", url: "documentaire/HarryPotterfeteses20ans.html", image: "https://www.themoviedb.org/t/p/original/xkohb3dtFG5S5aW61oGVqlqFhQK.jpg" },
        { title: "Martha Stewart, une icône américaine ", url: "documentaire/MarthaStewart.html", image: "https://media.themoviedb.org/t/p/original/4WN19oCTXlK8jXC0QZgNkBpcJcw.jpg" },
        { title: "Le Cyber-casse du siècle ", url: "documentaire/LeCybercasse.html", image: "https://media.themoviedb.org/t/p/original/wIS7g0i09afNbHQ9VHRnP8PErTs.jpg" },
        { title: "Sons of Ecstasy ", url: "documentaire/SonsofEcstasy.html", image: "https://i.imgur.com/ve05cPL.png" },
        { title: "Riverboom ", url: "documentaire/Riverboom.html", image: "https://fr.web.img4.acsta.net/img/50/dc/50dc46825c6294453313d4725d3c9039.jpg" },
        { title: "ULTRAMAN   RISING ", url: "animation/ULTRAMANRISING.html", image: "https://fr.web.img5.acsta.net/img/ce/c5/cec5e1809de86b02a3d72da04c852473.jpg" },
        { title: "ROSE, PETITE FÉE DES FLEURS ", url: "animation/ROSE.html", image: "https://fr.web.img6.acsta.net/c_310_420/pictures/23/12/21/11/36/4465693.jpg" },
        { title: "LÉO, LA FABULEUSE HISTOIRE DE LÉONARD DE VINCI ", url: "animation/LEO.html", image: "https://fr.web.img6.acsta.net/pictures/23/11/07/16/21/1931517.jpg" },
        { title: "LE ROYAUME DES ABYSSES ", url: "animation/LEROYAUMEDESABYSSES.html", image: "https://fr.web.img6.acsta.net/pictures/23/12/01/14/15/3412210.jpg"},
        { title: "LE GARÇON ET LE HÉRON ", url: "animation/LEGARÇONETLEHERON.html", image: "https://fr.web.img6.acsta.net/pictures/23/10/16/15/34/4707733.jpg" },
        { title: "L'IMAGINAIRE ", url: "animation/LIMAGINAIRE.html", image: "https://a.storyblok.com/f/178900/450x630/86dc7c7663/limaginaire-affiche-france.jpg/m/filters:quality(95)format(webp)" },
        { title: "GARFIELD, HÉROS MALGRÉ LUI ", url: "animation/GARFIELD.html", image: "https://fr.web.img2.acsta.net/img/a8/48/a848eac086dc48b8b44caefdb9bdde3c.jpg" },
        { title: "SOUTH PARK  LA FIN DE L'OBÉSITÉ ", url: "animation/SOUTHPARKLAFINDELOBESITE.html", image: "https://fr.web.img4.acsta.net/img/3e/94/3e947bdce4f87ae132008ebfba92cc37.jpg" },
        { title: "Mystère sur la colline aux gâteaux ", url: "animation/Mysteresurlacollineauxgateaux.html", image: "https://fr.web.img6.acsta.net/img/f8/e2/f8e20fcbb3f9c9fa38e66154a13a412d.jpg" },
        { title: "Ellian et le sortilège  ", url: "animation/Ellian.html", image: "https://i0.wp.com/www.filmspourenfants.net/wp-content/uploads/2024/12/ellian-et-le-sortilege-a.jpg?fit=333%2C500&ssl=1" },
        { title: "Super Wings : Vitesse maximum ", url: "animation/SuperWings.html", image: "https://fr.web.img6.acsta.net/img/61/f5/61f51db4ff4f49bdc6db6ccee00d83f7.jpg" },
        { title: "Flow, le chat qui n'avait plus peur de l'eau ", url: "animation/Flow.html", image: "https://fr.web.img5.acsta.net/img/07/21/072124435e88c6c5b2a183198e0137fb.jpeg" },
        { title: "Mononoke, le film  Un fantôme sous la pluie ", url: "animation/Mononoke.html", image: "https://fr.web.img6.acsta.net/img/1b/e3/1be30b47fcee5dcf80a5a834ffc967e3.jpg" },
        { title: "Hitpig! ", url: "animation/Hitpig.html", image: "https://m.media-amazon.com/images/S/pv-target-images/570a3d9301221b05880f6c67453a93983635c9fafc6cbd4bd82834e561e5d6b8.jpg" },
        { title: "Mickey et ses amis  des bonbons ou un sort ", url: "animation/Mickey.html", image: "https://i0.wp.com/www.filmspourenfants.net/wp-content/uploads/2023/10/mickey-et-ses-amis-des-bonbons-ou-un-sort-a.jpg?fit=333%2C500&ssl=1" },
        { title: "That Christmas ", url: "DERNIERSAJOUTS/ThatChristmas.html", image: "https://m.media-amazon.com/images/M/MV5BZWJhMTY4Y2QtZmEwNi00YjA0LTg1ZDYtODEyMTNlYjY3Y2Q2XkEyXkFqcGc@._V1_.jpg" },
        { title: "Ghost Cat Anzu ", url: "DERNIERSAJOUTS/GhostCat.html", image: "https://m.media-amazon.com/images/M/MV5BNmZjOTMzMWQtMDVkYy00NjEzLWJkMTEtYTRiZGU4ZDNkNjU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
        { title: "Petit Panda en Afrique ", url: "animation/PetitPandaenAfrique.html", image: "https://fr.web.img5.acsta.net/img/44/a4/44a4dd91b73917298f23574d86a6c278.jpg" },
        { title: "Silex and the City, ", url: "animation/Silex.html", image: "https://fr.web.img3.acsta.net/img/c6/b7/c6b7c66812fcdcd8d0fb251ecdb7d8eb.jpg" },
        { title: "HAIKYÛ !! La Guerre des Poubelles ", url: "animation/HAIKYU.html", image: "https://fr.web.img5.acsta.net/img/5d/71/5d71d40b37a6a2714ae57199efa3fc27.jpg" },
        { title: "Wallace et Gromit  La palme de la vengeance ", url: "animation/WallaceetGromit.html", image: "https://fr.web.img3.acsta.net/img/db/ea/dbea496cdc9aefbdd2913622f506c6f3.jpg" },
        { title: "Les Indestructibles ", url: "animation/LesIndestructibles.html", image: "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/35/23/97/18391267.jpg" },
        { title: "Indestructibles 2 ", url: "animation/LesIndestructibles2.html", image: "https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg" },
        { title: "Pompo The Cinephile ", url: "animation/Pompo.html", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjeQjQq8oaH2dgYf23Lpe1XppiXWhvNiWqVg&s" },
        { title: "Croquette le chat merveilleux ", url: "animation/Croquette.html", image: "https://fr.web.img3.acsta.net/img/fb/73/fb73c13baf5763e2d0469f1917835ee3.jpg" },
        { title: "Dahomey ", url: "documentaire/Dahomey.html", image: "https://fr.web.img4.acsta.net/img/88/f6/88f6e4ca764bf450df61be38ec64aada.jpg" },
        { title: "Harry Potter et les Reliques de la mort  2ème partie ", url: "fantastique/HarryPotteretlesReliquesdelamort2emepartie.html", image: "https://fr.web.img3.acsta.net/medias/nmedia/18/78/64/49/19762436.jpg" },
        { title: "Harry Potter et les Reliques de la mort  1ère partie ", url: "fantastique/HarryPotteretlesReliquesdelamort1emepartie.html", image: "https://fr.web.img5.acsta.net/medias/nmedia/18/69/69/81/19590744.jpg" },
        { title: "Harry Potter et le Prince de sang-mêlé ", url: "fantastique/HarryPotteretlePrincedesangmele.html", image: "https://fr.web.img2.acsta.net/medias/nmedia/18/65/64/35/19116952.jpg" },
        { title: "Harry Potter et l'Ordre du Phénix ", url: "fantastique/HarryPotteretlOrdreduPhenix.html", image: "https://fr.web.img6.acsta.net/medias/nmedia/18/36/32/70/18778375.jpg" },
        { title: "Harry Potter et la Coupe de feu ", url: "fantastique/HarryPotteretlaCoupedefeu.html", image: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/52/34/18450888.jpg" },
        { title: "Harry Potter et le Prisonnier d'Azkaban ", url: "fantastique/HarryPotteretlePrisonnierdAzkaban.html", image: "https://fr.web.img6.acsta.net/medias/nmedia/18/35/23/41/18378380.jpg" },
        { title: "Harry Potter et la Chambre des secrets ", url: "fantastique/HarryPotteretlaChambredessecrets.html", image: "https://fr.web.img4.acsta.net/medias/nmedia/00/02/53/35/affiche0.jpg" },
        { title: "Harry Potter à l'école des sorciers ", url: "fantastique/HarryPotteralecoledessorciers.html", image: "https://m.media-amazon.com/images/M/MV5BMTgwNWM4NzQtMzc5Zi00ZmM1LWFjY2ItOWU0MTMwN2I5Y2Y3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
        { title: "The Portable Door ", url: "fantastique/Door.html", image: "https://m.media-amazon.com/images/M/MV5BZGJiZGFkZWUtMWU3NS00MzMwLWJmMDQtNTliMzhjMDhiOGFiXkEyXkFqcGc@._V1_.jpg" },
        { title: "La soeur des neiges ", url: "fantastique/neige.html", image: "https://m.media-amazon.com/images/M/MV5BOWMyMzMwOTQtNzViYS00NGQxLWI0NjYtZTVkZGQwMjAyZjkwXkEyXkFqcGc@._V1_.jpg" },
        { title: "The Magician's Raincoat ", url: "fantastique/TheMagician.html", image: "https://m.media-amazon.com/images/M/MV5BZmRhNjQwMDctNGEwZi00NjJjLWExMDAtNTY2Y2NiMDJlZTM4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
        { title: "Le Seigneur des anneaux  La Communauté de l'anneau ", url: "fantastique/LeSeigneurdesanneauxLaCommunautedelanneau.html", image: "https://fr.web.img6.acsta.net/medias/nmedia/00/02/16/27/69218096_af.jpg" },
        { title: " Le Seigneur des anneaux  Les Deux Tours ", url: "fantastique/LeSeigneurdesanneauxLesDeuxTours.html", image: "https://fr.web.img6.acsta.net/medias/nmedia/00/02/54/95/affiche2.jpg" },
        { title: "Le Seigneur des anneaux  Le Retour du roi ", url: "fantastique/LeSeigneurdesanneauxLeRetourduroi.html", image: "https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg" },
        { title: "Le Hobbit  Un voyage inattendu ", url: "fantastique/LeHobbitUnvoyageinattendu.html", image: "https://fr.web.img6.acsta.net/medias/nmedia/18/93/43/35/20273834.jpg" },
        { title: " Le Hobbit  La Désolation de Smaug ", url: "fantastique/LeHobbitLaDesolationdeSmaug.html", image: "https://fr.web.img4.acsta.net/pictures/210/552/21055250_20131106114016251.jpg" },
        { title: "Le Hobbit  La Bataille des cinq armées ", url: "fantastique/LeHobbitLaBatailledescinqarmees.html", image: "https://fr.web.img3.acsta.net/pictures/14/11/14/17/43/568445.jpg" },
        { title: "Le Seigneur des Anneaux  La Guerre des Rohirrim ", url: "fantastique/LeSeigneurdesAnneauxLaGuerredesRohirrim.html", image: "https://media.themoviedb.org/t/p/original/bcDGIZKQ959tnMn0qLl6GxOkbO3.jpg" },
        { title: "One and Four ", url: "fantastique/OneandFour.html", image: "https://media.themoviedb.org/t/p/original/2JSS2O70l2JpNiQcKD90LDPgzmQ.jpg" },
        { title: "Le Maître et Marguerite ", url: "fantastique/Marguerite.html", image: "https://media.themoviedb.org/t/p/original/sTsfH7qMPItnB8dRSnf9vNTP9oT.jpg" },
        { title: " Gremlins ", url: "fantastique/Gremlins.html", image: "https://media.themoviedb.org/t/p/original/2j9w1uIoMSEMrfFw1yXtiD1iAuE.jpg"},
        { title: "Gremlins 2   La Nouvelle Génération ", url: "fantastique/Gremlins2.html", image: "https://media.themoviedb.org/t/p/original/rSA6Rtmoz4awKWSFCs3SrqVSuS4.jpg" },
        { title: "Novembre ", url: "POLICIER/Novembre.html", image: "https://www.themoviedb.org/t/p/original/ylr0lRmfpmTzTI7A4J7UDjuO71F.jpg" },
        { title: "Cop Secret ", url: "POLICIER/CopSecret.html", image: "https://www.themoviedb.org/t/p/original/ere3KmNXEeJN8JX837jNXX1RryD.jpg" },
        { title: "Misanthrope ", url: "POLICIER/Misanthrope.html", image: "https://www.themoviedb.org/t/p/original/1r21VJFlFYa873wlq5tIblPLAGP.jpg" },
        { title: "iNumber Number  L'or de Johannesbourg ", url: "POLICIER/iNumberNumber.html", image: "https://m.media-amazon.com/images/M/MV5BYTllMzMwNjMtZDFlMi00MGQ5LThjNjktMjNlZTAzODc1YTQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
        { title: "Snatch, tu braques ou tu raques  ", url: "POLICIER/Snatch.html", image: "https://www.themoviedb.org/t/p/original/qznSgpuBCUIk4NIEtfG2OsrxdJt.jpg" },
        { title: "Infamous  ", url: "POLICIER/Infamous.html", image: "https://www.themoviedb.org/t/p/original/q2lkJf1TAjImTHCEO7XvbqPtnPb.jpg" },
        { title: "Bookworm ", url: "aventure/Bookworm.html", image: "https://media.themoviedb.org/t/p/original/3LfSI2GpyF1Q0WJs5bjL4jDono6.jpg" },
        { title: "Las Vegas Parano ", url: "aventure/Vegas.html", image: "https://media.themoviedb.org/t/p/original/nAgpaBeMg1zbWPCMRX2jwmCo5UU.jpg" },
        { title: "Un Indien dans la ville ", url: "aventure/Indien.html", image: "https://media.themoviedb.org/t/p/original/aIS0iYu42Wb95ozyEiMfy906HaF.jpg" },
        { title: "Largo Winch : Le Prix de l'argent ", url: "aventure/LargoWinch.html", image: "https://media.themoviedb.org/t/p/original/9ccXmqC2J8sglLCATVsphxGbwZr.jpg" },
        { title: " Riddle of Fire ", url: "aventure/RiddleofFire.html", image: "https://media.themoviedb.org/t/p/original/xeLpipKMvcsUhMiBENNkcrqG3UX.jpg" },
        { title: "Loups-Garous ", url: "aventure/LoupsGarous.html", image: "https://media.themoviedb.org/t/p/original/zt6oRPayS9JuVhFde34tG9n3YEQ.jpg" },
        { title: "Mon ami le petit manchot ", url: "aventure/Monamilepetitmanchot.html", image: "https://media.themoviedb.org/t/p/original/lLyhpfOcMSGHyLrz28ZFYd8btyu.jpg" },
        { title: "L'Amour ouf ", url: "drame/LAmourouf.html", image: "https://media.themoviedb.org/t/p/original/6akNNv4KyrguZUiG4uemfV6toVq.jpg" },
        { title: "L’histoire de Souleymane ", url: "drame/Souleymane.html", image: "https://media.themoviedb.org/t/p/original/jUVmSuqiJ4FTBpkeJe89khym116.jpg" },
        { title: "Umami ", url: "drame/Umami.html", image: "https://media.themoviedb.org/t/p/original/hgT250M6F0o0bUUTyXjEjof6knA.jpg" },
        { title: "Sound of Metal ", url: "drame/SoundofMetal.html", image: "https://media.themoviedb.org/t/p/original/g0Lx4sHdMYrj5HMfS8glU9BYRUi.jpg" },
        { title: "The Apprentice  ", url: "drame/TheApprentice.html", image: "https://media.themoviedb.org/t/p/original/cq2NZ4mvsjTxVa1MQ9jK7KriHsg.jpg" },
        { title: "Wish You Were Here ", url: "drame/WishYouWereHere.html", image: "https://media.themoviedb.org/t/p/original/4Oen7LeSsIWqY2jnVW8uW9Klg9Y.jpg" },
        { title: "5 Septembre ", url: "drame/5Septembre.html" , image: "https://media.themoviedb.org/t/p/original/j2lft7UvyA0FYnbf9v07dtm0CrE.jpg"},
        { title: "Terrifier 3 ", url: "horreur/Terrifier3.html", image: "https://media.themoviedb.org/t/p/original/gvYCs5EbUIB9drsuROYgZeaHAOZ.jpg" },
        { title: "Wolf Man ", url: "horreur/WolfMan.html" , image: "https://media.themoviedb.org/t/p/original/vtdEHG1j07PqLlVyhKNZRHTPKGt.jpg"},
        { title: "Werewolves ", url: "horreur/Werewolves.html", image: "https://media.themoviedb.org/t/p/original/mgMhRM3aNTxrFArPaDxWA4gxiNX.jpg" },
        { title: "Monster on a Plane ", url: "horreur/MonsteronaPlane.html", image: "https://media.themoviedb.org/t/p/original/9fBcq5WiH3z4YGjS2iVESRKxcW4.jpg" },
        { title: "La Damnée ", url: "horreur/LaDamnee.html", image: "https://media.themoviedb.org/t/p/original/fJbOjewxSz1v74VRzlvzKFn4TwN.jpg" },
        { title: "Year 10 ", url: "horreur/Year10.html" , image: "https://media.themoviedb.org/t/p/original/zqeFM6cjHjYmgjqJExjt1NPBPdd.jpg"},
        { title: "Cuckoo ", url: "horreur/Cuckoo.html", image: "https://media.themoviedb.org/t/p/original/mpryn3TuSPNG5ELRxyrKfblxJ9R.jpg" },
        { title: "Warhorse One ", url: "action/WarhorseOne.html", image: "https://media.themoviedb.org/t/p/original/laFhAOqkWFi4sFeGPg8uun2Julw.jpg" },
        { title: "Week-end à Taipei ", url: "action/WeekendaTaipei.html", image: "https://media.themoviedb.org/t/p/original/g6QiIe8pRKpofJF6TyCXHQde7GC.jpg" },
        { title: "The Killer's Game ", url: "action/TheKillersGame.html" , image: "https://media.themoviedb.org/t/p/original/4bKlTeOUr5AKrLky8mwWvlQqyVd.jpg"},
        { title: "Sniper  The Last Stand ", url: "action/SniperTheLastStand.html", image: "https://m.media-amazon.com/images/M/MV5BZWM3ZWE4MzMtNGY4YS00YzBmLWI4NmQtMGYwODZkNDVmNTE2XkEyXkFqcGc@._V1_.jpg" },
        { title: " Alarum ", url: "action/Alarum.html", image: "https://media.themoviedb.org/t/p/original/v313aUGmMNj6yNveaiQXysBmjVS.jpg" },
        { title: "Back in Action ", url: "action/BackinAction.html", image: "https://media.themoviedb.org/t/p/original/3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg" },
        { title: "Hounds of War ", url: "action/HoundsofWar.html", image: "https://fr.web.img2.acsta.net/img/69/21/6921c2bcae45697be722232bbbd11c27.jpeg" },
        { title: "Sonic 3  le film ", url: "animation/Sonic3.html", image: "https://fr.web.img4.acsta.net/img/85/e7/85e77c51c172da4aec13679210295a11.jpg" },
        { title: "Lune de miel avec ma mère ", url: "comedie/Lunedemielavecmamere.html" , image: "https://media.themoviedb.org/t/p/original/bzW0afBIyWZ0bjCje8GPezvETy0.jpg"},
        { title: "a toute allure ", url: "comedie/atouteallure.html", image: "https://fr.web.img2.acsta.net/img/84/7c/847ca58da882e60347c61404cfa715c5.jpg" },
        { title: "Baby bluff ", url: "comedie/Babybluff.html", image: "https://fr.web.img5.acsta.net/img/42/d8/42d8209deb3c45934623135737992cb1.jpg" },
        { title: "Ma vie Ma gueule ", url: "comedie/MavieMagueule.html" , image: "https://fr.web.img3.acsta.net/img/e3/8a/e38a23f20e52a9a39c9e6aaac6ecc112.jpg"},
        { title: "On fait quoi maintenant ? ", url: "comedie/Onfaitquoimaintenant.html", image: "https://fr.web.img3.acsta.net/img/55/ff/55ff0fe564774cd1a7038aff0899d985.jpg" },
        { title: "Vous êtes cordialement invités ", url: "comedie/Vousetescordialementinvites.html", image: "https://fr.web.img4.acsta.net/img/6c/7b/6c7b180edeafb8720d9e9a9ae3fa9cbe.jpg" },
        { title: "Nightbitch ", url: "comedie/Nightbitch.html", image: "https://fr.web.img4.acsta.net/img/1c/73/1c73c2114d2c8c15ee0713ba3154a945.jpg" },
        { title: "Deadpool & Wolverine ", url: "action/DeadpoolWolverine.html", image: "https://fr.web.img3.acsta.net/c_310_420/img/e4/cd/e4cd101f2e66f4e7818fcf53d05c006a.jpg" },
        { title: "Deadpool ", url: "action/Deadpool.html", image: "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg" },
        { title: "Deadpool 2 ", url: "action/Deadpool2.html", image: "https://fr.web.img4.acsta.net/pictures/18/04/06/16/26/2317955.jpg" },
        { title: "Woodwalkers ", url: "fantastique/Woodwalkers.html", image: "https://media.themoviedb.org/t/p/original/dDIwz4xABrQoFlQAxhrxYOs621S.jpg" },
        { title: "Ahmed Sylla  Origami ", url: "spectacle/AhmedSylla.html", image: "https://media.themoviedb.org/t/p/original/kobpDYZniBtfK4xL5GsXnvV5im2.jpg" },
        { title: "a Contre-Sens : Londres ", url: "drame/aContreSensLondres.html" , image: "https://imgr.cineserie.com/2025/02/6583116.jpg?imgeng=/f_jpg/cmpr_0/w_148/h_222/m_cropbox&ver=1"},
        { title: "The Gorge ", url: "action/TheGorge.html", image: "https://media.themoviedb.org/t/p/original/cG7m6fmMFykDsXXAXrlZ7IhBj4L.jpg" },
        { title: "Vol à haut risque ", url: "action/Volahautrisque.html", image: "https://media.themoviedb.org/t/p/original/vWoa8QSoNwIHMBKLLv82btw2S5L.jpg" },
        { title: "Miséricorde ", url: "drame/Misericorde.html", image: "https://media.themoviedb.org/t/p/original/ybktthvcTszSME5PPMM8rzy2ZL9.jpg" },
        { title: "Vaiana 2  ", url: "animation/Vaiana2.html", image: "https://media.themoviedb.org/t/p/original/usdwoEwm68cdeMOvGFPwSk9nLTr.jpg" },
        { title: "Ted ", url: "comedie/Ted.html", image: "https://www.themoviedb.org/t/p/original/zdZKj5nqe3tEwuzEYbxAgMESFe7.jpg" },
        { title: "Ted 2  ", url: "comedie/Ted2.html", image: "https://www.themoviedb.org/t/p/original/kZ9cHlWbhtPx5IoR9R1n8UHozej.jpg" },
        { title: "Le Jardinier ", url: "comedie/LeJardinier.html", image: "https://media.themoviedb.org/t/p/original/qxqwLXgd4vjouSsxKXbGhQyjwoa.jpg" },
        { title: "Le Roi lion ", url: "animation/LeRoilion.html", image: "https://media.themoviedb.org/t/p/original/n6UChiAOSTHGih2FBactLjA4Cdt.jpg" },
        { title: "Le Roi lion 2 ", url: "animation/LeRoilion2.html", image: "https://media.themoviedb.org/t/p/original/k3bXkFnSdEeQa5WcK1R1tfDKcDp.jpg" },
        { title: "Le Roi lion 3 ", url: "animation/LeRoilion3.html", image: "https://media.themoviedb.org/t/p/original/m3IAxStZiNCwRdLkk8LXLDGC6mw.jpg" },
        { title: "Le Roi Lion 2019 ", url: "aventure/LeRoiLion.html", image: "https://media.themoviedb.org/t/p/original/7QqLsDKe3myax9mfQf5EvJ2qk6u.jpg" },
        { title: " Mufasa ", url: "aventure/Mufasa.html", image: "https://media.themoviedb.org/t/p/original/67BPUqGcMK4iG97JNNX4GE0sDwo.jpg" },
        { title: " Bambi ", url: "aventure/Bambi.html", image: "https://media.themoviedb.org/t/p/original/rJUkO3ZrLGH6K8pFTne5IiZfrvO.jpg" },
        { title: " The Brutalist ", url: "drame/TheBrutalist.html", image: "https://media.themoviedb.org/t/p/original/gBZpseuIAVsntmteWEnJjdtI9Yx.jpg" },
        { title: " Dog Man  ", url: "animation/DogMan.html", image: "https://media.themoviedb.org/t/p/original/89wNiexZdvLQ41OQWIsQy4O6jAQ.jpg" },
        { title: " 4 Zéros  ", url: "comedie/4Zeros.html", image: "https://media.themoviedb.org/t/p/original/ePNu4AuhdisRLTxm8Hup8NUN6UJ.jpg" },
        { title: " 3 Zéros  ", url: "comedie/3Zeros.html", image: "https://media.themoviedb.org/t/p/original/pXMGEoNmiYKs9wBe2fhWiQnfh7Z.jpg" },
        { title: " Les Simpson  Past & Furious  ", url: "animation/LesSimpsonPastFurious.html", image: "https://image.tmdb.org/t/p/original/mfZ2v4EKl90ISkQC7pAI1yDh1WV.jpg" },
        { title: " Challenger  ", url: "comedie/Challenger.html", image: "https://media.themoviedb.org/t/p/original/9sT2oUXu09UYkc9BRK41XXQmu8H.jpg" },
        { title: " Les Fantômes  ", url: "drame/LesFantomes.html", image: "https://media.themoviedb.org/t/p/original/vPfufnBKf3AeA8lghapY8vcT2Iy.jpg" },
        { title: " Putin  ", url: "drame/Putin.html", image: "https://media.themoviedb.org/t/p/original/gViQIHITFJSwzcsDlp5ybInMVnl.jpg" },
        { title: " Mesrine  L'Instinct de mort - Partie 1   ", url: "drame/Mesrine.html", image: "https://media.themoviedb.org/t/p/original/eG5g3zpMOmacHICjAj1OAgx9geI.jpg" },
        { title: " Mesrine  L'Ennemi public n°1 - Partie 2 ", url: "drame/Mesrine2.html", image: "https://media.themoviedb.org/t/p/original/grGCEm89Mu1iSgF3e2ZGpizQCMH.jpg" },
        // Autres films ici...
    ];

    // Affichage des films dans la grille
    function displayMovies(moviesToDisplay) {
        movieGrid.innerHTML = ""; // Vider la grille avant de la remplir

        if (moviesToDisplay.length === 0) {
            movieGrid.innerHTML = "<p>Aucun résultat trouvé</p>";
        } else {
            moviesToDisplay.forEach(movie => {
                const movieCard = document.createElement("div");
                movieCard.classList.add("movie-card");
                movieCard.innerHTML = `
                    <img src="${movie.image}" alt="${movie.title}">
                    <div class="movie-title">${movie.title}</div>
                    <div class="preview-text"></div>
                `;
                movieCard.onclick = () => window.location.href = movie.url;
                movieGrid.appendChild(movieCard);
            });
        }
    }

    // Recherche pendant la saisie
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.trim().toLowerCase();
        suggestionsContainer.innerHTML = ""; // Effacer les suggestions existantes

        if (query.length > 0) {
            const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));

            if (filteredMovies.length > 0) {
                suggestionsContainer.style.display = "block"; // Afficher les suggestions
                filteredMovies.forEach(movie => {
                    const suggestionItem = document.createElement("div");
                    suggestionItem.classList.add("suggestion-item");
                    suggestionItem.textContent = movie.title;
                    suggestionItem.onclick = () => {
                        searchInput.value = movie.title; // Mettre à jour la recherche
                        suggestionsContainer.innerHTML = ""; // Cacher les suggestions
                        displayMovies([movie]); // Afficher le film
                    };
                    suggestionsContainer.appendChild(suggestionItem);
                });
            } else {
                suggestionsContainer.style.display = "none"; // Masquer si aucun résultat
            }
        } else {
            suggestionsContainer.style.display = "none"; // Masquer si la recherche est vide
            movieGrid.innerHTML = ""; // Effacer la grille si la recherche est vide
        }
    });

    // Recherche au pressage de la touche "Entrée"
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const query = searchInput.value.trim().toLowerCase();
            if (query.length > 0) {
                const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
                displayMovies(filteredMovies);
            } else {
                movieGrid.innerHTML = "<p>Veuillez entrer un titre à rechercher.</p>";
            }
        }
    });

    // Fermer les résultats si l'utilisateur vide la recherche
    searchInput.addEventListener("blur", function () {
        if (searchInput.value.trim() === "") {
            movieGrid.innerHTML = ""; // Fermer les cartes
            suggestionsContainer.style.display = "none"; // Masquer les suggestions
        }
    });
});
