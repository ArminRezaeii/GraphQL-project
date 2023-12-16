import { gql, useQuery } from "@apollo/client"
const GET_USERS = gql`
query {
    characters{
    results{
      id
      name
      image
      gender
    }
    }
    }
`
export const useCharacters = () => {
    const { error, data, loading } = useQuery(GET_USERS)
    return {
        error,
        data,
        loading
    }
}