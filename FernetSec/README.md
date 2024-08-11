# FernetSec

Ce challenge melange de la cryptographie et de la steganographie. Il est assez créatif je trouve. 


## Consigne 
Trouvez le message caché dans cette image. La clé de chiffrement dans ce challenge est : le PSEUDO d'un prof de l'école (Telecom Nancy) suivi de 21 zéros. Flag est en format HTN.

## Solution
On télécharge l'image et on se rends compte qu'il s'agit d'un code-barre. On peut uliser un lecteur en ligne comme (https://products.aspose.app/barcode/fr/recognize#) ou le faire en python avec la librairie barcode. On obtient une
longue chaine de caractère. J'ai essayé avec dcode, mais ça ne reconnait rien. On utilise l'indice fernet, qui se trouve dans le titre et est le nom du fichier. On se renseigne dessus un peu et on trouve ceci : 

"Fernet est un algorithme de chiffrement symétrique. La clé utilisé est une chaîne de 32 octets, encodé en base64..."
Or, j'indique dans la consigne que la clé de chiffrement est : le PSEUDO d'un prof de l'école suivi de 21 zéros. On comprends mieux l'utilisation dse zéros. La seule solution c'est de penser au bon prof : M. Bouthier, plus connu sous le pseudo 'CKoroSensei'. On ajoute les 21 zéros et on obtient la clé de chiffrement. Donc on à la clé et le message chiffré. 
Soit on utilise un langage de programmation avec fernet, soit on peut utiliser un site comme (https://asecuritysite.com/tokens/ferdecode). On obtient le flag.

## Flag
```bash
Decoded:	HTN{MarieSteinLanotGang}
```