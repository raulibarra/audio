class ProceduralAudio {
    constructor() {
        this.ctx = null;
        this.masterGain = null;
        this.buffers = {};
        this.loadingPromise = null;
        this.soundUrls = {
            click: './sounds/click.mp3',
            lock: './sounds/lock.mp3',
            door: './sounds/door.mp3'
        };
    }

    async init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.value = 0.5;
            this.masterGain.connect(this.ctx.destination);

            // Start loading sounds and store the promise
            this.loadingPromise = this.loadSounds();
        }
        if (this.ctx.state === 'suspended') {
            await this.ctx.resume().catch(e => console.log("AudioContext resume failed:", e));
        }

        // Wait for sounds to finish loading
        if (this.loadingPromise) {
            await this.loadingPromise;
        }
    }

    async loadSounds() {
        console.log('Starting to load sounds...');
        for (const [key, url] of Object.entries(this.soundUrls)) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const arrayBuffer = await response.arrayBuffer();
                const audioBuffer = await this.ctx.decodeAudioData(arrayBuffer);
                this.buffers[key] = audioBuffer;
                console.log(`Loaded sound: ${key}`);
            } catch (error) {
                console.warn(`Failed to load sound: ${key} from ${url}`, error);
            }
        }
        console.log('All sounds loaded');
    }

    async playSound(key) {
        await this.init();
        if (!this.ctx || !this.buffers[key]) {
            console.warn(`Cannot play sound: ${key} - buffer not loaded`);
            return;
        }

        const source = this.ctx.createBufferSource();
        source.buffer = this.buffers[key];
        source.connect(this.masterGain);
        source.start(0);
    }

    async playLockSequence() {
        await this.playSound('lock');
    }

    async playDoorOpen() {
        await this.playSound('door');
    }

    async playClick() {
        // Allow slight pitch variation for click to make it organic
        await this.init();
        if (!this.ctx || !this.buffers['click']) {
            console.warn('Cannot play click - buffer not loaded');
            return;
        }

        const source = this.ctx.createBufferSource();
        source.buffer = this.buffers['click'];

        // Random pitch between 0.95 and 1.05
        source.playbackRate.value = 0.95 + Math.random() * 0.1;

        source.connect(this.masterGain);
        source.start(0);
    }

    // Get the duration of a loaded sound in seconds
    getDuration(key) {
        if (!this.buffers[key]) {
            console.warn(`Cannot get duration for ${key} - buffer not loaded`);
            return 0;
        }
        return this.buffers[key].duration;
    }
}

export default new ProceduralAudio();
