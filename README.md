# LINIA — Piste 3 : La Saison créative

## 1. Présentation
Prototype statique responsive pour le futur site de LINIA, concept store créatif à Remouchamps. La piste montre une page d’accueil éditoriale vivante : agenda, ateliers, nouveautés boutique, créateurs locaux, cartes cadeaux, café et événements.

## 2. Objectif de la piste 3
Créer une expérience qui donne envie de revenir consulter la programmation : prochains ateliers, capsules de saison, sélections boutique, créateurs invités, événements et idées cadeaux.

## 3. Différence avec les pistes 1 et 2
- Piste 1 : lieu et ambiance.
- Piste 2 : guidage par envie.
- Piste 3 : saison, programmation, agenda et actualisation régulière.

## 4. Choix 100 % SVG
Le prototype utilise uniquement des visuels SVG locaux pour rester léger, cohérent, rapide et transposable. Aucun WebP utilisé. Aucun JPG utilisé. Aucun PNG utilisé. Tous les visuels du prototype sont en SVG local.

## 5. Fichiers créés
- `index.html`
- `css/styles.css`
- `js/main.js`
- `assets/brand/linia-logo.svg`, `linia-symbol.svg`, `season-ornament.svg`
- `assets/placeholders/*.svg`
- `docs/synthese-piste-3.md`
- `README.md`

## 6. Lancer en local
```bash
python3 -m http.server 8000
```
Puis ouvrir `http://localhost:8000`.

## 7. Tester sur smartphone via le même Wi-Fi
Lancer le serveur, trouver l’adresse IP locale de l’ordinateur, puis ouvrir `http://ADRESSE-IP:8000` sur le smartphone connecté au même Wi-Fi.

## 8. Publication GitHub Pages
Pousser la branche sur GitHub, activer Pages depuis la branche et le dossier racine, puis ouvrir l’URL générée.

## 9. Transposition WordPress / WooCommerce
Les sections peuvent devenir des blocs Gutenberg : mise en avant, agenda, capsules, boucle produits, créateur invité, cartes cadeaux, actualités et contact local. La boutique peut être branchée sur WooCommerce et les actualités sur des articles WordPress.

## 10. Logique atelier WooCommerce
Chaque atelier pourra être un produit WooCommerce virtuel avec stock limité correspondant au nombre de places. La réservation devra être confirmée après paiement, avec intégration Stripe ou Mollie.

## 11. Points à adapter plus tard
- vraies photos si souhaitées dans la version finale ;
- adresse complète ;
- horaires ;
- produits réels ;
- ateliers réels ;
- vraie programmation ;
- fiches événements ;
- intégration WooCommerce ;
- paiements Stripe/Mollie ;
- Google Maps ;
- formulaires ;
- système d’actualités WordPress ;
- gestion des créateurs locaux.
