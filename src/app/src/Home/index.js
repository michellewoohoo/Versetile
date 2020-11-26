import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

const someQuery = gql`
  query getPassage($userInput: String){
    getPassage(userInput: $userInput) {
      text
      passage
    }
  }
`

export default (props) => {
  const { data, loading } = useQuery(someQuery, {
    variables: {userInput: "romans 12:1-2,5-7,9,13:1-9&10"}
  })

  console.log(data)
  return <div></div>
 
}