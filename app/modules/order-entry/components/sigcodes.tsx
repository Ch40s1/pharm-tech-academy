// Define an array of popular SIG codes
const sigCodes = [
  { code: "BID", meaning: "Twice a day" },
  { code: "TID", meaning: "Three times a day" },
  { code: "QID", meaning: "Four times a day" },
  { code: "QD", meaning: "Every day" },
  { code: "QHS", meaning: "At bedtime" },
  { code: "Q4H", meaning: "Every 4 hours" },
  { code: "Q6H", meaning: "Every 6 hours" },
  { code: "PRN", meaning: "As needed" },
  { code: "PO", meaning: "By mouth" },
  { code: "SL", meaning: "Sublingual (under the tongue)" },
  { code: "IM", meaning: "Intramuscular" },
  { code: "IV", meaning: "Intravenous" },
  { code: "AC", meaning: "Before meals" },
  { code: "PC", meaning: "After meals" },
  { code: "STAT", meaning: "Immediately" },
  { code: "HS", meaning: "At bedtime" }
];

// Create a component that displays the list of SIG codes
const PopularSigCodes: React.FC = () => {
  return (
    <div className="sig-code-list container mx-auto px-4 py-8">
      <h2>Popular SIG Codes</h2>
      <ul>
        {sigCodes.map((sig, index) => (
          <li key={index}>
            <strong>{sig.code}</strong> - {sig.meaning}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularSigCodes;
