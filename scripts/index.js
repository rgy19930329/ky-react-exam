#!/usr/bin/env node

/**
 * @desc exam创建工具
 * @author ranguangyu
 * @date 2019-9-18
 * @use `npm run new`
 */

const fs = require('fs');
const path = require('path');

const handleCreate = (id) => {
  const questionContent = 
`### ${id}. Q

\`\`\`js

\`\`\`

以上代码输出结果？`;

  fs.writeFileSync(path.resolve(__dirname, `../app/exams/question/${id}.md`), questionContent);
  fs.writeFileSync(path.resolve(__dirname, `../app/exams/answer/${id}.md`), `答案：\n\n`);
}

const files = fs.readdirSync(path.resolve(__dirname, `../app/exams/question`));

const id = files.length + 1;

handleCreate(id);
