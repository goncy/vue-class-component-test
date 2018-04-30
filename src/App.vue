<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import {lorem, name} from "faker";

@Component
export default class MyComponent extends Vue {
  message = "hello world";
  list = [];

  get computedList() {
    return this.list.map(({firstName, lastName}) => `${firstName} ${lastName}`);
  }

  changeMessage() {
    this.message = lorem.words(3);
  }
  addToList() {
    this.list.push({
      firstName: name.firstName(),
      lastName: name.lastName(),
    });
  }

  render() {
    return (
      <div>
        <div>{this.message}</div>
        <button onClick={this.changeMessage}>Change Message</button>
        <button onClick={this.addToList}>Add Person</button>
        <transition-group tag="ul" name="fade">
          {this.computedList.map(el => <li key={el}>{el}</li>)}
        </transition-group>
      </div>
    );
  }
}
</script>
