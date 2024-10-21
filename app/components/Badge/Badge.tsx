import "./Badge.css";

interface BadgeProps {
  title: string;
  value: number;
  isSmall?: boolean;
}

const Badge = ({ title, value, isSmall }: BadgeProps) => {
  return (
    <dl className={`badge ${isSmall && "small"}`}>
      <dt className="badge-dt">{title}</dt>
      <dd className="badge-dd">{value}&deg;</dd>
    </dl>
  );
};

export default Badge;
