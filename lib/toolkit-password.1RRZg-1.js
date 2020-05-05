var BlzPassword = function($input, options) {
	if (!$input) {
		return;
	}

	if (window.DOMTokenList && !window.DOMTokenList.prototype.forEach) {
		window.DOMTokenList.prototype.forEach = function (callback, thisArg) {
			thisArg = thisArg || window;
			for (var i = 0; i < this.length; i++) {
				callback.call(thisArg, this[i], i, this);
			}
		};
	}

	if (document.msCapsLockWarningOff === false) {
		document.msCapsLockWarningOff = true;
	}

	this.visibilityToggle = options ? options.visibilityToggle : true;
	this.strengthIndicator = options ? options.strengthIndicator : false;
	this.passwordStrengthValues = this.strengthIndicator ? options.strengthValues : [];
	this.passwordStrengthText = this.strengthIndicator ? options.strengthText : "";
	this.passwordStrengthDefaultLabel = this.strengthIndicator ? options.strengthDefaultText : "";
	this.capsLockOn = false;
	this.showPassword = false;
	this.passwordStrengthValue = 0;

	var wrapper = document.createElement("div");
	wrapper.classList.add("blz-password-wrapper");
	$input.parentNode.insertBefore(wrapper, $input);
	wrapper.appendChild($input);

	var capsLockSpan = document.createElement("span");
	capsLockSpan.classList.add("caps-lock-indicator");
	capsLockSpan.classList.add("hide");
	var capsLockIcon = document.createElement("i");
	capsLockIcon.classList.add("fas");
	capsLockIcon.classList.add("fa-arrow-alt-square-up");
	capsLockSpan.appendChild(capsLockIcon);

	if (this.visibilityToggle) {
		var viewPasswordButton = document.createElement("span");
		viewPasswordButton.classList.add("view-password-button");
		var viewPasswordIcon = document.createElement("i");
		viewPasswordIcon.classList.add("show-password");
		viewPasswordIcon.classList.add("fas");
		viewPasswordIcon.classList.add("fa-eye");
		var hidePasswordIcon = document.createElement("i");
		hidePasswordIcon.classList.add("hide-password");
		hidePasswordIcon.classList.add("hide");
		hidePasswordIcon.classList.add("fas");
		hidePasswordIcon.classList.add("fa-eye-slash");
		viewPasswordButton.appendChild(viewPasswordIcon);
		viewPasswordButton.appendChild(hidePasswordIcon);
		wrapper.appendChild(viewPasswordButton);
	}
	wrapper.appendChild(capsLockSpan);

	this.$blzPassword = wrapper;
};

BlzPassword.prototype = {
	init: function() {
		if (!this.$blzPassword) {
			return;
		}

		var input = this.$blzPassword.querySelector("input");
		input.addEventListener("keydown", this.capsLockListener.bind(this));
		input.addEventListener("keyup", this.capsLockListener.bind(this));
		input.addEventListener("click", this.capsLockListener.bind(this));
		input.addEventListener("focus", this.capsLockListener.bind(this));
		input.addEventListener("blur", this.clearIndicators.bind(this));
		var viewPasswordButton = this.$blzPassword.querySelector(".view-password-button");
		viewPasswordButton.addEventListener("click", this.togglePassword.bind(this));
		if (this.strengthIndicator === true) {
			this.createStrengthIndicator();
		}
	},
	createStrengthIndicator: function() {
		var progressBar = document.createElement("progress");
		progressBar.classList.add("password-strength-meter");
		progressBar.setAttribute("max", "100");
		progressBar.setAttribute("value", "0");
		var strengthLabel = document.createElement("div");
		strengthLabel.classList.add("password-strength-status");
		this.$blzPassword.appendChild(progressBar);
		this.$blzPassword.appendChild(strengthLabel);
		this.setPasswordStrengthText(this.passwordStrengthDefaultLabel);
	},
	capsLockListener: function(e) {
		if (e.type === "focus") {
			e.target.click();
			return;
		}

		if (e.getModifierState("CapsLock")) {
			if (!this.capsLockOn) {
				this.setCapsLock(true);
			}
		} else if (this.capsLockOn) {
			this.setCapsLock(false);
		}
	},
	setCapsLock: function(value) {
		var capsLockIndicator = this.$blzPassword.querySelector(".caps-lock-indicator");
		if (value === true) {
			capsLockIndicator.classList.remove("hide");
		} else {
			capsLockIndicator.classList.add("hide");
		}

		this.capsLockOn = value;
	},
	togglePassword: function() {
		if (this.showPassword === true) {
			this.displayPassword(false);
		} else {
			this.displayPassword(true);
		}
	},
	displayPassword: function(value) {
		if (value === true) {
			this.$blzPassword.querySelector("input").setAttribute("type", "text");
			this.$blzPassword.querySelector(".show-password").classList.add("hide");
			this.$blzPassword.querySelector(".hide-password").classList.remove("hide");
		} else {
			this.$blzPassword.querySelector("input").setAttribute("type", "password");
			this.$blzPassword.querySelector(".hide-password").classList.add("hide");
			this.$blzPassword.querySelector(".show-password").classList.remove("hide");
		}

		this.showPassword = value;
	},
	clearIndicators: function(e) {
		if (!e.target.classList.contains("view-password-button") &&
			!e.target.classList.contains("caps-lock-indicator")) {
			this.setCapsLock(false);
		}
	},
	computePasswordStrength: function(passwordStrengthValue) {
		var value = this.$blzPassword.querySelector("input").value;
		if (value !== "" && passwordStrengthValue !== null && passwordStrengthValue !== "") {
			var sectionSize = 100 / this.passwordStrengthValues.length;
			if (passwordStrengthValue >= this.passwordStrengthValues.length) {
				passwordStrengthValue = this.passwordStrengthValues.length - 1;
			}
			this.passwordStrengthValue = passwordStrengthValue;
			this.setPasswordStrengthText(this.passwordStrengthValues[passwordStrengthValue]);
			document.querySelector(".password-strength-meter").value = (this.passwordStrengthValue + 1) * sectionSize;
			return;
		}
		this.setPasswordStrengthText(this.passwordStrengthDefaultLabel);

		document.querySelector(".password-strength-meter").value = 0;
	},
	setPasswordStrengthText: function(passwordStrengthText) {
		this.passwordStrengthText = passwordStrengthText;
		document.querySelector(".password-strength-status").innerHTML = this.passwordStrengthText;
		var strengthMeter = document.querySelector(".password-strength-meter");
		strengthMeter.classList.forEach(function(value) {
			if (value !== "password-strength-meter") {
				strengthMeter.classList.remove(value);
			}
		});
		strengthMeter.classList.add("strength-" + passwordStrengthText.toLowerCase().replace(" ", "-"));
	}
};
