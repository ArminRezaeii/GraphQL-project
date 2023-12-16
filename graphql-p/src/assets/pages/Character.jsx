import { useLoaderData } from "react-router-dom"
import { useCharacter } from "../../hooks/useCharacter"

export function loader(data) {
    return data.params.id
}
export default function Character() {
    const id = useLoaderData()
    const { data, loading, error } = useCharacter(id)
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
              <div className="border-t-4 border-blue-500 border-solid rounded-full h-12 w-12 animate-spin"></div>
            </div>
          )
    }
    return (<>
      <div className="container mx-auto mt-8">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="flex justify-center p-6">
          <img
            src={data.character.image}
            className="h-32 w-32 rounded-full object-cover"
            alt={data.character.name}
          />
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="grid grid-cols-2 gap-6 p-6">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="text-sm text-gray-900">{data.character.name}</dd>
              <dt className="text-sm font-medium text-gray-500">Origin</dt>
              <dd className="text-sm text-gray-900">{data.character.origin.name}</dd>
              <dt className="text-sm font-medium text-gray-500">Species</dt>
              <dd className="text-sm text-gray-900">{data.character.species}</dd>
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="text-sm text-gray-900">{data.character.status}</dd>
            </div>
            <div className="p-6">
              <dt className="text-sm font-medium text-gray-500">Episodes</dt>
              <ul className="mt-2 text-sm text-gray-900">
                {data.character.episode.map((episode) => (
                  <li key={episode.id} className="mb-1">
                    {episode.name}
                  </li>
                ))}
              </ul>
            </div>
          </dl>
        </div>
      </div>
    </div>
    </>)
}
