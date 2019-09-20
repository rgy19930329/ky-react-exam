#!/usr/bin/env node

/**
 * @desc exam移除工具
 * @author ranguangyu
 * @date 2019-9-20
 * @use `npm run remove`
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');

console.log(chalk.black.bgGreen('            欢迎使用exam组件移除工具              '));

/**
 * 提示并验证输入内容
 */
inquirer.prompt([
  {
    type: 'input',
    name: 'id',
    message: '请输入exam编号：',
    validate: function(input) {
      const done = this.async();
      if (!input) {
        done('exam编号不能为空');
        return;
      } else {
        if (!fs.existsSync(path.resolve(__dirname, `../app/exams/question/${input}.md`))) {
          done('exam不存在，请重新输入');
          return;
        }
      }
      done(null, true);
    }
  },
]).then((answers) => handleAnswers(answers));

/**
 * 处理用户输入
 * @param {*} answers 
 */
const handleAnswers = (answers) => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'isCorrent',
      choices: ['是', '否'],
      message: chalk.red(`请您确认是否要删除exam：${answers.id}`),
      default: '是',
    }
  ]).then(({ isCorrent }) => {
    if (isCorrent === '是') {
      handleRemove(answers);
      console.log(chalk.black.bgGreen(`            exam【${answers.id}】已移除              `));
    }
    process.exit();
  });
}

/**
 * 删除anser及question所关联的exam文件
 * @param {*} answers 
 */
const handleRemove = (answers) => {
  const { id } = answers; 
  fs.unlinkSync(path.resolve(__dirname, `../app/exams/question/${id}.md`));
  fs.unlinkSync(path.resolve(__dirname, `../app/exams/answer/${id}.md`));
}
