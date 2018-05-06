import Vue from "vue";
import Component from "vue-class-component";
import {lorem} from "faker";

@Component
export default class Home extends Vue {
  message = "hello world";

  get messageWithLength() {
    return `${this.message} - ${this.message.length}`;
  }

  changeMessage() {
    this.message = lorem.words(3);
  }

  render() {
    return (
      <div>
        <h3>Actions</h3>
        <button onClick={this.changeMessage}>Change Message</button>
        <h3>Message</h3>
        <div>{this.messageWithLength}</div>
      </div>
    );
  }
}
