interface SectionLabelProps {
  label: string;
  color?: "pink" | "purple";
}

export default function SectionLabel({ label }: SectionLabelProps) {
  return <span className="section-badge mb-4">{label}</span>;
}
