/**
 * Created by Lian Liu on 3/12/2018
 */
import React, { Component } from "react";
import ReactDom from "react-dom";

import Editor from "../editor/index";

export default class EditorConcist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Editor
        active={true}
        importContent={null}
        cbReceiver={this.receiveHtml}
        undoRedo={false}
        blockStyle={false}
        color={false}
        video={false}
        audio={false}
        alignment={false}
        removeStyle={false}
        pasteNoStyle={false}
      />
    );
  }
}
