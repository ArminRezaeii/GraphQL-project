import { gql, useQuery } from "@apollo/client";
const GET_CHARACTER = gql`
query GEtCharacter($id:ID!){
character(id:$id){
    id,
  name
  image
  status
  origin{
    name
}
episode{
name}
species
}
}
`
export const useCharacter = (id) => {
    const { data, error, loading } = useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    })
    return {
        data,
        error,
        loading
    }
}
