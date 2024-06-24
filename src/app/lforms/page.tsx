'use client'

import { useEffect } from 'react'

import { fhirForm } from './form'

const LFrom = () => {
  useEffect(() => {
    const formDef = fhirForm

    // Wait for the LForms scripts to be loaded
    const scriptLoaded = () =>
      typeof LForms !== 'undefined' && LForms.Util.addFormToPage

    const interval = setInterval(() => {
      if (scriptLoaded()) {
        clearInterval(interval)
        LForms.Util.addFormToPage(formDef, 'formContainer')
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className='container mt-8'>
        <div id='formContainer'></div>
      </div>
    </>
  )
}

export default LFrom
