class SoundPlayer {
	constructor() {
		//singleton pattern
		if (typeof SoundPlayer.instance === 'object') {
			return SoundPlayer.instance
		}

		this.sources = []
		this.volume = 0.5

		SoundPlayer.instance = this
		return this
	}

	setSource(urls) {
		this.stop()
		this.sources = urls.map(url => {
			return {url, audio: new Audio(url)}
		})
		this.setVolume()
	}

	getSource() {
		return this.sources
	}

	stop() {
		this.sources.forEach((source) => {
			source.audio.pause()
			source.audio.currentTime = 0
		})
	}

	play(index) {
		this.stop()
		this.sources[index].audio.play()
	}

	setVolume(volume = this.volume) {
		volume = parseFloat(volume)
		if (volume < 0) volume = 0;
		if (volume > 1) volume = 1;
		
		this.sources.forEach(source => {
			source.audio.volume = volume;
		});

		this.volume = volume;
	}
}

const soundPlayer = new SoundPlayer()

window.soundPlayer = soundPlayer

export default soundPlayer