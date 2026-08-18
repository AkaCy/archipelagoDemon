// ================================
// ÉTAT DU JEU
// ================================

let points = 0;

// Nombre de points gagnés à chaque cycle
let pointsPerTick = 1;

// Prix de l'amélioration
const upgradeCost = 3;

// L'amélioration n'est achetable qu'une seule fois
let upgradeBought = false;

// ================================
// ÉLÉMENTS HTML
// ================================

const pointsValue = document.getElementById("points-value");
const upgradeButton = document.getElementById("upgrade-button");
const status = document.getElementById("status");

// ================================
// AFFICHAGE
// ================================

function updateUI() {
  // Met à jour le compteur
  pointsValue.textContent = points;

  // Met à jour le bouton
  if (upgradeBought) {
    upgradeButton.textContent = "Amélioration achetée";
    upgradeButton.disabled = true;

    status.textContent = "Tu gagnes maintenant 2 points toutes les 5 secondes.";
  } else {
    upgradeButton.textContent = `Acheter l'amélioration (${upgradeCost} points)`;

    // Désactive le bouton si on n'a pas assez de points
    upgradeButton.disabled = points < upgradeCost;

    status.textContent = `Tu gagnes ${pointsPerTick} point toutes les 5 secondes.`;
  }
}

// ================================
// BOUCLE DU JEU
// ================================

function gameTick() {
  // On gagne des points
  points += pointsPerTick;

  // On actualise l'affichage
  updateUI();

  console.log(`Game tick : +${pointsPerTick} point(s)`);
}

// Toutes les 5 secondes
setInterval(gameTick, 5000);

// ================================
// ACHAT DE L'AMÉLIORATION
// ================================

function buyUpgrade() {
  // Sécurité : on vérifie qu'on a assez de points
  if (points < upgradeCost) {
    return;
  }

  // On dépense les points
  points -= upgradeCost;

  // L'amélioration est achetée
  upgradeBought = true;

  // On passe de +1 à +2
  pointsPerTick = 2;

  // Mise à jour de l'affichage
  updateUI();

  console.log("Amélioration achetée !");
}

// Quand le bouton est cliqué
upgradeButton.addEventListener("click", buyUpgrade);

// ================================
// INITIALISATION
// ================================

updateUI();
