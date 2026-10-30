// Récupération des éléments
const fileItems = document.querySelectorAll('.file-item');
const fileContents = document.querySelectorAll('.file-content');
const tabTitle = document.getElementById('current-tab-title');

// Écoute des clics sur les fichiers du menu latéral
fileItems.forEach(item => {
  item.addEventListener('click', () => {
    
    // 1. Retirer la classe 'active' de tous les fichiers et contenus
    fileItems.forEach(f => f.classList.remove('active'));
    fileContents.forEach(c => c.classList.remove('active'));

    // 2. Ajouter la classe 'active' sur le fichier cliqué
    item.classList.add('active');

    // 3. Récupérer l'identifiant du fichier à afficher (data-target)
    const targetId = item.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);

    // 4. Afficher le contenu correspondant
    if (targetContent) {
      targetContent.classList.add('active');
    }

    // 5. Mettre à jour le nom dans l'onglet du haut
    tabTitle.textContent = item.textContent.trim();
  });
});