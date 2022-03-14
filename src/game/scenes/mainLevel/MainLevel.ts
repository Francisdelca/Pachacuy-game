import Phaser from "phaser";

export default class MainLevel extends Phaser.Scene {

	constructor() {
		super("Level");
	}

	editorCreate(): void {
		const text = this.add.text(400, 436, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Phaser 3 + Vue 3 + TypeScript";
		text.setStyle({"align":"center","fontFamily":"Arial","fontSize":"3em"});

		this.events.emit("scene-awake");
	}
	create() {

		this.editorCreate();
	}

}

