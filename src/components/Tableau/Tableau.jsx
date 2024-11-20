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
    
    width: "88vw", // La largeur sera 50% de la largeur de l'écran
    height: "90vh", // La hauteur sera 40% de la hauteur de l'écran
    
  },
  table: {
    width: "100%", // Le tableau prend toute la largeur du conteneur
    height: "100%", // Le tableau prend toute la hauteur du conteneur
    borderCollapse: "collapse",
  },
  container2: {
    position: "fixed",
    bottom: "1vh", // Positionné en bas avec un petit espace
    right: "1vw", // Positionné à droite avec un petit espace
    backgroundColor: "white", // Couleur de fond pour plus de clarté
    borderRadius: "20px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Ombre pour le style
    
    width: "86vw", // La largeur sera 40% de la largeur de l'écran
    height: "80vh", // La hauteur sera 30% de la hauteur de l'écran
    
  },
  table2: {
    width: "100%", // Le tableau prend toute la largeur du conteneur
    height: "100%", // Le tableau prend toute la hauteur du conteneur
    borderCollapse: "collapse",
  },
};

export default Tableau;
