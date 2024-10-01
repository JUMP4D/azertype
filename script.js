{
    function lancerJeu(){
        let choix = choisirPhrasesOuMots()
        let score = 0
        let Nbmots = 0

        if (choix === "1"){
            boucleJeu(listeMots)
            Nbmots = listeMots.length
        }else{
            boucleJeu(listePhrases)
            Nbmots = listePhrases.length
        }

        afficherResultat(score, Nbmots)
    }

    function afficherResultat(score, Nbmots){
        console.log("Votre score est de " + score + " sur " + Nbmots)
    }

    function choisirPhrasesOuMots(){
        let choix = prompt("1 : mots ou 2 : phrases")
        while (choix !== "1" && choix !== "2"){
            choix = prompt("1 : mots ou 2 : phrases")
        }
        return choix
    }

    function boucleJeu(listeProposition){
        let score = 0
        for(let i = 0; i < listeProposition.length; i++) {
            let mot = prompt("Entrez : " + listeProposition[i])
            if (mot === listeProposition[i]){
                console.log(i + " correct")
                score += 1
            }
        }
        return score
    }
}

