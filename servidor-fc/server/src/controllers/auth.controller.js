const UsuarioService = require('../services/historiaclinica.services/usuario.service');
const service = new UsuarioService();

const changePassword = async (req, res, next) => {
    try {
        const { user } = req.user;
        const { oldPassword, newPassword } = req.body;
        const result = await service.changePassword(user, oldPassword, newPassword);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = { changePassword };
