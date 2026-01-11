const setupHistoriaClinicaModels = require('./historiaclinica.models');
const setupComunidadModels = require('./comunidad.models');
const setupDonacionesModels = require('./donaciones.models/index')
const setupHooks = require('./hooks');

function setupModels(sequelize) {
  setupHistoriaClinicaModels(sequelize);
  setupComunidadModels(sequelize);
  setupDonacionesModels(sequelize)

  // Configurar hooks después de inicializar los modelos
  setupHooks();
}

module.exports = setupModels;
