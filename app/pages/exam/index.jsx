/**
 * @desc 页面 - Exam
 * @author rgy
 * @date 2019-09-19 11:11:24
 */

import "./index.less";
import React from "react";
import ExamList from "@components/ExamList";
import ExamItem from "@components/ExamItem";

export default class Exam extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: "1",
    }
  }

  componentDidMount() {
    
  }

  render() {
    const { id } = this.state;
    return (
      <div className="page-exam-wrapper">
        <ExamList value={id} onChange={(value) => this.setState({ id: value })} />
        <ExamItem id={id} />
      </div>
    )
  }
}
