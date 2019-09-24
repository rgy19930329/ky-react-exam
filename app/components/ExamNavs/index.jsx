/**
 * @desc 组件 - ExamList
 * @author rgy
 * @date 2019-09-19 14:40:28
 */

import "./index.less";
import React from "react";
import classnames from "classnames";

const qreq = require.context("@app/exams/question", true, /\.md$/);
let qs = qreq.keys().map(item => item.replace(/[^0-9]/g, ""));
qs = qs.sort((a, b) => a - b);

export default class ExamList extends React.Component {
  
  static propTypes = {
    
  }

  static defaultProps = {
    
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { value, onChange } = this.props;
    return (
      <div className="comp-exam-navs-wrapper">
        {qs && qs.map(id => (
          <div className="exam-id" key={id}>
            <a
              className={classnames({
                ["active"]: value == id,
              })}
              onClick={() => onChange(id)}
            >
              {id}
            </a>
          </div>
        ))}
      </div>
    )
  }
}
