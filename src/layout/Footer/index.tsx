import { Layout } from 'antd';
import React, { FC, memo } from 'react'

const { Footer } = Layout;

const FooterWrapper: FC = () => {
  return (
    <Footer style={{textAlign: 'center'}}>react-admin-template ©2021 Created by Jomsou@qq.com <a target='_blank' href='https://github.com/zenquan/react-admin-template' rel="noreferrer">github地址</a></Footer>
  )
}

export default memo(FooterWrapper)