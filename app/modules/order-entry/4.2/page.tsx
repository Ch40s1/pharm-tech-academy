import { Math } from "../components/math";
import PopularSigCodes from "../components/sigcodes";

export default function OrderEntry() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <p>
          4.2 <br />
          Formulas, calculations, ratios, proportions, alligations, conversions,
          Sig codes (e.g., b.i.d., t.i.d., Roman numerals), abbreviations,
          medical terminology, and symbols for days supply, quantity, dose,
          concentration, dilutions
        </p>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Learning Objectives</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Calculating the day supply of a medication</li>
          </ul>
        </section>
      </div>
      <Math />
      <PopularSigCodes />
      <section>
        <h2>Practice problems</h2>
      </section>
      <section className="container mx-auto px-4 py-8">
        <p>
          Once we know this then we can start claculating one of the most
          important calculations as a pharmacy technician. Calculating the day
          supply of a medication is a critical skill for pharmacy technicians.
          It ensures that patients receive the correct amount of medication and
          that the pharmacy has enough stock to fill prescriptions in a timely
          manner. Also, so the pharmacy does not get addited. To calculate the
          day supply of a medication, you need to know the quantity of the
          medication, the dose, and the frequency of administration. You also
          need to know the days supply formula, which is:
          <code>Days Supply = Quantity / (Dose * Frequency per day)</code>
        </p>
        <p>
          For example, if a patient is prescribed 30 tablets of a medication,
          with a dose of 1 tablet twice a day, the day supply would be:
          <code>Days Supply = 30 / (1 * 2) = 30 / 2 = 15 days</code>
        </p>
      </section>
    </>
  );
}
