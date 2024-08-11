# NintendoUSB

Ce challenge est de type basique en forensic, mais il est déjà assez corsé si vous n'avez jamais fait de forensic avant.

## Consigne
Retrouve l'image TRÈS sensible supprimé de la clé USB, que la Ninté'ndo à perdu. Le flag n'ets pas au format HTN.

## Solution
On télécharge le fichier nintendoUSB.gz et on le gunzip. On peut essayer diverses
commandes tel que strings, less etc, mais on obtient pas d'informations intéressantes.
En revanche, la commande *file* indique que c'est une image formatée avec le système de fichier FAT16. \
On monte l'image de la clé USB : 
``` bash
sudo mkdir /mnt/usb
sudo mount -o loop nintendoUSB /mnt/usb
```

En allant dans /mnt/usb on se rend compte qu'il n'y a rien, meme avec un *ls -la*. C'est du au fait que des fichiers supprimés soient encore présents dans l'image. 

On peut penser à utiliser fls de sleuthkit, dans le repertoire courant du fichier dézipé:
``` bash
fls -r -o 0 -f fat nintendoUSB
```
fls est un outil qui permet de lister les fichiers d'un système de fichier. \
(r pour récursif, o 0 pour offset de 0 = début, f pour filesystem qui est donc FAT)

On voit alors qu'une image a été supprimé : bebou.jpg.
On l'extrait avec icat :
``` bash
icat -o 0 -f fat nintendoUSB 4 > bebou.jpg
```
icat est un outil de qui permet d'extraire un fichier d'un système de fichier. \
(4 pour le numéro de fichier)

Naturellement, on utilise exiftool et on trouve le flag.
 

## Flag 
flag : LeVraiKirbyCestEly
