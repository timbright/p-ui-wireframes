import React from "react";

import classes from "./UserLink.module.scss";

import AccountIcon from "../../../assets/svg/account-icons/account-name-icon.svg";

const UserLink = ({ username, expanded, openPopup, closePopup }) => {
	const cls = [classes.UserLink];
	if (expanded) {
		cls.push(classes.userLinkExpanded);
	}

	return (
		<section
			className={cls.join(" ")}
			onMouseEnter={openPopup}
			onMouseLeave={closePopup}
		>
			<div
				style={{
					backgroundImage: `url(${AccountIcon})`,
				}}
			></div>
			<p>{username}</p>
		</section>
	);
};
export default UserLink;
