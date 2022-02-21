let members = [];

const actionButton = document.getElementById('action-button');
const dbOSLinks = document.querySelectorAll('.menu-icon-1 > .menu-drop > .drop-link');
const databaseLinks = document.querySelectorAll('.menu-icon-2 > .menu-drop > .drop-link');
const mySqlLinks = document.querySelectorAll('.menu-icon-3 > .menu-drop > .drop-link');
const helpLinks = document.querySelectorAll('.menu-icon-9 > .menu-drop > .drop-link');


class ManageMenu {
	constructor() {
		for (let i = 4; i <= 8; i++) {
			members.push(document.querySelectorAll(`.menu-icon-${i} > .menu-drop > .drop-link`));
		}
		this.manageMain();
		// this.manageSub();
		this.helper = new Helper();
	}
	manageMain() {
		menuIcons.forEach(icon => {
			icon.addEventListener('click', (e) => {
				this.helper.resetMenu();
				icon.style.background = 'rgba(146, 146, 146, 0.3)';
				icon.querySelector('.menu-drop').style.display = 'block';
				this.helper.addHoverListeners();
			});
		});

		actionButton.addEventListener('click', (e) => {
			document.querySelector('.action-drop').style.display = 'flex';
		});

		window.addEventListener('mouseup', (e) => {
			menuIcons.forEach((icon) => {
				if (e.target != icon && e.target.parentNode != icon) {
					this.helper.resetMenu();
					this.helper.removeHoverListeners();
				}
			});
		});
	}
	manageSub() {
		this.manageDbOS();
		this.manageDatabase();
		this.manageMySql();
		this.manageMembers();
		this.manageHelp();
	}
	manageDbOS() {
		dbOSLinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				if (link.dataset.open === 'about') {
					new NewWinBox('About dbOS', 1);
				}
			})
		});
	}
	manageDatabase() {
		databaseLinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				if (link.dataset.open === 'about') {
					new NewWinBox('About Database', 1);
				}
			})
		});
	}
	manageMySql() {
		mySqlLinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				if (link.dataset.open === 'about') {
					new NewWinBox('About MySql', 1);
				}
			})
		});
	}
	manageMembers() {
		members.forEach(member => {
			member.forEach((link) => {
				link.addEventListener('click', (e) => {
					if (link.dataset.open === 'about') {
						new NewWinBox('member', 1);
					}
				})
			});
		});
	}
	manageHelp() {
		helpLinks.forEach((link) => {
			link.addEventListener('click', (e) => {
				if (link.dataset.open === 'about') {
					new NewWinBox('Help dbOS', 1);
				}
			})
		});
	}
}

class NewWinBox {
	constructor(title = 'dbOS', i = 0) {
		new WinBox(title, {
			x: 50 + 50 * i,
			y: 50 + 5 * i,
			top: 40,
			right: 10,
			bottom: 40,
			left: 10,
			width: '60%',
			height: '75%',
			onfocus: function () {
				this.setBackground("#121212bF");
				dockIcons.forEach((i) => {
					i.classList.remove('active');
					if (this.title == i.querySelector('span').innerHTML.toString()) {
						i.classList.add('active');
					}
				});
			},
			onblur: function () {
				this.setBackground("#1212125F");
				this.body.style.background = "#1212125F";
			},
			onclose: function () {
				dockIcons.forEach((i) => {
					if (this.title == i.querySelector('span').innerHTML.toString()) {
						i.classList.remove('active');
					}
				});
			}
		});
	}
}