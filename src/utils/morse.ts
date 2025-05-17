const DOT_TIME = 45
const DASH_TIME = DOT_TIME * 3
const SYMBOL_BREAK = DOT_TIME
const LETTER_BREAK = DOT_TIME * 1.5
const WORD_BREAK = DOT_TIME * 7

let note_context: AudioContext | undefined
let note_node: OscillatorNode | undefined
let gain_node: GainNode | undefined
const playCounter: number = 0
let isPlaying: boolean = false
let audioContextInitialized: boolean = false

export async function initializeAudioContext(): Promise<void> {
  note_context = new AudioContext()
  await note_context.resume()
  note_node = note_context.createOscillator()
  gain_node = note_context.createGain()
  note_node.frequency.value = 641
  gain_node.gain.value = 0
  note_node.connect(gain_node)
  gain_node.connect(note_context.destination)
  note_node.start()
  audioContextInitialized = true
}

export async function stopAudioContext(): Promise<void> {
  note_context = undefined
  audioContextInitialized = false
}

function startNotePlaying(): void {
  if (gain_node) gain_node.gain.setTargetAtTime(0.5, 0, 0.001)
}

function stopNotePlaying(): void {
  if (gain_node) gain_node.gain.setTargetAtTime(0, 0, 0.001)
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function playLetter(letter: string, currentPlayCounter: number): Promise<void> {
  if (audioContextInitialized) {
    if (currentPlayCounter != playCounter) return
    startNotePlaying()
    await sleep(letter == "-" ? DASH_TIME : DOT_TIME)
    stopNotePlaying()
    await sleep(SYMBOL_BREAK)
  }
}

export async function playWord(word: string[], currentPlayCounter: number): Promise<void> {
  for (let i = 0; i < word.length; i++) {
    if (currentPlayCounter != playCounter) return
    if (word[i] !== " ") {
      await playLetter(word[i], currentPlayCounter)
      await sleep(LETTER_BREAK)
    }
  }
}

export async function playSentence(sentence: string[][], currentPlayCounter: number = 0): Promise<void> {
  if (isPlaying) return
  isPlaying = true
  await sleep(LETTER_BREAK)
  for (let i = 0; i < sentence.length; i++) {
    if (currentPlayCounter != playCounter) {
      return
    }
    await playWord(sentence[i], currentPlayCounter)
    await sleep(WORD_BREAK)
    isPlaying = false
  }
}
