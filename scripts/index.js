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
  fs.writeFileSync(path.resolve(__dirname, `../app/exams/question/${id}.md`), `### ${id} Q`);
  fs.writeFileSync(path.resolve(__dirname, `../app/exams/answer/${id}.md`), `### ${id} A`);
}

const files = fs.readdirSync(path.resolve(__dirname, `../app/exams/question`));

const id = files.length + 1;

handleCreate(id);
