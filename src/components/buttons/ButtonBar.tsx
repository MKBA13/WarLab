import React, { memo } from 'react'
import ButtonPref from './ButtonPref'

import ButtonSgPref from './ButtonSgPref'
import ButtonHelp from './ButtonHelp'

import ButtonFullscreen from './ButtonFullscreen'

const ButtonBar = () => (
  <div>
    <ButtonPref />
    <ButtonSgPref />
    <ButtonFullscreen />
    <ButtonHelp />
  </div>
)

export default memo(ButtonBar)
