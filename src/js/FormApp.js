import { ErrorService } from "./ErrorService.js";
import { SubmittingForm } from "./Submitting.js";
import { ValidationService } from "./ValidateService.js";

export class FormApp {
	start() {
		const form = document.querySelector(".form");
		const allInputs = form.querySelectorAll("input");
		const submittingForm = new SubmittingForm(form);
		form.addEventListener("submit", (e) => submittingForm.submitForm(e));

		allInputs.forEach((input) => {
			input.addEventListener("focus", () => {
				new ErrorService().removeError(input);
			});
			// input.addEventListener("input", () => {
			// 	new ValidationService().validate(form);
			// });
		});
	}
}
export default new FormApp();
