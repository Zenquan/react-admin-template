import React, { useRef, useEffect, useState, MouseEvent } from "react";
import CommonBreadcrumb from "components/CommonBreadcrumb";
import { Input } from "antd";
import MarkdownIt from "markdown-it";
import hljs from 'highlight.js';
import style from './index.module.less';
import 'highlight.js/styles/atom-one-dark.css'

const { TextArea } = Input;
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str: string, lang: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs" style="width: 30vw;"><code>' +
              hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
              '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs" style="width: 30vw;"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});

export default function Markwodn() {
  const [mdValue, setMdValue] = useState<string>(`## Hello World`);
  const [html, setHtml] = useState<string>('');

  const onChange = (
    e: MouseEvent<Element, globalThis.MouseEvent> & {
      target: { value: string };
    }
  ) => {
    console.log("Change:", e.target.value);
    const value = e.target.value;
    setMdValue(value);
  };

  useEffect(() => {
    setHtml(md.render(mdValue));
  }, [mdValue]);

  return (
    <div>
      <CommonBreadcrumb arr={["表格", "Markdown编辑器"]} />
      <div className={style['content']}>
        <TextArea rows={4} value={mdValue}
          // @ts-ignore
          onChange={onChange} className={style['text-area']} />
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
  );
}
