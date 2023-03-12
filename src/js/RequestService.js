export class RequestService {
	constructor(isValidate) {
		this.isValidate = isValidate;
	}
	async getResponse() {
		try {
			const rawResponse = await fetch(
				`../response/${this.isValidate ? "server-ok" : "server-error"}.json`,
				{ mode: "cors" }
			);
			const content = await rawResponse.json();
			return content;
		} catch (error) {
			console.log("error", error);
		}
	}
}
