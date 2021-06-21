import React, { useState, useEffect } from 'react';
import { Table, Divider, Button, message } from 'antd';
import CustomBreadcrumb from 'components/CommonBreadcrumb'
import XLSX from 'xlsx'
import dayjs from 'dayjs';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

const ExcelExport = () => {
  const [xls, setXls] = useState<DataType[]>([])
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setXls(selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  const exportExcel = () => {
    if (xls && !xls.length) {
      message.warning('请选择要导出的数据行')
      return
    }
    /* 创建worksheet */
    var ws = XLSX.utils.json_to_sheet(xls);

    /* 新建空workbook，然后加入worksheet */
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "People");

    /* 生成xlsx文件 */
    XLSX.writeFile(wb, `sheetjs-${dayjs(new Date()).format('YYYY-MM-DDTHH:mm:ss')}.xlsx`);
  }

  return (
    <div>
      <CustomBreadcrumb arr={['Excel', '导出excel']}/>
      <Button onClick={exportExcel}>导出excel</Button>
      <Divider />

      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default ExcelExport;