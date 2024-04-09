const Box = ({ title, color, count }) => {
  return (
    <div className="rounded-lg bg-card text-card-foreground border px-3 py-2 shadow-sm">
      <div className="flex flex-row items-center justify-between space-y-0 p-0">
        <h3
          className={`tracking-tight text-sm font-semibold text-${color}-600`}
        >
          {title}
        </h3>
      </div>
      <div className="p-0">
        <div className="text-3xl font-semibold">{count}</div>
      </div>
    </div>
  )
}
export default Box
