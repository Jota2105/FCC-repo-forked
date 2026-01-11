const setupHistoriaClinicaModels = require('./historiaclinica.models');
const setupComunidadModels = require('./comunidad.models');
const setupHooks = require('./hooks');

function setupModels(sequelize) {
  setupHistoriaClinicaModels(sequelize);
  setupComunidadModels(sequelize);

  // Configurar hooks después de inicializar los modelos
  setupHooks();
}

module.exports = setupModels;
