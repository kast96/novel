class SoundPlayer {
	constructor() {
		//singleton pattern
		if (typeof SoundPlayer.instance === 'object') {
			return SoundPlayer.instance;
		}

		this.sources = [];

		SoundPlayer.instance = this;
		return this;
	}

	setSource(urls) {
		this.sources = urls.map(url => {
			return {url, audio: new Audio(url)}
		})
	}

	stop() {
		this.sources.forEach((source) => {
			source.audio.pause()
      source.audio.currentTime = 0
		})
	}

	play(index) {
		this.stop();
		this.sources[index].audio.play();
	}
}

const soundPlayer = new SoundPlayer();

window.soundPlayer = soundPlayer;

export default soundPlayer;