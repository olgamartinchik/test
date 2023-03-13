import { ErrorService } from "./ErrorService.js";
export class ValidationService {
	constructor() {
		this.errorService = new ErrorService();
	}
	validate(form) {
		let result = true;
		let inputs = form.querySelectorAll("input");
		inputs.forEach((input, ind) => {
			const message = this.getInputErrorMessage(inputs, input, ind);
			if (message) {
				result = false;
			} else {
				result = true;
			}
		});

		return result;
	}
	inputHandler(input, ind, form) {
		const message = this.getInputErrorMessage(input, ind);
		this.toggleAnimationOfBtn(message, form);
	}
	toggleAnimationOfBtn(message, form) {
		const btn = form.querySelector(".button");
		message
			? btn.classList.add("animate-btn")
			: btn.classList.remove("animate-btn");
	}
	getInputErrorMessage(inputs, input, ind) {
		let message;
		const nameRegexp = /^[a-zA-Z]+$/;
		const emailRegexp = /^\S+@\S+\.\S+$/;
		const passwordRegexp = /^[0-9a-zA-Z]{8,}/;
		this.errorService.removeError(input);
		if (
			(input.name === "name" &&
				(input.value === "" || !nameRegexp.test(input.value))) ||
			(input.name === "surname" &&
				(input.value === "" || !nameRegexp.test(input.value))) ||
			(input.name === "nationality" && input.value === "") ||
			(input.name === "email" &&
				(input.value === "" || !emailRegexp.test(input.value))) ||
			(input.name === "password" &&
				(input.value === "" || !passwordRegexp.test(input.value))) ||
			(input.name === "confirmPassword" &&
				(input.value === "" || inputs[ind].value !== inputs[ind - 1].value)) ||
			(input.name === "gender" &&
				!inputs[ind - 1].checked &&
				!inputs[ind].checked)
		) {
			message = this.errorService.getErrorMessage(input);
			this.errorService.createError(input, message);
		}
		return message;
	}
}
