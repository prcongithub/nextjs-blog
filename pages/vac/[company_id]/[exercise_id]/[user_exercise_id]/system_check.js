import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

function SystemCheck(){
  const [type, setType] = useState('vac')
  const { t, lang } = useTranslation('common')
  return (<>
    { t('TEST') }
  </>)  
}

export default SystemCheck
