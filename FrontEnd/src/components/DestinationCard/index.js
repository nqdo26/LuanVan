import { Card, Rate } from "antd";
import { motion } from "framer-motion";
import { StarFilled, HeartOutlined } from "@ant-design/icons";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./DestinationCard.module.scss";

const cx = classNames.bind(styles);

function DestinationCard() {
    const [liked, setLiked] = useState(false);
    const toggleLike = () => setLiked(!liked);

    const rating = 3.5;
    const badges = ["Chụp hình", "Học bài", "Cà phê ngon", "Sống ảo", "View đẹp"];
    const maxBadgesToShow = 2;

    return (
        <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.3 }}
            className={cx("destination-card")}
        >
            <Card
                styles={{
                    body: {
                        padding: "16px",
                    },
                }}
                hoverable
                cover={
                    <div className={cx("image-container")}>
                        <img
                            alt="WIMI-Factory"
                            src="/destination-img.png"
                            className={cx("card-image")}
                        />
                        <button className={cx("favorite-btn")}>
                            <HeartOutlined className={cx("favourite-icon")} style={{ color: "white", fontSize: "22px", transition: "color 0.3s ease" }} />
                        </button>
                    </div>
                }
                className={cx("card")}
            >
                <div className={cx("location")}>Cần Thơ</div>
                <h3 className={cx("title")}>WIMI-Factory quán cà phê nực và nước dở nhất Cần Thơ City</h3>

                <div className={cx("badge-container")}>
                    {badges.slice(0, maxBadgesToShow).map((badge, index) => (
                        <div key={index} className={cx("badge")}>{badge}</div>
                    ))}
                    {badges.length > maxBadgesToShow && <div className={cx("badge")}>...</div>}
                </div>

                <div className={cx("rating-container")}>
                    <Rate disabled allowHalf value={rating} />
                    <span className={cx("rating-value")}>{rating}</span>
                    <span className={cx("rating-count")}>(300)</span>
                </div>

                <div className={cx("reaction")}>
                    <span>3 tỷ bình luận</span>
                </div>
            </Card>
        </motion.div>
    );
}

export default DestinationCard;
