# onClick again

Dans ce second challenge, il faut trouver le mot de passe de l'utilisateur.
Les noms des variables ne sont pas explicites.

## Difficulté
2/5 je dirais. Il faut comprendre le code javascript et les fonctions utilisées.

## Solution

Dans ce challenge, on remarque qu'il y a beaucoup de fonctions, mais elles ne sont pas toutes utiles. Quand on défile jusqu'en bas on voit la fonction s() du onClick. Toutefois, le mot
de passe et le login ne sont pas en clair. Il y a 2 solutions qui s'offrent à nous : \

-La première : on remonte dans la fonction s(). On voit que ps qui correspond au mdp saisi par l'utilisateur est comparé à tu, et tu est égal à ts[ui1p]. On remonte encore et on voit que ui1p est parseInt(ui1, 16) et ui1 ? et ba c'est la première ligne du fichier. C'est le dernier élément de la chaîne de caractères : 1e. Le passer en décimal donne 30. Donc on doit regarder le 30ème élément de ts. A ce moment là... il faut compter les éléments et faire pareil pour le mdp.

-La seconde : si l'on regarde de plus près le code javascript, on voit bien les fonctions ne servent à rien sauf la fonction rivil(). On remarque une certaine ressemblance avec la fonction s() ainsi que 2 console.log() qui ont l'air intéressant. Taper le console.log dans la console
du navigateur ne fonctionne pas, à moins de remplacer les variables par leur valeur. En revanche, on peut simplement appeler la fonction rivil() dans la console. On obtient alors le mdp et le login, entouré de 2 autres mots, sans faire de calculs.

## Flag
login : michele2 
mot de passe : flEm2L1r3
