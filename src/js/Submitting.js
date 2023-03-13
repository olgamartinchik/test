import { ValidationService } from "./ValidateService.js";
import { Notification } from "./Notification.js";
import { RequestService } from "./RequestService.js";

export class SubmittingForm {
	constructor(form) {
		this.form = form;
		this.validationService = new ValidationService();
	}
	async submitForm(e) {
		e.preventDefault();
		const userData = this.getUserData(this.form);
		let isValidate = this.validationService.validate(this.form);
		if (isValidate) {
			this.createGratulationSection();
		}

		const response = await new RequestService(isValidate).getResponse();
		console.log("response", response);
		new Notification(response.message).show();
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
	createGratulationSection() {
		const containerMainContent = document.querySelector(
			".container__main-content"
		);
		const formContainer = containerMainContent.querySelector("#form-container");
		formContainer.classList.add("invisible");
		const gratulationContent = this.createGratulationContent();
		if (gratulationContent) {
			containerMainContent.style.justifyContent = "center";
		}

		containerMainContent.insertBefore(
			gratulationContent,
			containerMainContent.firstElementChild
		);
	}
	createGratulationContent() {
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
