import React from 'react';
import './Tableau.css';

function Tableau() {
  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Zone de filtre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Contenu des lignes */}
          </tr>
        </tbody>
      </table>

      {/* Container 2 */}
      <div style={styles.container2}>
        <h3>Zone de ticket</h3>
        <p>Ticket 123456.</p>

        {/* Table 2 */}
        <table style={styles.table2}>
          <thead>
            <tr>
              {/* Entête table */}
            </tr>
          </thead>
          <tbody>
            {/* Contenu de table */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    bottom: 0, // Positionné en bas
    right: 0, // Positionné à droite
    backgroundColor: "#BFC3C6", // Couleur de fond pour plus de clarté
    borderTopLeftRadius: "20px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Ombre pour le style
    zIndex: 1000, // Assure que le tableau reste au-dessus d'autres éléments
    width: "2240px", // Largeur fixe
    height: "1185px", // Hauteur fixe
    maxWidth: "100vw", // Largeur maximale en fonction de la taille de la fenêtre
    maxHeight: "100vh", // Hauteur maximale en fonction de la taille de la fenêtre
    zIndex: 10,
    // Assurez-vous que les éléments à l'intérieur sont également flexibles.
  },
  table: {
    width: "100%", // Tableau prend toute la largeur du conteneur
    height: "100%", // Tableau prend toute la hauteur du conteneur
    borderCollapse: "collapse",
  },
  container2: {
    position: "fixed",
    bottom: 14, // Positionné en bas
    right: 10, // Positionné à droite
    backgroundColor: "white", // Couleur de fond pour plus de clarté
    borderRadius: "20px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Ombre pour le style
    zIndex: 1000, // Assure que le tableau reste au-dessus d'autres éléments
    width: "2200px", // Largeur fixe
    height: "1000px", // Hauteur fixe
    maxWidth: "100vw", // Largeur maximale en fonction de la taille de la fenêtre
    maxHeight: "100vh", // Hauteur maximale en fonction de la taille de la fenêtre
    zIndex: 12,
  },
  table2: {
    width: "100%", // Tableau prend toute la largeur du conteneur
    height: "100%", // Tableau prend toute la hauteur du conteneur
    borderCollapse: "collapse",
  },
};

export default Tableau;
