export default function ProjectTable() {
  return (
    <div className="overflow-x-auto rounded-lg shadow bg-white dark:bg-neutral-900">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-neutral-100 dark:bg-neutral-800">
          <tr>
            <th className="px-4 py-2">Project</th>
            <th className="px-4 py-2">Client</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-neutral-200 dark:border-neutral-700">
            <td className="px-4 py-2">Villa Renovation</td>
            <td className="px-4 py-2">ABC Developers</td>
            <td className="px-4 py-2 text-emerald-600">Ongoing</td>
            <td className="px-4 py-2">2025-12-15</td>
          </tr>
          <tr className="border-t border-neutral-200 dark:border-neutral-700">
            <td className="px-4 py-2">Office Fit-out</td>
            <td className="px-4 py-2">XYZ Group</td>
            <td className="px-4 py-2 text-blue-600">Completed</td>
            <td className="px-4 py-2">2025-08-30</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
