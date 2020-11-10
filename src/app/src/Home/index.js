import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

const someQuery = gql`
  query {
    verse {
      text
      book
    }
  }
`

export default (props) => {
const { data, loading } = useQuery(someQuery)
console.log(data)
return <div></div>
  // return <Query query={someQuery}>
  // {({data, loading}) => (data && 
  //     data.verse && data.verse.text &&
  //     <div>{data.verse.text}</div>)
  // }
  // </Query>
 
}