import { gql } from '@apollo/client'

export const QUERY_ME = gql `
    me {
        _id
        username
        email
        review {
            _id
            reviewText
            createdAt
        }
    }
`

export const QUERY_REVIEW = gql`
  query Review($username: String) {
    thoughts(username: $username) {
      _id
      reviewText
      createdAt
    }
}
`;