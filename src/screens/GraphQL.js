import Vue from "vue";
import Component from "vue-class-component";
import {ApolloQuery} from "vue-apollo";

import ADD_PERSON from "../graphql/PersonAdd.gql";
import HELLO_QUERY from "../graphql/Hello.gql";

@Component
export default class GraphQL extends Vue {
  name = "";
  lastAdded = "";
  list = [];

  addToList(name) {
    this.list.push(name);
  }

  async onSubmit(event) {
    event.preventDefault();

    const {data} = await this.$apollo.mutate({
      mutation: ADD_PERSON,
      variables: {
        input: {
          name: this.name,
        },
      },
    });

    this.addToList(data.addPerson.name);

    this.lastAdded = data.addPerson.name;
    this.name = "";
  }

  onNameChange(event) {
    this.name = event.target.value;
  }

  render() {
    return (
      <div>
        <ApolloQuery query={HELLO_QUERY} variables={{name: this.lastAdded}}>
          {({result: {loading, error, data}}) => (
            <div>
              {loading && <div class="loading">Loading...</div>}
              {!loading && error && <div class="error">An error occured</div>}
              {!loading && data && <div class="result">{data.hello}</div>}
              {!loading && !data && <div class="no-result">No result :(</div>}
            </div>
          )}
        </ApolloQuery>
        <hr />
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onNameChange} value={this.name} type="text" />
          <input type="submit" />
        </form>
        <h3>Persons</h3>
        <ul>{this.list.map(el => <li key={el}>{el}</li>)}</ul>
      </div>
    );
  }
}
