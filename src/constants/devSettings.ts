const _disableContextMenu = false
const _enableWindowUnloadWarning = false
const _hideOpponentCard = true
const _useAi = true
const _noAiExtraDelay = true
const _noLatency = false
const _noDevLog = false

const isProd = !process.env.ISDEV

export const disableContextMenu = isProd || _disableContextMenu
export const enableWindowUnloadWarning = isProd || _enableWindowUnloadWarning
export const hideOpponentCard = isProd || _hideOpponentCard
export const useAi = isProd || _useAi
export const noAiExtraDelay = isProd || _noAiExtraDelay
export const noLatency = isProd || _noLatency
export const noDevLog = isProd || _noDevLog
// the above should all be `true` for prod version

// in multiplayer connected mode, useAi acts like always false

// if useAi is true, even when opponent cards are shown, they are unclickable

export const aiExtraDelay = 4000

// can discard "undiscardable" cards during the discard mode triggered by "draw discard playagain" cards
export const canDiscardUndiscardableWhenDDP = false

export const testLatency: [number, number] = [300, 6000]

export const githubUrl = 'https://github.com/MKBA13/github.io'
export const authorUrl = 'https://github.com/tomchen'
//export const tutorialImageUrl =
  //'https://raw.githubusercontent.com/MKBA13/Warlab/main/misc/readme_images/manual.jpg'

export const localstorageName = 'warlabhdls'
export const localstorageVersionName = 'warlabhdls_ver'
export const localstorageMinVer = '0.0.10'
