---
---

# 12-B-1 😈 Boss - Étiquette de produit

En vous basant sur le HTML et CSS de départ suivant:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Boss étiquette de produit</title>
  <link rel="stylesheet" href="./styles/app.css">
</head>
<body>
  <div class="produit">
    <h3 class="produit-nom">Casque Bluetooth</h3>
    <p class="produit-description">
        Casque audio sans fil avec réduction de bruit active. 
    </p>
    
    <div class="badge-promo">PROMO</div>
    <div class="etiquette-prix">$89</div>
</div>
</body>
</html>
```

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}

.produit {

}

.produit-nom {

}

.produit-description {

}

.etiquette-prix {

}

.badge-promo {

}
```

Reproduisez le plus fidèlement possible le visuel suivant:

<BrowserWindow>
<div style={{
  position: 'relative',
  width: '250px',
  height: '200px',
  backgroundColor: 'white',
  border: '2px solid #ddd',
  borderRadius: '8px',
  margin: '50px',
  padding: '20px'
}}>
  <h3 style={{
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333'
  }}>Casque Bluetooth</h3>
  <p style={{
    color: '#666',
    fontSize: '14px',
    lineHeight: '1.4'
  }}>
    Casque audio sans fil avec réduction de bruit active.
  </p>
  <div style={{
    position: 'absolute',
    top: '-14px',
    left: '-8px',
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '6px 12px',
    fontSize: '12px',
    fontWeight: 'bold',
    borderRadius: '16px'
  }}>PROMO</div>
  <div style={{
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '8px 12px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '16px'
  }}>$89</div>
</div>
</BrowserWindow>

<br />

## Instructions

- Utilisez les couleurs de votre choix, l'important est d'obtenir sensiblement la même disposition!
- La position `absolute` vous sera utile pour les pastilles de prix et "promo"
    :::tip
    Lorsque vous utilisez une position `absolute`, les valeurs `top`, `bottom`, `left` et `right` peuvent prendre une valeur négative pour sortir du cadre de référence! 🙂
    :::

<details>
    <summary>
      Cheat Code (solution) <img style={{height: '20px', 'vertical-align': 'middle'}} src="https://imgur.com/UCEksuH.png" />
    </summary>

    <SandpackPlayground
        template="static"
        editorHeight={900}
        files={{
        '/index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Boss étiquette de produit</title>
  <link rel="stylesheet" href="./styles/app.css">
</head>
<body>
  <div class="produit">
    <h3 class="produit-nom">Casque Bluetooth</h3>
    <p class="produit-description">
        Casque audio sans fil avec réduction de bruit active. 
        Autonomie de 30 heures et charge rapide.
    </p>
    
    <div class="badge-promo">PROMO</div>
    <div class="etiquette-prix">$89</div>
</div>
</body>
</html>`,
'styles/app.css': `body {
  font-family: Arial, Helvetica, sans-serif;
}

.produit {
    position: relative;
    width: 250px;
    height: 200px;
    background-color: white;
    border: 2px solid #ddd;
    border-radius: 8px;
    margin: 50px;
    padding: 20px;
}

.produit-nom {
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

.produit-description {
    color: #666;
    font-size: 14px;
    line-height: 1.4;
}

.etiquette-prix {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #4caf50;
    color: white;
    padding: 8px 12px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 16px;
}

.badge-promo {
    position: absolute;
    top: -14px;
    left: -8px;
    background-color: #e74c3c;
    color: white;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 16px;
}
`
        }}
    />  
</details>