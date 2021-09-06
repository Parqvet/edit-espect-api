const FanzineRepository = require('../repositories/fanzineRepository');

const repository = new FanzineRepository();

const findById = async (id) => {
    return await repository.getById(id);
}

const findAll = async () => {
    return await repository.getAll();
}

const save = async (fanzine) => {
    return await repository.save(fanzine);
}

const update = async (id, fanzine) => {
    return await repository.update(id, fanzine);
}

const remove = async (id) => {
    return await repository.remove(id);
}

module.exports = {
    findById,
    findAll,
    save,
    update,
    remove
}