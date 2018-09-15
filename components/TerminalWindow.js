import Typist from "react-typist";
import React from "react";

const TerminalWindow = () => (
  <div className="terminalWrapper">
    <div className="terminalBar">
      <div className="terminalControls">
        <div className="terminalIcon close" />
        <div className="terminalIcon minimize" />
        <div className="terminalIcon fullscreen" />
      </div>
      <div className="terminalTitle">bash</div>
    </div>
    <div className="terminalBody">
      <Typist
        key={1111}
        className="message"
        cursor={{
          show: true,
          blink: true,
          element: "▋",
          hideWhenDone: false,
          hideWhenDoneDelay: 0
        }}
        avgTypingDelay={100}
        stdTypingDelay={53}
        startDelay={1500}
      >
        <Typist.Backspace count={0} delay={500} key={997} />
        <span className="command">git clone https://github.com/0str1ch/js-next.git</span>
        <br />
        <Typist.Backspace count={0} delay={400} key={967} />
        <span className="command">cd js-next</span>
        <br />
        <Typist.Backspace count={0} delay={550} key={996} />
        <span className="commandcd">npm install && npm update</span>
        <br />
        <Typist.Backspace count={0} delay={2550} key={956} />
        <span className="commandcd">npm run dev</span>
        <br />
        <Typist.Backspace count={0} delay={2050} key={906} />
        <span className="commandcd"></span>
        <Typist.Backspace count={0} delay={0} key={916} />
      </Typist>
      <br />
    </div>
  </div>
);

export default TerminalWindow;
