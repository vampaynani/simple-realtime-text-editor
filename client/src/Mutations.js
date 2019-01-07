import gql from 'graphql-tag';

export const TYPE_CODE = gql`
mutation TypeCodeMutation($body: String!){
  typeCode(code: {body: $body}){
    body
  }
}`;