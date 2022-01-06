import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({
    title,
    description,
    image,
    imageUrl,
    imageType,
    btn = {},
    className,
    children,
    cardColor = 'white',
    textAlign = 'tc',
    linkable = false
}) => {
    const cardClasses = classNames({
        [`bg-${cardColor}`]: !!cardColor,
        pointer: linkable,
        hoverable: linkable
    });

    const renderImage = () => {
        let imageClasses = '';

        switch (imageType) {
            case 'cover':
                imageClasses = classNames('w-100', 'br--top', 'br2');
                break;
            case 'circle':
                imageClasses = classNames(
                    'br-100',
                    'h3',
                    'w3',
                    'mt2',
                    'mt3-ns'
                );
                break;
            case 'double-ring':
                imageClasses = classNames(
                    'br-100',
                    'h3',
                    'w3',
                    'pa1',
                    'ba',
                    'b--black-10',
                    'mt2',
                    'mt3-ns'
                );
                break;
            case 'rounded-large':
                imageClasses = classNames('br4', 'h3', 'w3', 'mt2', 'mt3-ns');
                break;
            case 'rounded':
                imageClasses = classNames('br2', 'h3', 'w3', 'mt2', 'mt3-ns');
                break;
            default:
                // square
                imageClasses = classNames('h3', 'w3', 'mt2', 'mt3-ns');
                break;
        }

        return (
            <div className="center">
                {imageUrl?.length ? (
                    <img
                        data-testid="card-url-img"
                        src={imageUrl}
                        className={`db ${imageClasses}`}
                        alt="card avatar"
                    />
                ) : (
                    <div
                        data-testid="card-img"
                        className={`db ${imageClasses}`}
                    >
                        {image}
                    </div>
                )}
            </div>
        );
    };

    const renderBody = () => (
        <div className="pa2 pa3-ns min-h-3">
            {!!title && (
                <h6 className={`f6 b mb2 truncate ${textAlign}`} title={title}>
                    {title}
                </h6>
            )}
            {!!description && (
                <p className={`f6 gray mt0 mv1 ${textAlign}`}>{description}</p>
            )}
            {!!children && children}
        </div>
    );

    const renderFooterButton = () => {
        const btnProps = {
            bgColor: !!btn.bgColor ? btn.bgColor : 'white',
            textColor: !!btn.textColor ? btn.textColor : 'blue'
        };

        const btnClassesDefault = classNames({
            [`bg-${btnProps.bgColor}`]: true,
            [`hover-${btnProps.bgColor}`]: true,
            [`${btnProps.textColor}`]: true,
            [`hover-bg-${btnProps.textColor}`]: true
        });

        const btnClassesActive = classNames({
            [`bg-${btnProps.textColor}`]: true,
            [`${btnProps.bgColor}`]: true
        });

        const btnClasses = classNames(
            !!btn.active ? btnClassesActive : btnClassesDefault
        );

        return (
            <div className="w-100 bt bp-bc-medium-wave">
                <button
                    data-testid="card-btn"
                    type="button"
                    className={`w-100 link pointer tc ph3 pv3 db f6 b bg-animate b--none br3 br--bottom ${btnClasses}`}
                    onClick={!!btn.onClick ? btn.onClick : () => {}}
                >
                    {!!btn.text && btn.text}
                </button>
            </div>
        );
    };

    return (
        <article
            className={`w-100 flex flex-column ba b--black-10 br3 shadow-6 animated fade-in ${cardClasses} ${className}`}
        >
            {(!!image || !!imageUrl) && renderImage()}
            {renderBody()}
            {!!Object.keys(btn)?.length && renderFooterButton()}
        </article>
    );
};

Card.propTypes = {
    title: PropTypes.any,
    description: PropTypes.string,
    image: PropTypes.any,
    imageUrl: PropTypes.string,
    imageType: PropTypes.string,
    btn: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.any,
    cardColor: PropTypes.string,
    textAlign: PropTypes.string,
    linkable: PropTypes.bool
};

export default Card;
