import "./ArrestCount.css";

interface ArrestCountProps {
  arrestCount: number;
}

export default function ArrestCount({ arrestCount }: ArrestCountProps) {
  return (
    <div className="arrest-count-container">
      <h3>Total Arrests</h3>
      <span className="arrest-count-number">{arrestCount}</span>
    </div>
  );
}
