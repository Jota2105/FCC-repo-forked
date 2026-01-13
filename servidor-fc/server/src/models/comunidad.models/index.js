const { Provincia, ProvinciaSchema } = require('./provincia.model');
const { Canton, CantonSchema} = require('./canton.model');
const { Procesos, ProcesoSchema} = require('./procesos.model');
const { Tipoproceso, TipoProcesoSchema} = require('./tipo_proceso');
const { Normativa, NormativaSchema} = require('./normativa');
const { Tipo_normativa, Tipo_normativaSchema} = require('./tipo_normativa');

const { Parroquia, ParroquiaSchema } = require('./parroquia.model');
const { TipoPersona, TipoPersonaSchema } = require('./tipo_persona.model');
const { Persona, PersonaSchema } = require('./persona.model');
const { Interaccion, InteraccionSchema } = require('./interaccion.model');
const { PersonaInteraccion, PersonaInteraccionSchema } = require('./persona_interaccion.model');


function setupComunidadModels(sequelize) {


   //models
   Provincia.init(ProvinciaSchema, Provincia.config(sequelize));
   Canton.init(CantonSchema, Canton.config(sequelize));
   Parroquia.init(ParroquiaSchema, Parroquia.config(sequelize)); 
   TipoPersona.init(TipoPersonaSchema, TipoPersona.config(sequelize));
   Persona.init(PersonaSchema, Persona.config(sequelize));
   Interaccion.init(InteraccionSchema, Interaccion.config(sequelize));
   PersonaInteraccion.init(PersonaInteraccionSchema, PersonaInteraccion.config(sequelize));
   Procesos.init(ProcesoSchema, Procesos.config(sequelize));
   Tipoproceso.init(TipoProcesoSchema, Tipoproceso.config(sequelize));
   Normativa.init(NormativaSchema, Normativa.config(sequelize));
   Tipo_normativa.init(Tipo_normativaSchema, Tipo_normativa.config(sequelize));

   //association
   Provincia.associate({ Canton });
   Canton.associate({ Provincia, Parroquia });
   Parroquia.associate({ Canton,Persona});
   TipoPersona.associate({ Persona});
   Persona.associate({ Parroquia, TipoPersona, Interaccion, PersonaInteraccion});
   Interaccion.associate({ Persona, PersonaInteraccion,Procesos});
   Normativa.associate({Tipo_normativa, Procesos})
   Procesos.associate({Interaccion,Tipoproceso, Normativa});



}

module.exports = setupComunidadModels;
