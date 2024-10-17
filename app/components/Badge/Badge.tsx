import "./Badge.css";

interface BadgeProps {
  title: string;
  value: number;
}

const Badge = ({ title, value }: BadgeProps) => {
  return (
    <dl className="badge">
      <dt>{title}</dt>
      <dd>{value}&deg;</dd>
    </dl>
  );
};

export default Badge;
