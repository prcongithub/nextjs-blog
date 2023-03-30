import { useState, useEffect } from 'react'
import { useTranslation } from 'next-i18next'

function SystemCheck(){
  const { t, i18n } = useTranslation(
    ['common'], 
    { 
      bindI18n: 'languageChanged loaded' 
    }
  )
  // bindI18n: loaded is needed because of the reloadResources call
  // if all pages use the reloadResources mechanism, the bindI18n option can also be defined in next-i18next.config.js
  useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, ['common'])
  }, [])
  
  const [type, setType] = useState('vac')
  return (<>
    { t('TEST') }
  </>)  
}

export default SystemCheck
