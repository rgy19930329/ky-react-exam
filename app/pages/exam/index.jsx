/**
 * @desc 页面 - Exam
 * @author rgy
 * @date 2019-09-19 11:11:24
 */

import "./index.less";
import React from "react";
import ExamNavs from "@components/ExamNavs";
import ExamItem from "@components/ExamItem";

export default class Exam extends React.Component {

  constructor(props) {
    super(props);

    const {
      match: {
        params: { id = "1" }
      }
    } = props;

    this.state = {
      id,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.setState({
        id: nextProps.match.params.id,
      });
    }
  }

  componentDidMount() {
    
  }

  render() {
    const { id } = this.state;
    return (
      <div className="page-exam-wrapper">
        <ExamNavs
          value={id}
          onChange={(id) => {
            this.props.history.push(`/${id}`);
          }}
        />
        <ExamItem id={id} />
      </div>
    )
  }
}
