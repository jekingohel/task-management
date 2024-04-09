import Box from "./Box"

const Statistics = () => {
  return (
    <div className="grid gap-4 grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 justify-stretch mb-5">
      <Box title="To Do Tasks" count="10" color="red" />
      <Box title="In Progress Tasks" count="10" color="yellow" />
      <Box title="Done Tasks" count="200" color="green" />
    </div>
  )
}

export default Statistics
