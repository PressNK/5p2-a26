---
---

# 10-B-2 😈 Boss - Bulletin météo

Vous travaillez pour une station météo locale et devez styliser leur bulletin hebdomadaire.

## Structure de base

Comme point de départ, utilisez le HTML suivant:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Météo de la semaine</title>
    <!-- Ajoutez la ligne pour lier le CSS ici -->
</head>
<body>
    <h1>Météo Drummondville</h1>
    <p>Prévisions du 30 septembre au 6 octobre 2025</p>
    
    <h2>Aujourd'hui</h2>
    <p class="temperature haute">Maximum: 22°C</p>
    <p class="temperature basse">Minimum: 12°C</p>
    <p class="condition ensoleille">Ensoleillé</p>
    
    <h2>Demain</h2>
    <p class="temperature haute">Maximum: 18°C</p>
    <p class="temperature basse">Minimum: 10°C</p>
    <p class="condition nuageux">Nuageux</p>
    
    <h2 class="weekend">Samedi</h2>
    <p class="temperature haute">Maximum: 15°C</p>
    <p class="temperature basse">Minimum: 8°C</p>
    <p class="condition pluvieux">Pluie probable</p>
    <p class="alerte">⚠️ Risque d'orages en soirée</p>
    
    <h2 class="weekend">Dimanche</h2>
    <p class="temperature haute">Maximum: 14°C</p>
    <p class="temperature basse">Minimum: 6°C</p>
    <p class="condition pluvieux">Averses</p>
    
    <hr>
    
    <p class="resume">Résumé: Une semaine automnale typique avec des températures en baisse.</p>
    <p class="conseil">Conseil: N'oubliez pas votre parapluie pour la fin de semaine!</p>
</body>
</html>
```

## Instructions

1. Créez un fichier CSS et liez-le au HTML
2. Mettez un arrière-plan dégradé (nous n'avons pas vu directement comment, mais vous pouvez faire des recherches 😉) ou une simple couleur qui rappelle le ciel
3. Utilisez une police lisible et moderne
4. Stylisez les h1 et h2 différemment (taille, couleur, etc.)
5. Les températures hautes doivent être en rouge/orange
6. Les températures basses doivent être en bleu foncé
7. Les conditions météo doivent avoir des couleurs appropriées:
   - Ensoleillé: jaune/doré
   - Nuageux: gris
   - Pluvieux: bleu foncé
8. Les jours de weekend (ils ont une classe) doivent avoir un fond de couleur différent
9. Les alertes (ils ont une classe) doivent vraiment attirer l'attention (rouge, gras, grande taille?)
10. Le texte du résumé doit être en italique
11. Le conseil doit avoir un fond de couleur pâle avec une bordure
12. Toutes les températures (haute ET basse) doivent être en gras

Il n'y a pas de solution pour ce dernier, c'est une activité d'exploration pour vous aider à maitriser les bases du CSS. Si vous avez des questions, faites signe!