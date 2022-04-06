import useFormatDate from "@/hooks/use-formatDate.hook";

export default function CustomTooltip({ active, payload, label }) {
  const { yearDate } = useFormatDate({
    timestamp: label,
  });

  if (active && payload && payload.length) {
    return (
      <div className='bg-dark text-white rounded-lg drop-shadow-lg py-2 px-4 flex flex-col gap-0'>
        <div className='font-medium'>{yearDate}</div>
        <div className='font-light text-sm'>
          {payload.map((p) => (
            <p key={p.name}>
              <span
                className={`font-medium ${
                  p.stroke === "#EDB914" ? "text-yellow" : "text-purple"
                }`}
              >
                {p.name}:{" "}
              </span>
              <span>{p.value}</span>
            </p>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
