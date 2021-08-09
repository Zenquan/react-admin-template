import React, { FC, memo } from 'react';
import { Result, Button } from 'antd';

const NotFound: FC = (({history}: any) => {
  const backHome = () => {
    history.push('/dashboard')
  }
  return (
    <Result
    status="404"
    title="404"
    subTitle="你好，你访问的页面不存在"
    extra={
      <Button type="primary" onClick={backHome}>回到首页</Button>
    }
  />
  );
});

export default memo(NotFound);