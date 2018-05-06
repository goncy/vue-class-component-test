import Vue from "vue";
import Component from "vue-class-component";
import {name} from "faker";
import styled from "vue-styled-components";

const Container = styled.div`
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
`;

@Component
export default class Home extends Vue {
  list = [];

  addToList(name) {
    this.list.push(name);
  }

  render() {
    return (
      <Container>
        <h3>Actions</h3>
        <button
          onClick={() =>
            this.addToList(`${name.firstName()} ${name.lastName()}`)
          }
        >
          Add Person
        </button>
        <h3>Persons</h3>
        <transition-group tag="ul" name="fade">
          {this.list.map(el => <li key={el}>{el}</li>)}
        </transition-group>
      </Container>
    );
  }
}
