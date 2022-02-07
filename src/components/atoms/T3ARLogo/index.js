import PropTypes from "prop-types";
import t3ar_blue from '../../../../public/static/img/t3ar/t3ar_blue.png';
import t3ar_green from '../../../../public/static/img/t3ar/t3ar_green.png';
import t3ar_purple from '../../../../public/static/img/t3ar/t3ar_purple.png';
import t3ar_red from '../../../../public/static/img/t3ar/t3ar_red.png';
import t3ar_white from '../../../../public/static/img/t3ar/t3ar_white.png';
import Image from 'next/image';

const t3arColor = (color) => {
    if (color === 'green') {
        return t3ar_green;
    } else if (color == 'purple') {
        return t3ar_purple;
    } else if (color == 'red') {
        return t3ar_red;
    } else if (color == 'white') {
        return t3ar_white;
    } else {
        return t3ar_blue;
    }
};

const T3ARLogo = ({color = 'blue'}) => {
    const logo = t3arColor(color);

    return (
        <Image src={logo} alt={`T3AR ${color}`} width={250} height={250}/>
    );
};

T3ARLogo.propTypes = {
    color: PropTypes.string
};

export default T3ARLogo;