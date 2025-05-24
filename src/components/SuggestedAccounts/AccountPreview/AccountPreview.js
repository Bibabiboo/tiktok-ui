import classNames from 'classnames/bind';

import styles from './AccountPreview.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={images.avatarImage} alt="" />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>behaocute</strong>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Phan Nhat Hao</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>6,9M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>6,9M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
