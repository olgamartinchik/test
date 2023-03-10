import { ValidationService } from "./ValidateService.js";
export class SubmittingForm {
	constructor(form) {
		this.form = form;
		this.validationService = new ValidationService();
	}
	submitForm(e) {
		e.preventDefault();
		let isValidate = this.validationService.validate(this.form);
		// if (isValidate) {
		// 	alert("Ok");
		// } else {
		// 	alert("error");
		// }
		const userData = this.getUserData(this.form);
		console.log("user data", userData);
	}
	getUserData(form) {
		const formData = new FormData(form);
		const userData = {
			name: formData.get("name"),
			surname: formData.get("surname"),
			nationality: formData.get("nationality"),
			email: formData.get("email"),
			birth: {
				day: formData.get("day"),
				month: formData.get("month"),
				year: formData.get("year"),
			},
			gender: formData.get("gender"),
			password: formData.get("password"),
		};

		return userData;
	}
}
