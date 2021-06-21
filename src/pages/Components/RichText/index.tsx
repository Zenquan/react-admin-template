import React, { useState, Suspense } from 'react'
import { Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Editor } from '@tinymce/tinymce-react';
import CommonBreadcrumb from 'components/CommonBreadcrumb'

const antIcon = <LoadingOutlined style={{ fontSize: 24, }} spin />;

export default function RichText() {
  const [text, setText] = useState('');
  const [value, setValue] = useState('<p>The quick brown fox jumps over the lazy dog</p>');
  return (
    <div>
      <CommonBreadcrumb arr={['表格', '富文本编辑器']}/>
      <Suspense fallback={
        <Space size="large" className="loading all-center">
          <Spin indicator={antIcon}
            size="large"
            tip="加载中"/>
        </Space>
      }>
        <Editor
          apiKey="fhyz6e90jjpynmarrlbvj84emzmhesixzyt92el8z9lss0sp"
          init={{
            language: 'zh_CN',
            height: 600,
            plugins: ['advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount'],
            toolbar: ['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen']
          }}
          scriptLoading={{ async: true }}
          onEditorChange={(newValue, editor) => {
            console.log('newValue>>>', newValue);
            setValue(newValue);
            setText(editor.getContent({format: 'text'}));
          }}
        />
      </Suspense>
    </div>
  )
}
