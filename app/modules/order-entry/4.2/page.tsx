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
        <h2 className="text-3xl font-semibold mb-4">Dosing Schedules</h2>
        <p>
          The dosing schedule is used to provide instructions for what quantity
          of a drug should be taken, how to take it, and how often to take it.
          The dosing schedule is most often given as the number of dosage forms
          (e.g., 1 tablets, 1 capsules, 1 suppository) or some other unit of
          measure (e.g., 1 mL, 1 tsp, 1 puff) or the volume of liquid to be
          taken (e.g., 5 mL, 1 tsp, 1 oz). The dosing regimem is the frequency
          at which the drug dose are given (e.g., once daily, twice daily, every
          4 hours). The correct time is also important. To avoid confusion, we
          use the 24-hour clock. This is to avoid confusion between AM and PM.
        </p>
        <h3>Safety Tips</h3>
        <ul>
          <li>
            Before performing a calculation, first estimate the amount you are
            likely to need this will give you an idea of what the answer should
            be.
          </li>
          <li>
            Always double-check your calculations before giving the medication
            to the patient.
          </li>
          <li>
            Doses of oral medications are usually 5 mL or less for children and
            5 - 20 mL for adults. If the dose seems too large, double-check your
            calculations.
          </li>
          <li>
            Always take extra step when calculating doses for infants and
            children
          </li>
          <li>
            Always take extra precuations when calculating dose for high alert
            medications
          </li>
          <li>
            If you are not certain about how to do a calculation check with the
            pharmacist
          </li>
          <li>
            Take extra case when convertin units in the metric system. Tenfold
            or hundredfold errors can happen easily and can be dangerous.
          </li>
        </ul>
        <div>
          <h3 className="font-semibold mb-2">
            ISMP List fo errors-prone designations
          </h3>
          <ul>
            <li>
              Trailing zero after decimal point can be mistaken is not seen (ex:
              1.0 as 10). Fix: do not use trailing zero for whole numbers. Use
              leading zero for decimal numbers (ex: 0.1 instead of .1)
            </li>
            <li>
              &apos;Naked&apos; decimal points can be seen as whole numbers (ex:
              .5 as 5). Fix: use zero before a decimal point if the dose is less
              than a whole unit.
            </li>
            <li>
              Abbreviations such as mg. or mL. with a period can be misread by
              number 1 is written poorly (ps: I was shocked when I found this
              out). Fix: do not use a period after the abbreviation.
            </li>
            <li>
              Drug names and dose run together (ex: Inderal40mg, Tegretol300mg)
              Can be misread especially if the drug name ends with a I. Fix: use
              a space between the drug name and the dose.
            </li>
            <li>
              Numerical dose and unit of measure run together. (ex: 10mg, 100mg)
              The m can be misread as 1 or 2 zeros. Fix: use a space between the
              dose and the unit of measure.
            </li>
            <li>
              Large doses without properly placed commas (ex: 100000, 10000) can
              be misread. Fix: Properly place commas or use words
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
