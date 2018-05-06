<script>
import Vue from "vue";
import Component from "vue-class-component";
import {ApolloQuery} from "vue-apollo";

import helloQuery from "../graphql/HelloWorld.gql";

@Component
export default class MyComponent extends Vue {
  render() {
    return (
      <ApolloQuery query={helloQuery} variables={{name: "Gonzalo"}}>
        {({result: {loading, error, data}}) => (
          <div>
            {loading && <div class="loading apollo">Loading...</div>}
            {error && <div class="error apollo">An error occured</div>}
            {data && <div class="result apollo">{data.hello}</div>}
            {!data && <div class="no-result apollo">No result :(</div>}
          </div>
        )}
      </ApolloQuery>
    );
  }
}
</script>
