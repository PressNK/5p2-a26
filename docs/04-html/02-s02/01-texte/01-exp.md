---
---
import ExampleWrapper from '@site/src/components/ExampleWrapper';
import HtmlElementBox from '@site/src/components/HtmlElementBox';

# 2-1 Expérimentation

Voici une page web utilisant les balises de texte et de mise en forme les plus fréquentes. Pour la majeure partie de ces éléments, un carré interactif les encadre. Amusez-vous à cliquer sur les différents éléments pour découvrir la balise responsable d'afficher le texte et son style!

<BrowserWindow url="index.html">
    <HtmlElementBox elementName="h1">
      <h1>Chats célèbres du web</h1>
    </HtmlElementBox>

    <HtmlElementBox elementName="h2">
      <h2>Introduction</h2>
    </HtmlElementBox>

    <HtmlElementBox elementName="p">
    <p>Internet nourrit depuis ses débuts une véritable passion pour les chats: de Grumpy Cat à Maru, en passant par les innombrables GIFs et mèmes, ces félins curieux et attachants règnent en maîtres sur nos écrans. Leur capacité à susciter sourire, étonnement et tendresse fait d’eux les vedettes incontestées du web, attirant chaque jour des millions de clics et de partages à travers le monde.</p>
    </HtmlElementBox>

    <HtmlElementBox elementName="p">
    <p>Voici une sélection de <HtmlElementBox elementName="strong" inline><strong>chats</strong></HtmlElementBox> et de <HtmlElementBox elementName="b" inline><b>mèmes félins</b></HtmlElementBox> qui ont conquis Internet.<br />
    Chaque description utilise <em>em</em> ou <i>i</i> pour souligner certains détails.</p>
    </HtmlElementBox>

    <HtmlElementBox elementName="h2">
    <h2>Liste principale</h2>
    </HtmlElementBox>
    <HtmlElementBox elementName="ol">
    <ol>
      <li>Grumpy Cat</li>
      <li>Nyan Cat</li>
      <HtmlElementBox elementName="li" as="li">Lil BUB</HtmlElementBox>
      <li>Maru</li>
      <li>Keyboard Cat</li>
      <li>Coroner</li>
    </ol>
    </HtmlElementBox>

    <HtmlElementBox elementName="h3">
    <h3>Détails individuels</h3>
    </HtmlElementBox>

    <HtmlElementBox elementName="h4">
    <h4>Grumpy Cat</h4>
    </HtmlElementBox>
    <p><HtmlElementBox elementName="i" inline><i>Nom réel :</i></HtmlElementBox> Tardar Sauce.<br />
      Grumpy Cat est célèbre pour son air <HtmlElementBox elementName="em" inline><em>constamment bougon</em></HtmlElementBox> et son regard inoubliable.</p>

    <h4>Nyan Cat</h4>
    <p>Un chat pixelisé qui laisse derrière lui un <strong>arc-en-ciel</strong> et un son de pop-tart enjoué</p>

    <h4>Lil BUB</h4>
    <p>Lil BUB a émerveillé le web avec sa langue toujours sortie et ses yeux <i>énormes</i>.</p>

    <h4>Maru</h4>
    <p>Maru est connu pour son obsession des boîtes : <em>petites ou grandes, peu importe</em>, il s’y glisse toujours !</p>

    <h4>Keyboard Cat</h4>
    <p>Un chat-star qui “joue” du clavier, devenant l’un des premiers mèmes video viraux.</p>

    <h4>Coroner</h4>
    <p>Coroner, avec son pelage <strong>unique</strong>, attire tous les regards et passionne les internautes.</p>

    <h2>Récapitulatif</h2>
    <HtmlElementBox elementName="ul">
    <ul>
      <li><b>Grumpy Cat</b> pour son expression impassible</li>
      <li><strong>Nyan Cat</strong> pour sa fantaisie colorée</li>
      <HtmlElementBox elementName="li" as="li"><em>Lil BUB</em> pour sa douceur irrésistible</HtmlElementBox>
      <li><i>Maru</i> pour son talent d’explorateur de boîtes</li>
      <li><b>Keyboard Cat</b> pour son sens du spectacle</li>
      <li><strong>Coroner</strong> pour son style inimitable</li>
    </ul>
    </HtmlElementBox>
</BrowserWindow>