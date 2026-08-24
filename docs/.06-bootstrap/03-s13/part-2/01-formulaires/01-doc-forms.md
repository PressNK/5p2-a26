---
---

# 📚 Les formulaires

<DocCard item={{
  type: 'link',
  href: 'https://getbootstrap.com/docs/5.3/forms/overview/',
  label: 'Documentation officielle formulaires' }} />

  <br />

Bootstrap offre des classes pour styliser les formulaires HTML et les rendre plus attrayants et cohérents avec le reste de votre interface.

## Principe de base

Les formulaires HTML standards sont fonctionnels mais un peu tristounets. Bootstrap ajoute des classes pour:
- Améliorer l'apparence visuelle
- Uniformiser le style entre navigateurs
- Ajouter de la validation visuelle
- Organiser les champs de manière claire

## Structure de base d'un formulaire

### Formulaire simple sans Bootstrap

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Formulaire sans Bootstrap</title>
</head>
<body>
    <form>
        <label for="nom">Nom:</label>
        <input type="text" id="nom">
        
        <label for="email">Courriel:</label>
        <input type="email" id="email">
        
        <button type="submit">Envoyer</button>
    </form>
</body>
</html>`
  }}
/>

<br />

### Même formulaire avec Bootstrap

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <form>
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input type="text" class="form-control" id="nom">
            </div>
            
            <div class="mb-3">
                <label for="email" class="form-label">Courriel</label>
                <input type="email" class="form-control" id="email">
            </div>
            
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    </div>
</body>
</html>`
  }}
/>

<br />

**Observez les différences :**
- Chaque champ est dans un `<div class="mb-3">` pour l'espacement
- Les labels ont la classe `form-label`
- Les inputs ont la classe `form-control`
- Le bouton utilise les classes Bootstrap `btn btn-primary`

## Classes principales pour les formulaires

| Classe             | Utilisation                                   |
| ------------------ | --------------------------------------------- |
| `form-label`       | Label d'un champ                              |
| `form-control`     | Input text, email, password, textarea, select |
| `form-check`       | Conteneur pour checkbox/radio                 |
| `form-check-input` | Input checkbox/radio                          |
| `form-check-label` | Label pour checkbox/radio                     |
| `mb-*`             | Marge en bas pour espacer les champs          |

## Champ de formulaire

Un champ de formulaire a plus ou moins toujours la même structure, soit un `label` avec la classe `form-label` et un `input` avec la classe `form-control`.

```html
<div class="mb-3">
    <label for="id-unique" class="form-label">Texte du label</label>
    <input type="text" class="form-control" id="id-unique">
</div>
```

:::info Important
- L'attribut `for` du label doit correspondre à l'`id` de l'input
- La classe `mb-3` crée l'espacement entre les champs
- La classe `form-control` stylise l'input
:::

## Types de champs

### Champs textuels

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <form>
            <div class="mb-3">
                <label for="texte" class="form-label">Texte simple</label>
                <input type="text" class="form-control" id="texte" placeholder="Entrez du texte">
            </div>
            
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="nom@exemple.com">
            </div>
            
            <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="password">
            </div>
            
            <div class="mb-3">
                <label for="textarea" class="form-label">Zone de texte</label>
                <textarea class="form-control" id="textarea" rows="3"></textarea>
            </div>
        </form>
    </div>
</body>
</html>`
  }}
/>

<br />

**Tous utilisent la classe `form-control`:** text, email, password, textarea, select, etc.

### Checkboxes et radios

Les checkboxes et radios ont une structure différente, ils doivent être dans un conteneur avec la classe `form-check`:

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <form>
            <!-- Checkbox -->
            <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check1">
                    <label class="form-check-label" for="check1">
                        Accepter les conditions
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check2">
                    <label class="form-check-label" for="check2">
                        Recevoir les notifications
                    </label>
                </div>
            </div>
            
            <!-- Radio buttons -->
            <div class="mb-3">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="niveau" id="debutant">
                    <label class="form-check-label" for="debutant">
                        Débutant
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="niveau" id="intermediaire">
                    <label class="form-check-label" for="intermediaire">
                        Intermédiaire
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="niveau" id="avance">
                    <label class="form-check-label" for="avance">
                        Avancé
                    </label>
                </div>
            </div>
        </form>
    </div>
</body>
</html>`
  }}
/>

<br />

**Structure checkbox/radio :**
```html
<div class="form-check">
    <input class="form-check-input" type="checkbox" id="...">
    <label class="form-check-label" for="...">Texte</label>
</div>
```

### Select (liste déroulante)

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <form>
            <div class="mb-3">
                <label for="pays" class="form-label">Pays</label>
                <select class="form-select" id="pays">
                    <option selected>Choisissez...</option>
                    <option value="ca">Canada</option>
                    <option value="fr">France</option>
                    <option value="us">États-Unis</option>
                </select>
            </div>
        </form>
    </div>
</body>
</html>`
  }}
/>

<br />

:::caution Attention
Les `<select>` utilisent la classe `form-select` et **non** `form-control`.
:::

## Validation visuelle

Bootstrap offre des classes pour afficher visuellement si un champ est valide ou invalide :

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <form>
            <!-- Champ valide -->
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input type="text" class="form-control is-valid" id="nom" value="Jean Dupont">
                <div class="valid-feedback">
                    Parfait !
                </div>
            </div>
            
            <!-- Champ invalide -->
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control is-invalid" id="email" value="email-invalide">
                <div class="invalid-feedback">
                    Veuillez entrer une adresse email valide.
                </div>
            </div>
            
            <!-- Champ normal -->
            <div class="mb-3">
                <label for="tel" class="form-label">Téléphone</label>
                <input type="tel" class="form-control" id="tel">
                <div class="form-text">
                    Format : 123-456-7890
                </div>
            </div>
        </form>
    </div>
</body>
</html>`
  }}
/>

<br />

**Classes de validation :**
- `is-valid`: champ valide (bordure verte)
- `is-invalid`: champ invalide (bordure rouge)
- `valid-feedback`: message de succès
- `invalid-feedback`: message d'erreur
- `form-text`: texte d'aide neutre

## Tailles des champs

Vous pouvez modifier la taille des champs avec les modificateurs `form-control-lg` et `form-control-sm`:

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <form>
            <input type="text" class="form-control form-control-lg mb-3" placeholder="Grand">
            <input type="text" class="form-control mb-3" placeholder="Normal">
            <input type="text" class="form-control form-control-sm" placeholder="Petit">
        </form>
    </div>
</body>
</html>`
  }}
/>

<br />

**Classes de taille :**
- `form-control-lg`: grand
- (aucune classe): normal
- `form-control-sm`: petit

## Champs désactivés et lecture seule

<SandpackPlayground
  template="static"
  showTabs={false}
  files={{
    '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <form>
            <div class="mb-3">
                <label for="normal" class="form-label">Champ normal</label>
                <input type="text" class="form-control" id="normal" value="Vous pouvez modifier">
            </div>
            
            <div class="mb-3">
                <label for="readonly" class="form-label">Lecture seule</label>
                <input type="text" class="form-control" id="readonly" value="Vous ne pouvez pas modifier" readonly>
            </div>
            
            <div class="mb-3">
                <label for="disabled" class="form-label">Désactivé</label>
                <input type="text" class="form-control" id="disabled" value="Champ désactivé" disabled>
            </div>
        </form>
    </div>
</body>
</html>`
  }}
/>

<br />

**Attributs HTML :**
- `readonly`: lecture seule (valeur envoyée dans le formulaire)
- `disabled`: désactivé (valeur NON envoyée dans le formulaire)

## Bonnes pratiques

### Toujours associer label et input

```html
<!-- ✅ for et id correspondent -->
<label for="email" class="form-label">Email</label>
<input type="text" class="form-control" id="email">

<!-- ❌ pas d'association -->
<label class="form-label">Email</label>
<input type="text" class="form-control">
```

### Utiliser les bons types d'input

```html
<!-- ✅ types appropriés -->
<input type="email" class="form-control">
<input type="password" class="form-control">
<input type="number" class="form-control">
<input type="date" class="form-control">

<!-- ❌ tout en type text -->
<input type="text" class="form-control" placeholder="Email">
```

### Ajouter des placeholders et textes d'aide

```html
<div class="mb-3">
    <label for="tel" class="form-label">Téléphone</label>
    <input type="tel" class="form-control" id="tel" placeholder="123-456-7890">
    <div class="form-text">Format canadien avec tirets</div>
</div>
```

### Espacer les champs avec `mb-*`

```html
<!-- ✅ Bon : espacement entre champs -->
<div class="mb-3">
    <label>...</label>
    <input>
</div>
<div class="mb-3">
    <label>...</label>
    <input>
</div>
```

## Ressources

**Documentation officielle des formulaires :**  
[https://getbootstrap.com/docs/5.3/forms/overview/](https://getbootstrap.com/docs/5.3/forms/overview/)