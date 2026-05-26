'use client'

interface TabsByCityProps {
  active: string
  onSelect: (city: string) => void
  cities: Record<string, { name: string; dates: string }>
}

export default function TabsByCity({ active, onSelect, cities }: TabsByCityProps) {
  return (
    <div className="flex flex-wrap gap-2 overflow-x-auto py-4">
      {Object.entries(cities).map(([key, { name, dates }]) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className={`flex-shrink-0 px-6 py-3 rounded-t-lg font-semibold transition whitespace-nowrap ${
            active === key
              ? 'bg-blue-600 text-white border-b-4 border-blue-800'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <div className="text-sm font-bold">{name}</div>
          <div className={`text-xs ${active === key ? 'text-blue-100' : 'text-gray-600'}`}>{dates}</div>
        </button>
      ))}
    </div>
  )
}
