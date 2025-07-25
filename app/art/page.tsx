import getCollection from "@/lib/getCollections";


export default async function HomePage() {
  const data = await getCollection("Monet");

  if (data === null) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold">Monet Art Explorer</h1>
        <p>⚠️ You've hit the API rate limit. Please try again later.</p>
      </main>
    );
  }

  if (!data || data.records.length === 0) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold">Monet Art Explorer</h1>
        <p> No Monet artworks found. Please try again later.</p>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Monet Artworks from Harvard Art Museums</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.records.map((item) => (
          <li key={item.id} className="border rounded p-4 shadow bg-white">
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            {item.primaryimageurl ? (
              <img
                src={item.primaryimageurl}
                alt={item.title}
                width={300}
                height={200}
                className="w-full object-cover rounded"
              />
            ) : (
              <p className="italic text-sm text-gray-500">No image available</p>
            )}
            {item.dated && <p className="mt-2 text-sm bold" >Date: {item.dated}</p>}
            {item.people?.[0]?.name && (
              <p className="text-sm italic bold"> Artist: {item.people[0].name}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
