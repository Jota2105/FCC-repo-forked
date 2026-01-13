const { Model, DataTypes } = require('sequelize');
class Tipoproceso extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: 'tipo_proceso',  //---- tabla en la bdd
            modelName: 'Tipoproceso',//---- nobmre del Modelo en el codigo
            schema: 'fcc_historiaclinica', //---eesquem en la base de datos
            timestamps: false, // no incluir fecha creacion y actualizacion
        };
    }

    static associate(models) {  //----relacion Provincia y Canton
        Tipoproceso.hasOne(models.Procesos, {  //---- 1 Canton pertenece a 1 Provincia / 1 Provincia n Cantones
            foreignKey: 'id_tipo_proceso',
            as: 'tipo_proceso_proceso',
        });
    }

}

//------------
const TipoProcesoSchema = {
    id_tipo_proceso:{
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    nombre_tipo_proceso: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    descripcion_tipo_proceso: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },
    
}

module.exports = {Tipoproceso, TipoProcesoSchema}; 