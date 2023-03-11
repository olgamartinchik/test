export class Notification {
	constructor(message) {
		this.message = message;
		this.notification = this._create(this.message);
	}
	show() {
		document.body.append(this.notification);
		this.notification.classList.add("showing");
		this.notification
			.querySelector(".close")
			.addEventListener("click", (e) => this.hide(e));
		window.setTimeout(() => {
			this.hide();
		}, 3000);
	}
	hide() {
		this.notification.classList.add("hide");
		this.notification.remove();
	}
	_create() {
		const notification = document.createElement("div");
		notification.classList.add("notification");
		const img = document.createElement("img");
		img.src = "../images/close-notification.svg";
		img.alt = "";
		img.classList.add("close");
		const h1 = document.createElement("h1");
		h1.textContent = this.message;
		notification.append(img, h1);
		return notification;
	}
}
