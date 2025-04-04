import React, { useState } from 'react';
import { Avatar, Rate, List, Select, Progress, Button, Dropdown } from 'antd';
import classNames from 'classnames/bind';
import styles from './CustomComment.module.scss';
import { EditOutlined, EllipsisOutlined, LikeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function CustomComment() {
    const [filter, setFilter] = useState('newest');
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const navigate = useNavigate();

    const reviews = [
        {
            author: 'Độ đẹp trai',
            avatar: 'https://via.placeholder.com/50',
            rating: 5,
            landscape: 4.5,
            service: 5,
            price: 2,
            cleanliness: 1.5,
            convenience: 2,
            activities: 4,
            date: 'Feb 2025',
            title: 'Chấm vội 6/10',
            content: 'Nước rẻ thì dở nước mắc thì k có tiền mua, nhà vệ sinh siu cùi, buổi trưa nóng như chó nái.',
        },
        {
            author: 'TravelLover2025',
            avatar: 'https://via.placeholder.com/50',
            rating: 4,
            landscape: 4.0,
            service: 4.5,
            price: 4.5,
            cleanliness: 4.5,
            convenience: 4.5,
            activities: 4.5,
            date: 'Jan 2025',
            title: 'Tôi thích quán này',
            content: 'Ghế ngồi quá đã, còn lại như con cặc tao',
        },
    ];

    const ratingCount = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0,
    };

    reviews.forEach((review) => {
        const roundedRating = Math.round(review.rating);
        ratingCount[roundedRating]++;
    });

    const totalReviews = reviews.length;

    const handleFilterChange = (value) => {
        setFilter(value);
    };

    const handleMenuClick = ({ key }) => {
        if (key === 'report') {
            navigate('/hehe');
        }
    };

    const menuItems = [
        {
            key: 'report',
            label: <span>Report this review</span>,
        },
    ];

    const toggleDetails = () => {
        setIsDetailsVisible((prev) => !prev); // Toggle the visibility of details
    };

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Nhận xét & Đánh giá</h3>
            <div className={cx('custom-comment')}>
                <div className={cx('custom-comment-sidebar')}>
                    <div className={cx('custom-comment-rating')}>
                        <div className={cx('rating')}>
                            <span>4.3</span>
                            <Rate allowHalf disabled defaultValue={4.5} />
                        </div>
                        <p className={cx('total-review')}>({totalReviews})</p>
                    </div>

                    <div className={cx('rating-levels')}>
                        <div className={cx('rating-level-item')}>
                            <p className={cx('rating-title')}>Rất tốt</p>
                            <Progress
                                className={cx('progress')}
                                percent={(ratingCount[5] / totalReviews) * 100}
                                showInfo={true}
                                strokeColor={(ratingCount[5] / totalReviews) * 100 >= 50 ? '#4caf50' : '#f44336'}
                                format={() => `${ratingCount[5]} `}
                            />
                        </div>
                        <div className={cx('rating-level-item')}>
                            <p className={cx('rating-title')}>Tốt</p>
                            <Progress
                                className={cx('progress')}
                                percent={(ratingCount[4] / totalReviews) * 100}
                                showInfo={true}
                                strokeColor={(ratingCount[5] / totalReviews) * 100 >= 50 ? '#4caf50' : '#f44336'}
                                format={() => `${ratingCount[4]} `}
                            />
                        </div>
                        <div className={cx('rating-level-item')}>
                            <p className={cx('rating-title')}>Bình thường</p>
                            <Progress
                                className={cx('progress')}
                                percent={(ratingCount[3] / totalReviews) * 100}
                                showInfo={true}
                                strokeColor={(ratingCount[5] / totalReviews) * 100 >= 50 ? '#4caf50' : '#f44336'}
                                format={() => `${ratingCount[3]} `}
                            />
                        </div>
                        <div className={cx('rating-level-item')}>
                            <p className={cx('rating-title')}>Tệ</p>
                            <Progress
                                className={cx('progress')}
                                percent={(ratingCount[2] / totalReviews) * 100}
                                showInfo={true}
                                strokeColor={(ratingCount[5] / totalReviews) * 100 >= 50 ? '#4caf50' : '#f44336'}
                                format={() => `${ratingCount[2]} `}
                            />
                        </div>
                        <div className={cx('rating-level-item')}>
                            <p className={cx('rating-title')}>Rất tệ</p>
                            <Progress
                                className={cx('progress')}
                                percent={(ratingCount[1] / totalReviews) * 100}
                                showInfo={true}
                                strokeColor={(ratingCount[5] / totalReviews) * 100 >= 50 ? '#4caf50' : '#f44336'}
                                format={() => `${ratingCount[1]} `}
                            />
                        </div>
                    </div>
                </div>

                <div className={cx('custom-comment-content')}>
                    <div className={cx('custom-comment-filter')}>
                        <Select
                            defaultValue="all"
                            onChange={handleFilterChange}
                            className={cx('custom-comment-select')}
                        >
                            <Select.Option value="all">Tất cả</Select.Option>
                            <Select.Option value="mostliked">Nhiều lượt thích nhất</Select.Option>
                            <Select.Option value="newest">Mới nhất</Select.Option>
                            <Select.Option value="oldest">Cũ nhất</Select.Option>
                        </Select>

                        <Button icon={<EditOutlined />} className={cx('write-review-btn')} type="primary">
                            Viết đánh giá
                        </Button>
                    </div>

                    <List
                        itemLayout="horizontal"
                        dataSource={reviews}
                        renderItem={(item) => (
                            <List.Item className={cx('custom-comment-item')}>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<span className={cx('custom-comment-author')}>{item.author}</span>}
                                    description={
                                        <>
                                            <div className={cx('rating-and-reaction')}>
                                                <Rate className={cx('rating-title')} disabled value={item.rating} />
                                                <div className={cx('reaction')}>
                                                    <Button
                                                        icon={<LikeOutlined />}
                                                        className={cx('like-btn')}
                                                        type="text"
                                                    >
                                                        <span className={cx('like-count')}> 30</span>
                                                    </Button>

                                                    <Dropdown
                                                        menu={{
                                                            items: menuItems,
                                                            onClick: handleMenuClick,
                                                        }}
                                                        trigger={['click']}
                                                        placement="bottomRight"
                                                        arrow={true}
                                                    >
                                                        <Button
                                                            icon={
                                                                <EllipsisOutlined
                                                                    style={{ fontSize: '23px', fontWeight: 'bold' }}
                                                                />
                                                            }
                                                            className={cx('more-btn')}
                                                            type="text"
                                                        />
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <p className={cx('custom-comment-title')}>{item.title}</p>
                                            <p className={cx('custom-comment-text')}>{item.content}</p>
                                            <p className={cx('custom-comment-date')}>{item.date}</p>
                                            <div onClick={toggleDetails} className={cx('view-details-btn')}>
                                                {isDetailsVisible ? 'Ẩn chi tiết' : 'Xem chi tiết đánh giá'}
                                            </div>

                                            {isDetailsVisible && (
                                                <div className={cx('rating-details')}>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className={cx('rating-label')}>Cảnh quan:</td>
                                                                <td className={cx('rating-stars')}>
                                                                    <Rate allowHalf disabled value={item.landscape} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className={cx('rating-label')}>
                                                                    Dịch vụ/Tiện ích:
                                                                </td>
                                                                <td className={cx('rating-stars')}>
                                                                    <Rate allowHalf disabled value={item.service} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className={cx('rating-label')}>Giá cả:</td>
                                                                <td className={cx('rating-stars')}>
                                                                    <Rate allowHalf disabled value={item.price} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className={cx('rating-label')}>Vệ sinh:</td>
                                                                <td className={cx('rating-stars')}>
                                                                    <Rate allowHalf disabled value={item.cleanliness} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className={cx('rating-label')}>
                                                                    Độ thuận tiện đường đi:
                                                                </td>
                                                                <td className={cx('rating-stars')}>
                                                                    <Rate allowHalf disabled value={item.convenience} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className={cx('rating-label')}>Hoạt động:</td>
                                                                <td className={cx('rating-stars')}>
                                                                    <Rate allowHalf disabled value={item.activities} />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}
                                        </>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

export default CustomComment;
