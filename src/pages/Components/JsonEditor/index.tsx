import React, { useRef, useState, useEffect, useCallback } from 'react'
import CommonBreadcrumb from 'components/CommonBreadcrumb'
import { useChangeLang } from 'hooks';
import CodeMirror from 'codemirror'
import style from './index.module.less';
import 'codemirror/addon/lint/lint.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/rubyblue.css'
require('script-loader!jsonlint')
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/json-lint'

export default function JsonEditor() {
  const [value, setValue] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  let jsonEditor: any = null;
  const { t } = useChangeLang();

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      jsonEditor = CodeMirror.fromTextArea(textareaRef.current, {
        lineNumbers: true,
        mode: 'application/json',
        gutters: ['CodeMirror-lint-markers'],
        theme: 'rubyblue',
        lint: true
      })
    }
  }, [])

  const onChange = useCallback(
    () => {
      if (textareaRef && textareaRef.current) {
        jsonEditor.setValue(JSON.stringify(value, null, 2))
        jsonEditor.on('change', (cm: {getValue: () => string})=> {
          setValue(cm.getValue())
        })
      }
    },
    [],
  )

  return (
    <div>
      <CommonBreadcrumb arr={[
        t('components.jsonEditor.menu'),
        t('components.jsonEditor.subMenu')
      ]}/>
      <div className={style['json-editor']}>
        <textarea className={style['text-area']}
          ref={textareaRef} onChange={onChange}/>
      </div>
    </div>
  )
}
