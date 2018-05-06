import Vue from "vue";
import Component from "vue-class-component";
import styled from "vue-styled-components";

const Nav = styled.nav`
  margin-bottom: 12px;
  border-bottom: 1px solid grey;
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  padding: 20px;

  a {
    margin: 0 12px;
  }
`;

@Component
export default class Home extends Vue {
  render() {
    return (
      <div>
        <Nav>
          <router-link to="/">Computed properties</router-link>
          <router-link to="/transitions">Transitions</router-link>
          <router-link to="/graphql">GraphQL</router-link>
        </Nav>
        <router-view />
      </div>
    );
  }
}
