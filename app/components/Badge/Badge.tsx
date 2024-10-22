import "./Badge.css";

export interface BadgeProps {
  title: string;
  value: number;
  ariaLabel: string;
  isSmall?: boolean;
}

const Badge = ({ title, value, ariaLabel, isSmall }: BadgeProps) => {
  return (
    <dl
      className={`badge${isSmall ? " small" : ""}`}
      aria-label={ariaLabel}
      role="list"
    >
      <dt className="badge-dt" aria-describedby={ariaLabel}>
        {title}
      </dt>
      <dd className="badge-dd">{value}&deg;</dd>
    </dl>
  );
};

export default Badge;
