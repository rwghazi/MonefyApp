import { gql } from '@apollo/client'

export const AddRecord = gql`
mutation MyMutation($amount: Int!, $category: String!, $date: date!, $notes: String!, $type: String!) {
    insert_records(objects: {amount: $amount, category: $category, date: $date, notes: $notes, type: $type}) {
      affected_rows
    }
  }
`



  