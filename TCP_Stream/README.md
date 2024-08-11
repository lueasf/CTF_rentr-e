# TCP Stream


## Consigne
Trouve le mdp qui transite en clair dans ces trames. Le flag n'est pas au format HTN.

## Solution
Ce challenge est de niveau simple. On télécharge le fichier TriCePs.pcap
et on l'ouvre avec wireshark:

```bash
sudo wireshark TriCePs.pcap.
```

Soit on cherche trame par trame un mot de passe. 
Soit on met un filtre tcp ou mieux : tcp.port == 12344.
On tombe facilement dessus.

## Flag
iLov3HacKiNgTN
