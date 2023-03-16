export const Statistics = ({ statistics }) => {
  return (
    <ul>
      {statistics.map(({ id, label, percentage }) => {
        return (
          <li key={id} className="stat-item">
            <span className="stat-item__label">{label}</span>
            <span className="stat-item__percentage">{percentage}</span>
          </li>
        );
      })}
    </ul>
  );
};
