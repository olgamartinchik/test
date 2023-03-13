import { ErrorService } from "./ErrorService.js";
import { SubmittingForm } from "./Submitting.js";
import { ValidationService } from "./ValidateService.js";

export class FormApp {
	start() {
		const form = document.querySelector(".form");
		const inputs = form.querySelectorAll("input");
		const btn = form.querySelector(".button");
		const submittingForm = new SubmittingForm(form);
		form.addEventListener("submit", (e) => submittingForm.submitForm(e));

		inputs.forEach((input, ind) => {
			input.addEventListener("focus", () => {
				new ErrorService().removeError(input);
			});
			input.addEventListener("blur", () => {
				new ValidationService().inputHandler(inputs, input, ind, btn);
			});
		});
	}
}
export default new FormApp();
