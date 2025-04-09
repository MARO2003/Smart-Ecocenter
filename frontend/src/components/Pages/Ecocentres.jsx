import React, { useState, useEffect } from 'react';

function Ecocentres() {
  // État pour stocker les données des écocentres et les filtres
  const [ecocentres, setEcocentres] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  // Récupérer les écocentres depuis l'API
  useEffect(() => {
    // Remplace cette URL par celle de ton API
    const fetchEcocentres = async () => {
      try {
        const response = await fetch('https://api.exemple.com/ecocentres');
        const data = await response.json();
        setEcocentres(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchEcocentres();
  }, []);

  // Filtrage des écocentres en fonction de la recherche et du filtre
  const filteredEcocentres = ecocentres.filter((ecocentre) => {
    // Recherche dans le nom ou l'adresse
    const matchesSearchTerm =
      ecocentre.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ecocentre.adresse.toLowerCase().includes(searchTerm.toLowerCase());

    // Filtre basé sur une catégorie (si une catégorie est sélectionnée)
    const matchesFilter = filter ? ecocentre.categorie === filter : true;

    return matchesSearchTerm && matchesFilter;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Localisations des Ecocentres
      </h1>

      {/* Barre de recherche */}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          className="w-1/2 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Rechercher par nom ou adresse..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filtre par catégorie */}
        <select
          className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Tous les types</option>
          <option value="Recyclage">Recyclage</option>
          <option value="Compostage">Compostage</option>
          <option value="Déchets dangereux">Déchets dangereux</option>
        </select>
      </div>

      {/* Affichage des écocentres filtrés */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEcocentres.map((ecocentre) => (
          <div key={ecocentre.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">{ecocentre.nom}</h2>
            <p className="text-gray-600">{ecocentre.adresse}</p>
            <p className="text-gray-500 text-sm mt-2">Catégorie : {ecocentre.categorie}</p>
            <a
              href={`/ecocentre/${ecocentre.id}`}
              className="mt-4 inline-block text-blue-500 hover:text-blue-600"
            >
              Voir plus
            </a>
          </div>
        ))}
      </div>

      {/* Message si aucune donnée n'est trouvée */}
      {filteredEcocentres.length === 0 && (
        <p className="text-center text-gray-500 mt-4">Aucun écocentre trouvé pour cette recherche.</p>
      )}
    </div>
  );
}

export default Ecocentres;
