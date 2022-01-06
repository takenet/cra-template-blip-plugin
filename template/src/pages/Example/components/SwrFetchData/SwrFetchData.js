import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import settings from '../../../../config';
import useFetch from '../../../../hooks/useFetch';

import Card from '../../../../components/Card';
import Header from '../Header';

const SwrFetchData = ({ onClick }) => {
    const { t } = useTranslation();

    const [id, setId] = useState(1);
    const { data } = useFetch(`/pokemon/${id}`);

    useEffect(() => {
        handleGetPokemon();
        // eslint-disable-next-line
	}, []);

    const handleGetPokemon = useCallback(() => {
        const pokemonId = getRandomIntInclusive(1, 151);
        setId(pokemonId);
    }, []);

    const getRandomIntInclusive = (min, max) => {
        const minValue = Math.ceil(min);
        const maxValue = Math.floor(max);
        return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    };

    const getImage = (sprites) => {
        if (
            !Object.keys(sprites).length ||
			!Object.keys(sprites.other).length ||
			!Object.keys(sprites.other.dream_world).length
        ) {
            return settings.defaultPluginImage;
        }
        const image = sprites.other.dream_world.front_default;
        return image;
    };

    const getType = (types) => {
        if (!types.length) {
            return '-';
        }
        const type = types[0].type.name;
        return type;
    };

    return (
        <div className="ph1 ph4-m ph5-ns pb5">
            <Header
                title={t('menu.goBack')}
                canRefresh
                onRefresh={() => handleGetPokemon()}
                onClick={onClick}
            />
            {!!data && (
                <div className="mw5 center mv3">
                    <Card className="min-h-18">
                        <div className="flex flex-column items-center justify-center">
                            <img
                                src={getImage(data.sprites)}
                                className="br-100 h4 w4 dib ba b--black-05 pa1 bg-black-05"
                                title={data.name}
                                alt={data.name}
                            />
                            <h1 className="f3 mb2 ttc">{data.name}</h1>
                            <h2 className="f5 fw4 gray mt0">
								#{`${data.id}`.padStart(3, '0')}
                            </h2>
                            <div className="w-100 flex justify-around">
                                <div className="flex flex-column tc">
                                    <p className="f5 mb2 ttc">
                                        {getType(data.types)}
                                    </p>
                                    <p className="f7 gray mt0">Type</p>
                                </div>
                                <div className="flex flex-column tc">
                                    <p className="f5 mb2">
                                        {(data.weight / 10).toFixed(1)}kg
                                    </p>
                                    <p className="f7 gray mt0">Weight</p>
                                </div>
                                <div className="flex flex-column tc">
                                    <p className="f5 mb2">
                                        {(data.height / 10).toFixed(1)}m
                                    </p>
                                    <p className="f7 gray mt0">Height</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
};

SwrFetchData.propTypes = {
    onClick: PropTypes.func
};

export default SwrFetchData;
