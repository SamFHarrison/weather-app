import "./Badge.css";

interface BadgeProps {
  title: string;
  value: number;
}

const Badge = ({ title, value }: BadgeProps) => {
  return (
    <dl className="badge">
      <dt className="badge-dt">{title}</dt>
      <dd className="badge-dd">{value}&deg;</dd>
    </dl>
  );
};

export default Badge;
