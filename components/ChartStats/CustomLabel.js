export default function CustomLabel({ x, y, stroke, value }) {
  return (
    <text x={x} y={y} dy={-4} fill='#fff' fontSize={10} textAnchor='start'>
      {value}
    </text>
  );
}
