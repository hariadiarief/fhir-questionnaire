'use client'

import Link from 'next/link'
import Script from 'next/script'
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
      <Link
        href='https://lhcforms-static.nlm.nih.gov/lforms-versions/34.0.0/webcomponent/styles.css'
        media='screen'
        rel='stylesheet'
      />
      <Script
        src='https://lhcforms-static.nlm.nih.gov/lforms-versions/34.0.0/webcomponent/assets/lib/zone.min.js'
        async
      ></Script>
      <Script
        src='https://lhcforms-static.nlm.nih.gov/lforms-versions/34.0.0/webcomponent/lhc-forms.js'
        async
      ></Script>
      <Script
        src='https://lhcforms-static.nlm.nih.gov/lforms-versions/34.0.0/fhir/R4/lformsFHIR.min.js'
        async
      ></Script>
    </>
  )
}

export default LFrom
