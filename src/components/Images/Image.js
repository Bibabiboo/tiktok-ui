import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, className, fallback, ...passProps }, ref) {
    const [_fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(fallback ? fallback : images.noImage);
    };

    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={_fallback || src}
            {...passProps}
            onError={handleError}
        />
    );
}

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default forwardRef(Image);
