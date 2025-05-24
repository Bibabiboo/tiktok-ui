import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './SuggestedAccount.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                delay={[800, 0]}
                offset={[-20, 0]}
                placement="bottom-start"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={images.avatarImage} alt="" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>behaocute</strong>
                            <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Phan Nhat Hao</p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default AccountItem;
