# Hexcellent

Dans ce challenge, on telecharge un fichier binaire dennis32.bin. Il faut alors trouver un mot de passe. Le challenge est de niveau baby/facile.

## Solution
La solution qui donne directement la solution c'est d'utiliser hexdump pour afficher le mot de passe.   

```bash
hexdump -C dennis32.bin 
```
affiche tout, on rahooute un grep et le mot de passe s'affiche.
```bash
hexdump -C dennis32.bin | grep -A 5 "mot de passe"
```
-A 5 permet d'afficher 5 lignes après le mot de passe.

On peut aussi utiliser Strings ou cat mais le résultat n'est pas imédiat, il faut chercher 
et pour des fichiers plus longs, ça marchera pas.

## Flag
flag : ritchie
C'est le nom du créateur du langage C : Dennis Ritchie :D
