import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthOceania,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, UploadIcon } from '~/components/icons';
import Search from '../Search';
import images from '~/assets/images';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthOceania} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: ' language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
                {
                    type: ' language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: ' language',
                    code: 'vi',
                    title: ' Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoa',
    },

    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItems) => {
        switch (menuItems.type) {
            case 'language':
                // handle
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="ảnh" />
                </Link>

                <Search></Search>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video">
                                <button className={cx('action-btn')}>
                                    <UploadIcon></UploadIcon>
                                </button>
                            </Tippy>
                            <button className={cx('action-btn')}>
                                <InboxIcon></InboxIcon>
                            </button>
                            {/* <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button> */}
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://cdn.ferrari.com/cms/network/media/img/resize/64a3cdc64f6e4300212d82c8-ferrari-genuine-banner-f8-tributo-page-split-mob?width=375&height=350"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                fallback="https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
