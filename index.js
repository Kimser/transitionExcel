const xlsx = require('node-xlsx')
const fs = require('fs')
const xlsxData = xlsx.parse('./demo.xlsx') // 需要转换的excel文件

// 数据处理 方便粘贴复制
const data = xlsxData[2].data  // [index] 对应 sheet 页
const len = data.length
const outData_zh = {
} // 中文
const outData_en = {
} // 印尼
const outData_id = {
} // 英文
for (let i = 0; i < len; i++) {
  // 2.数据处理
  const item = data[i]
  outData_zh[item[0]] = item[1]
  outData_en[item[0]] = item[2]
  outData_id[item[0]] = item[3]
}
const outData = {
  cn: outData_zh,
  us: outData_en,
  id: outData_id
}

writeFile('result.json', JSON.stringify(outData)) // 输出的json文件
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, 'utf-8', complete)  // 文件编码格式 utf-8
  function complete(err) {
    if (!err) {
      console.log('文件生成成功')  // 输出完成
    }
  }
}
