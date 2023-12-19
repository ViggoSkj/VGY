// audio player abstraction layer
function AudioPlayer() {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    let audioContext = null
    let track = null
    let audioElement = null

    let paused = true
    let audioDuration = -1

    const createContext = () => {
        audioContext = new AudioContext()
    }

    const loadTrack = (element) => {
        audioElement = element
        audioDuration = audioElement.duration
        track = audioContext.createMediaElementSource(audioElement)
        track.connect(audioContext.destination)
    }
    
    const togglePause = () => {
        paused = !paused

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        if (paused) {
            audioElement.pause()
        } else {
            audioElement.play()
        }
    }

    const traverseAudio = (time) => {
        audioElement.currentTime += time
    }

    const setCurrentDuration = (time) => {
        audioElement.currentTime = time
    }

    return {
        get gotAudioContext() { return !!audioContext },
        get gotTrack() { return !!track },
        get paused() { return paused },

        get audioElement() { return audioElement },
        get audioDuration() { return audioDuration },
        get audioCurrentDuration() { return audioElement.currentTime },

        createContext,
        loadTrack,
        togglePause,
        traverseAudio,
        setCurrentDuration,
    }
}