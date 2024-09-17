# TuesQui

Le but est de trouver le flag sur un site web apparemment vierge.

## Solution
La solution se détaille en 4 étapes.
Arrivant sur le site, on voit dans les outils dev qu'il n'y a rien dans les fichiers à la racine. 
On peut voir dans les headers de la réponse "Route : /vulnerable" ou alors
avec un curl -v. C'est alors qu'on peut aller sur la route. Sans rien on
voit qu'il manque un argument à l'url car on a "whois undefinned". On peut
faire une recherche sur le whois pour comprendre et alors on devine que l'url 
est la porte d'entree.
Ce qu'on donne a un whois c'est un domain. Donc la c'est assez complexe, mais voila
il faut trouver que l'arg c'est /vulnerable?domain=... genre test.fr
evidemment ça fonctionne.
On voit qu'ici se trouve l'injection de commande. J'ai bloqué le pipe (|) volontairement
pour qu'on se creuse les méninges et cherche ce qui se passe sur l'url encoding.
L'idée est donc de mettre le whois en tache de fond.
On utilise alors un &, qui s'encode par %26 dans les URL.
On met alors un /vuln?domain=test.fr%26ls et on voit le résultat...
Le fichier fichier.log semble intéréssant et en effet le flag est dedans.

## Flag
HTN{GGatoiPourleFlag}
