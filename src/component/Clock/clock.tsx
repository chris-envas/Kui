import React from "react"
import "./test.css"

interface prevProps {
    messages: string[]
}

export default class Clock extends React.Component{
    state = {
        messages: []
    }

    interval: any = null

    handleNewMessage() {
        this.setState((prev: prevProps) => {
            console.log(prev)
            return {
                messages: [`msg ${prev.messages.length}`,...prev.messages]
            }
        })
    }

    componentDidMount () {
        for(let i = 0; i < 20; i++) this.handleNewMessage()
        // this.interval = window.setInterval(() => {
        //     if (this.state.messages.length > 200) {
        //       window.clearInterval(this.interval);
        //       return;
        //     }
        //     this.handleNewMessage();
        //   }, 1000);
    }

    render() {
        return (
          <div className="snapshot-sample">
            {this.state.messages.map((msg) => (
              <div>{msg}</div>
            ))}
          </div>
        );
      }
}