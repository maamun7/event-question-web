import { store } from 'react-notifications-component';

function successNotification() {
	return {
		title: "Wonderful!",
		message: "Configurable",
		type: "success",
		insert: "top",
		container: "top-right",
		animationIn: ["animated", "fadeIn"],
		animationOut: ["animated", "fadeOut"],
		dismiss: {
			duration: 5000,
			pauseOnHover: true,
			showIcon: true,
			click: true
		}
	}
}

function dangerNotification() {
	return {
		title: "Woops !",
		message: "Error occurred ",
		type: "danger",
		insert: "top",
		container: "top-right",
		animationIn: ["animated", "fadeIn"],
		animationOut: ["animated", "fadeOut"],
		dismiss: {
			duration: 5000,
			pauseOnHover: true,
			showIcon: true,
			click: true
		}
	}
}

function warningNotification() {
	return {
		title: "Warnings !",
		message: "Your app might be risk !",
		type: "warning",
		insert: "top",
		container: "bottom-right",
		animationIn: ["animated", "fadeIn"],
		animationOut: ["animated", "fadeOut"],
		dismiss: {
			duration: 5000,
			pauseOnHover: true,
			showIcon: true,
			click: true
		}
	}
}

function infoNotification() {
	return {
		title: "Information !",
		message: "Message !",
		type: "info",
		insert: "top",
		container: "bottom-right",
		animationIn: ["animated", "fadeIn"],
		animationOut: ["animated", "fadeOut"],
		dismiss: {
			duration: 5000,
			pauseOnHover: true,
			showIcon: true,
			click: true
		}
	}
}


export default function showNotification(type, msg) {

	let configOfType = {};

	switch (type) {

		case 'danger':
			configOfType = dangerNotification();

			break;
		case 'warning':
			configOfType = warningNotification();

			break;
		case 'info':
			configOfType = infoNotification();

			break;
		default:
			configOfType = successNotification();
	}

	store.addNotification({
		...configOfType,
		message: msg
	});

	return null;
}