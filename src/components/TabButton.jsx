export default function TabButton({
  children,
  isSelected,
  onSelect,
  ...props
}) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
