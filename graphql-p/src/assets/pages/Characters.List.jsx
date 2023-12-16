import { Link } from "react-router-dom"
import { useCharacters } from "../../hooks/useCharacters"



export default function CharactersList() {
  const { error, loading, data } = useCharacters()
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="border-t-4 border-blue-500 border-solid rounded-full h-12 w-12 animate-spin"></div>
      </div>
    )

  }
  return (<>
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.characters.results.map((character) => (
            <tr key={character.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{character.id}</td>
              <td className="py-2 px-4 border-b">
                <Link to={`/character/${character.id}`} className="text-blue-500 hover:underline">
                  {character.name}
                </Link>
              </td>
              <td className="py-2 px-4 border-b">
                <img src={character.image} alt={character.name} className="h-16 w-16 object-cover rounded-full" />
              </td>
              <td className="py-2 px-4 border-b">{character.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>



  </>)




}