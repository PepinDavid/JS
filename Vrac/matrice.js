function produisMatrice (matrice1, matrice2, nbRecursive){
    var newMatrice = [];
    //1. verifier le nb colonnes de matrice1 et le nombres de lignes de matrice2
    var lenLines = matrice1.length,
    lenColumns = matrice2[0].length;
    if(lenColumns == lenLines && nbRecursive < 2){

        console.log(lenColumns+".c, "+lenLines+".l")
        newMatrice = new Array(lenLines);
        //2. creation de la matrice finale vide
        for(var i = 0; i < lenLines; i++){
            newMatrice[i] = new Array(lenColumns);
        }
        //3. creation algo
        /*nbColumns pour creation d'un tableau intermediaire pour le
        decalage de la colonne dans la matrice2. Sert également pour le
        placement dans la bonne colonne de la nouvelle matrice
        */
        //initialisation du decalage de ligne a zero
        var nbColumn = 0;
        //loop for pour prendre chaques nombres dans les colonnes de matrice1
        for(var i = 0; i < lenColumns; i++){
            console.log("line ",i)
            //reinit de nbColumn a 0
            var arrLine = matrice1[i], nbColumn = 0;
            //tant que le nbColumn n'a pas atteint le length max de column
            //on reste dans le while
            while (nbColumn < lenColumns) {
                console.log("columns ",nbColumn)
                //creation 'var produit' pour additionner les produits de chaque ligne/colonne
                var produit = 0;
                for(var j = 0; j < matrice2.length; j++){
                    produit += (arrLine[j] * matrice2[j][nbColumn]);
                }
                //on place l'addition des produits lignes/colonnes dans la nouvelle matrice
                newMatrice[i][nbColumn] = produit;
                nbColumn++;
            }
        }
        //si on a eu une recursivité c'est que l'on a éssaye la commutation matricielle
        if(nbRecursive < 1)
            return {commutation: false, matrice: newMatrice};
        else
            return {commutation: true, matrice: newMatrice};
    }else if(matrice2[0].length != matrice1.length && nbRecursive < 2){
        nbRecursive++;
        return produisMatrice(matrice2, matrice1, nbRecursive);
    }
      else
        return {commutation: false, matrice: newMatrice};
}
