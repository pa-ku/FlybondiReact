import LibertadDevolar from './LibertadDevolar'

import Newsletter from './Newsletter'
import VolaAtumedida from './VolaAtumedida'
import FirstSection from './FirstSection'

import React from 'react'

export default function InfoSection() {
  return (
<>
<div className='InfoSection-Wrapper'>
<FirstSection/>
<VolaAtumedida/>
<LibertadDevolar/>
</div>

<Newsletter />
</>
  )
}
