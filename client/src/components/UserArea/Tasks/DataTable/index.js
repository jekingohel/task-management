import { Columns } from "./Column"
import { DataTable } from "./DataTable"
import { dummyData } from "./data"

export default function DemoPage() {
  return (
    <div className="py-10">
      <DataTable columns={Columns} data={dummyData} />
    </div>
  )
}
