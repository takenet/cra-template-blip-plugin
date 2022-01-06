import '@testing-library/jest-dom';
import mockAxios from 'jest-mock-axios';

import * as api from '../api-service';

describe('Api service', () => {
    afterEach(() => mockAxios.reset());

    it('should return data successfully when call getPokemonAsync method', async () => {
        const pokemonId = 45;
        const pokemon = {
            id: 45,
            name: 'vileplume',
            height: 12,
            weight: 186
        };

        mockAxios.get.mockResolvedValueOnce({ data: pokemon });

        const result = await api.getPokemonAsync(pokemonId);

        expect(mockAxios.get).toHaveBeenCalledWith(`/pokemon/${pokemonId}`);
        expect(result).toEqual(pokemon);
    });

    it('should throw error when call getPokemonAsync method', async () => {
        const pokemonId = 45;
        const message = 'Network Error';
        mockAxios.get.mockRejectedValueOnce(new Error(message));

        const result = await api.getPokemonAsync(pokemonId);

        expect(mockAxios.get).toHaveBeenCalledWith(`/pokemon/${pokemonId}`);
        expect(result).toEqual(false);
    });
});
