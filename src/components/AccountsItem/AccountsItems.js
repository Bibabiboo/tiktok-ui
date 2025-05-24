import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountsItem.module.scss';
import Image from '~/components/Images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountsItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4>
                    <span className={cx('username')}>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('fullname')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AccountsItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountsItem;
