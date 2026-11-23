export default function SectionHeading({ eyebrow, title, accent }: { eyebrow: string; title: string; accent?: string }) {
 return <div className="section-heading"><span className="eyebrow"><i />{eyebrow}</span><h2>{title} {accent && <em>{accent}</em>}</h2></div>;
}
