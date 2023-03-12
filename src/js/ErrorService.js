export class ErrorService {
	createError(input, text) {
		const parent = input.parentNode;

		const errorLabel = document.createElement("span");
		errorLabel.classList.add("error-label");
		errorLabel.textContent = text;

		if (parent.classList.contains("form__group_container")) {
			parent.classList.add("error");
			parent.append(errorLabel);
		} else if (
			parent.parentNode.parentNode.classList.contains("form__group_container")
		) {
			parent.parentNode.parentNode.classList.add("error");
			parent.parentNode.parentNode.append(errorLabel);
		}
	}
	removeError(input) {
		const parent = input.parentNode;
		if (parent.classList.contains("error")) {
			parent.querySelector(".error-label").remove();
			parent.classList.remove("error");
		} else if (parent.parentNode.parentNode.classList.contains("error")) {
			parent.parentNode.parentNode.querySelector(".error-label").remove();
			parent.parentNode.parentNode.classList.remove("error");
		}
	}
	getErrorMessage(input) {
		switch (input.name) {
			case "name":
				return "Must be only letters";
			case "surname":
				return "Must be only letters";
			case "nationality":
				return "Required";
			case "email":
				return "Must be a valid email";
			case "gender":
				return "Required";
			case "password":
				return "Length 8 and higher include num, uppercase, lowercase letter ";
			case "confirmPassword":
				return "Passwords don't match";
		}
	}
}
