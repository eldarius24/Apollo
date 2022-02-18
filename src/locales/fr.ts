import ILocale from '../locale';

const locale: ILocale = {
    address: 'Addresse',
    maintenanceMessages: {
        disabled: `J'ai désactivé le mode maintenance et j'interroge à nouveau le serveur !`,
        enabled: `J'ai activé le mode maintenance et je n'interrogerai plus le serveur !`,
    },
    map: 'Map',
    mission: 'Mission',
    noMap: 'pas de map sélectionnée',
    noPermissions: `Vous n'avez pas la permission pour faire ceci !`,
    noPlayers: 'Pas de joueurs',
    pingMessage: 'le seuil de joueurs a été atteint sur le serveur. Augmentez-le maintenant !',
    playerCount: 'Nombre de joueur',
    playerList: 'Liste de joueur',
    presence: {
        botFailure: 'Echec du bot',
        error: 'Serveur en cours de réparation',
        maintenance: 'Réparation en cours',
        ok: 'Zeus on',
    },
    queryTime: 'Temps de requete',
    serverDownForMaintenance: 'En cours de réparation',
    serverDownForMaintenanceDescription: 'Le serveur est actuellement en cours de réparation. Retenter plus tard!',
    serverDownMessages: {
        pingMessage: ', le serveur ne répond pas, s\'il vous plait, réparez-le !',
        pleaseFixServer: ', s\'il vous plait, réparez le serveur!',
        serverDownAlternative: 'le serveur ne répond pas !',
    },
    serverOffline: 'Le serveur est hors ligne !',
    statuses: {
        offline: 'Hors-ligne',
        online: 'En ligne',
        status: 'Statut',
    },
    tooManyPlayers: 'Trop de joueurs à afficher',
};

export default locale;