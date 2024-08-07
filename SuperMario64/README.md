# Super Mario 64

Ce challenge est plutot facile. On ouvre le fichier PeachCapture.pcap avec wireshark:
```bash
sudo wireshark PeachCapture.pcap
```

## Solution
Il faut remarquer que le mot *message* dans la consigne n'est pas anodin. Il faut donc chercher le mot message à l'aide des filtres:
```bash
frame contains "message="
```
On voit 3 messages différents mais rien de clair. Soit on remarque toute suite que c'est encodé en base64 avec les "==", soit on se souviens du SuperMario"64". On doit donc décoder chacun des messages parmi lesquels se trouve le bon avec le mot de passe.

C'est encore plus simple, lorsqu'on se rend compte que le filtre HTTP mène directement aux messages. On suit le flux TCP pour voir le message encodé.


## Flage
Maaaariooo
