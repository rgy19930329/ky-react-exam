/**
 * @desc 组件 - ExamItem
 * @author rgy
 * @date 2019-09-19 14:40:35
 */

import "./index.less";
import React from "react";
import PropTypes from "prop-types";
import { Collapse } from "antd";
import { MarkDown } from "nice-ui";

const { Panel } = Collapse;

export default class ExamItem extends React.Component {
  
  static propTypes = {
    id: PropTypes.string,
  }

  static defaultProps = {
    id: "1",
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    const { id } = this.props;
    return (
      <div className="comp-exam-item-wrapper">
        <Collapse defaultActiveKey={["Q"]}>
          <Panel header="Q" key="Q">
            <MarkDown>{require(`@app/exams/question/${id}.md`)}</MarkDown>
          </Panel>
          <Panel header="A" key="A">
            <MarkDown>{require(`@app/exams/answer/${id}.md`)}</MarkDown>
          </Panel>
        </Collapse>
      </div>
    )
  }
}
