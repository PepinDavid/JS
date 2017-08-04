function produisMatrice (matrice1, matrice2, nbRecursive){
    nbRecursive = nbRecursive || 0;
    var newMatrice = [];
    //1. verifier le nb colonnes de matrice1 et le nombres de lignes de matrice2
    var lenLines = matrice2.length;
    lenColumns = matrice1[0].length;
    if(lenColumns == lenLines){
        lenLines = matrice2[0].length;
        lenColumns = matrice1.length;
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
                    console.log(produit+" + "+arrLine[j] +" * "+matrice2[j][nbColumn]+' = '+ produit + arrLine[j] * matrice2[j][nbColumn])
                    produit += (arrLine[j] * matrice2[j][nbColumn]);
                }
                //on place l'addition des produits lignes/colonnes dans la nouvelle matrice
                newMatrice[i][nbColumn] = produit;
                nbColumn++;
            }
        }
        //si on a eu une recursivité c'est que l'on a éssaye la commutation matricielle
        if(nbRecursive < 1)
            return {
                commutation: false,
                matrice: newMatrice,
                matrice1: matrice1,
                matrice2: matrice2
            };
        else
            return {
                commutation: true,
                matrice: newMatrice,
                matrice1: matrice1,
                matrice2: matrice2
            };
    }else if(matrice2[0].length != matrice1.length && nbRecursive < 2){
        nbRecursive++;
        return produisMatrice(matrice2, matrice1, nbRecursive);
    }
      else
        return {
            commutation: true,
            matrice: newMatrice,
            matrice1: matrice1,
            matrice2: matrice2
        };
}

function additionMatrice(matrice1, matrice2){
    var newMatrice = [];
    var lenLines1 = matrice1[0].length,
    lenColumns1 = matrice1.length,
    lenLines2 = matrice2[0].length,
    lenColumns2 = matrice2.length;

    if(lenLines1 == lenLines2 && lenColumns1 == lenColumns2){
        newMatrice = new Array(lenLines1);

        for(var i = 0; i < lenLines1; i++){
            newMatrice[i] = new Array(lenColumns1);
            for(var j = 0; j < lenColumns1; j++){
                newMatrice[i][j] = matrice1[i][j] + matrice2[i][j];
            }
        }
        return {
            matrice: newMatrice,
            matrice1: matrice1,
            matrice2: matrice2
        };
    }

    return {
        matrice: newMatrice,
        matrice1: matrice1,
        matrice2: matrice2
    };
}

function soustractionMatrice(matrice1, matrice2){
    var newMatrice = [];
    var lenLines1 = matrice1[0].length,
    lenColumns1 = matrice1.length,
    lenLines2 = matrice2[0].length,
    lenColumns2 = matrice2.length;

    if(lenLines1 == lenLines2 && lenColumns1 == lenColumns2){
        newMatrice = new Array(lenLines1);

        for(var i = 0; i < lenLines1; i++){
            newMatrice[i] = new Array(lenColumns1);
            for(var j = 0; j < lenColumns1; j++){
                newMatrice[i][j] = matrice1[i][j] - matrice2[i][j];
            }
        }
        return {matrice: newMatrice};
    }

    return {matrice: newMatrice};
}

function produitReelMatrice(nb, matrice){
    var newMatrice = new Array(matrice.length);

    for(var i = 0; i < matrice.length; i++){
        var len = matrice[i].length;
        newMatrice = new Array(len);
        for(var j = 0; j < len; j++)
            newMatrice[i][j] = nb * matrice[i][j];
    }

    return {
        matrice: newMatrice,
        reel: nb,
        matrice1: matrice
    };
}
