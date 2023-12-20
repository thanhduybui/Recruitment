const htmlContent = `<div class="audit-program">
<h2>1. Design, Assess & Audit Program targeting Business Units based on Customer Operations Performance Centre (COPC) Standards</h2>
<p>Perform risk and controls assessment of the key business processes.</p>
<p>Identify opportunities to improve internal audit processes and stay up to date on current best practices in risk management and control assessment.</p>

<h2>2. Implement, Assess, and Evaluate the Audit Results</h2>
<p>Assess the current operation with reference to the Customer Operations Performance Centre (COPC) Standards.</p>
<p>Coordinate and manage internal audit activities, including planning, executing audits, and following up on audit findings.</p>
<p>Support review and advise establishing business processes.</p>

<h2>3. Other Tasks</h2>
<p>Report on results of key controls testing and propose recommendations to close any identified gaps.</p>
<p>Follow up corrective action progress after audit, collect and verify evidence from Business Units.</p>
<p>Actively contribute to creating a culture of service excellence.</p>
</div>
`;

export default function HtmlContent() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
