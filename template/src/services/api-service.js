import api from '../factory/api';

const getPokemonAsync = async (id) => {
    try {
        const { data } = await api.get(`/pokemon/${id}`);
        return data;
    } catch (err) {
        return false;
    }
};

export { getPokemonAsync };
