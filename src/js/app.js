import { ErrorService } from "./ErrorService.js";
import { SubmittingForm } from "./Submitting.js";

const form = document.querySelector(".form");
const allInputs = form.querySelectorAll("input");

window.addEventListener("load", () => {
	const submittingForm = new SubmittingForm(form);
	form.addEventListener("submit", (e) => submittingForm.submitForm(e));

	allInputs.forEach((input) => {
		input.addEventListener("click", () => {
			new ErrorService().removeError(input);
		});
	});
});
