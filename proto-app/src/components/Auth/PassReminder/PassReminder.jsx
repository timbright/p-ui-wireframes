import React, { useState } from "react";
import iconUser from "../../../assets/user-icon.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { ReactComponent as IconPass } from "../../../assets/password-icon.svg";

import classes from "./PassReminder.module.scss";

import GlasswallLogo from "../../GlasswallLogo/GlasswallLogo";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const PassReminder = ({ onLoginHandler }) => {
	const [emailValue, setEmailValue] = useState("");

	const submitHandler = (evt) => {
		evt.preventDefault();
		console.log("Send link");
	};

	const onSuccessComplete = () => {
		console.log("ReCAPTCHA is success");
	};
	return (
		<section className={classes.passReminder}>
			<GlasswallLogo className={classes.logo} />
			<div className={classes.wrapForm}>
				<h2 className={classes.heading}>
					<IconPass className={classes.iconPass} viewBox={"0 0 44 44"} />
					Forgotten Password
				</h2>
				<p className={classes.message}>
					Please enter the email address associated with your account. A link
					will be sent to the email address, allowing you to create a new
					password.
				</p>
				<form onSubmit={submitHandler}>
					<Input
						type="email"
						name="email"
						placeholder="Email address"
						style={{
							backgroundImage: `url(${iconUser})`,
						}}
						value={emailValue}
						onChange={(evt) => {
							setEmailValue(evt.target.value);
						}}
					/>
					<ReCAPTCHA
						className={classes.recaptcha}
						sitekey="Your client site key"
						onChange={onSuccessComplete}
					/>
					,
					<div className={classes.wrapButtons}>
						<Button onButtonClick={onLoginHandler}>Cancel</Button>
						<Button buttonType={"submit"}>Send link</Button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default PassReminder;