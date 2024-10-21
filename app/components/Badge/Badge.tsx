import "./Badge.css";

interface BadgeProps {
  title: string;
  value: number;
  ariaLabel: string;
  isSmall?: boolean;
}

const Badge = ({ title, value, ariaLabel, isSmall }: BadgeProps) => {
  return (
    <dl className={`badge${isSmall ? " small" : ""}`}>
      <dt className="badge-dt" aria-label={ariaLabel}>
        {title}
      </dt>
      <dd className="badge-dd">{value}&deg;</dd>
    </dl>
  );
};

export default Badge;
