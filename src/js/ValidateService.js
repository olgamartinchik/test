import { ErrorService } from "./ErrorService.js";
export class ValidationService {
	constructor() {
		this.errorService = new ErrorService();
	}
	validate(form) {
		let result = true;
		let inputs = form.querySelectorAll("input");
		inputs.forEach((input, ind) => {
			this.errorService.removeError(input);
			console.log("input name", input.name);
			const nameRegexp = /^[a-zA-Z]+$/;
			const emailRegexp = /^\S+@\S+\.\S+$/;
			const passwordRegexp = /^[0-9a-zA-Z]{8,}/;

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
					(input.value === "" ||
						inputs[ind].value !== inputs[ind - 1].value)) ||
				(input.name === "gender" &&
					!inputs[ind - 1].checked &&
					!inputs[ind].checked)
			) {
				let message = this.errorService.getErrorMessage(input);
				this.errorService.createError(input, message);
				result = false;
			}
		});

		return result;
	}
}
