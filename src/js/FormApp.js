import { ErrorService } from "./ErrorService.js";
import { SubmittingForm } from "./Submitting.js";

export class FormApp {
	start() {
		const form = document.querySelector(".form");
		const allInputs = form.querySelectorAll("input");
		const submittingForm = new SubmittingForm(form);
		form.addEventListener("submit", (e) => submittingForm.submitForm(e));

		allInputs.forEach((input) => {
			input.addEventListener("click", () => {
				new ErrorService().removeError(input);
			});
		});
	}
}
export default new FormApp();
