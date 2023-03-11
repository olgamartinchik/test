import { ValidationService } from "./ValidateService.js";
import { Notification } from "./Notification.js";
export class SubmittingForm {
	constructor(form) {
		this.form = form;
		this.validationService = new ValidationService();
		this.notification = new Notification("Registration was successful!");
	}
	submitForm(e) {
		e.preventDefault();
		let isValidate = this.validationService.validate(this.form);
		if (isValidate) {
			this.getGratulation();
			this.notification.show();
		}
		console.log("isValidate", isValidate);

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
	getGratulation() {
		const containerMainContent = document.querySelector(
			".container__main-content"
		);
		const formContainer = containerMainContent.querySelector("#form-container");
		formContainer.classList.add("unvisible");
		const gratulationContent = this.getGratulationContent();

		containerMainContent.insertBefore(
			gratulationContent,
			containerMainContent.firstElementChild
		);
	}
	getGratulationContent() {
		const congratulatedContainer = document.createElement("div");
		congratulatedContainer.classList.add("congratulate-container");

		const title = document.createElement("h1");
		title.textContent = "Thank you!";

		const subtitle = document.createElement("h2");
		subtitle.textContent = "you registered!";
		congratulatedContainer.append(title);
		congratulatedContainer.append(subtitle);

		return congratulatedContainer;
	}
}
