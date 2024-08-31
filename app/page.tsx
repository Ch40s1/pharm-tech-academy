import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-blue-700">
            Pharmacy Technician PTCB Content Guidelines
          </h1>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-400">
            Content Areas
          </h2>
          <div className="bg-gray-900 text-gray-200 font-sans p-6">
            <div className="container mx-auto max-w-4xl">
              <header className="mb-10">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Pharmacy Technician Training Overview
                </h1>
                <p className="text-gray-300">
                  This overview covers the key content areas required for the
                  Pharmacy Technician Certification Board (PTCB) exam.
                </p>
              </header>

              <section className="mb-10">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  1. Medications - 40%
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    1.1 Generic names, brand names, and classifications of
                    medications
                  </li>
                  <li>1.2 Therapeutic equivalence</li>
                  <li>
                    1.3 Common and life-threatening drug interactions and
                    contraindications (e.g., drug-disease, drug-drug,
                    drug-dietary supplement, drug-laboratory, drug-nutrient)
                  </li>
                  <li>
                    1.4 Strengths/dose, dosage forms, routes of administration,
                    special handling and administration instructions, and
                    duration of drug therapy
                  </li>
                  <li>
                    1.5 Common and severe medication side effects, adverse
                    effects, and allergies
                  </li>
                  <li>
                    1.6 Indications of medications and dietary supplements
                  </li>
                  <li>
                    1.7 Drug stability (e.g., oral suspensions, insulin,
                    reconstitutables, injectables, vaccinations)
                  </li>
                  <li>1.8 Narrow therapeutic index (NTI) medications</li>
                  <li>
                    1.9 Physical and chemical incompatibilities related to
                    non-sterile compounding and reconstitution
                  </li>
                  <li>
                    1.10 Proper storage of medications (e.g., temperature
                    ranges, light sensitivity, restricted access)
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  2. Federal Requirements - 12.5%
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    2.1 Federal requirements for handling and disposal of
                    non-hazardous, hazardous, and pharmaceutical substances and
                    waste
                  </li>
                  <li>
                    2.2 Federal requirements for controlled substance
                    prescriptions (i.e., new, refill, transfer) and DEA
                    controlled substance schedules
                  </li>
                  <li>
                    2.3 Federal requirements (e.g., DEA, FDA) for controlled
                    substances (i.e., receiving, storing, ordering, labeling,
                    dispensing, reverse distribution, take-back programs, and
                    loss or theft of)
                  </li>
                  <li>
                    2.4 Federal requirements for restricted drug programs and
                    related medication processing (e.g., pseudoephedrine, Risk
                    Evaluation and Mitigation Strategies [REMS])
                  </li>
                  <li>
                    2.5 FDA recall requirements (e.g., medications, devices,
                    supplies, supplements, classifications)
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  3. Patient Safety and Quality Assurance - 26.25%
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    3.1 High-alert/risk medications and look-alike/sound-alike
                    (LASA) medications
                  </li>
                  <li>
                    3.2 Error prevention strategies (e.g., prescription or
                    medication order to correct patient, Tall Man lettering,
                    separating inventory, leading and trailing zeros, bar code
                    usage, limit use of error-prone abbreviations)
                  </li>
                  <li>
                    3.3 Issues that require pharmacist intervention (e.g., drug
                    utilization review [DUR], adverse drug event [ADE], OTC
                    recommendation, therapeutic substitution, misuse, adherence,
                    post-immunization follow-up, allergies, drug interactions)
                  </li>
                  <li>
                    3.4 Event reporting procedures (e.g., medication errors,
                    adverse effects, and product integrity, MedWatch, near miss,
                    root-cause analysis [RCA])
                  </li>
                  <li>
                    3.5 Types of prescription errors (e.g., abnormal doses,
                    early refill, incorrect quantity, incorrect patient,
                    incorrect drug)
                  </li>
                  <li>
                    3.6 Hygiene and cleaning standards (e.g., handwashing,
                    personal protective equipment [PPE], cleaning counting
                    trays, countertop, and equipment)
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-3xl font-semibold text-white mb-4">
                  4. Order Entry and Processing - 21.25%
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    4.1 Procedures to compound non-sterile products (e.g.,
                    ointments, mixtures, liquids, emulsions, suppositories,
                    enemas)
                  </li>
                  <li>
                    4.2 Formulas, calculations, ratios, proportions,
                    alligations, conversions, Sig codes (e.g., b.i.d., t.i.d.,
                    Roman numerals), abbreviations, medical terminology, and
                    symbols for days supply, quantity, dose, concentration,
                    dilutions
                  </li>
                  <li>
                    4.3 Equipment/supplies required for drug administration
                    (e.g., package size, unit dose, diabetic supplies, spacers,
                    oral and injectable syringes)
                  </li>
                  <li>
                    4.4 Lot numbers, expiration dates, and National Drug Code
                    (NDC) numbers
                  </li>
                  <li>
                    4.5 Procedures for identifying and returning dispensable,
                    non-dispensable, and expired medications and supplies (e.g.,
                    credit return, return to stock, reverse distribution)
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-400">
            Suggested Roadmap
          </h2>
          <ol className="list-decimal list-inside mt-4 space-y-2">
            <li className="text-lg text-white">
              <Link
                href="/modules/intro"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Intro
              </Link>
            </li>
            <li className="text-lg text-white">
              <Link
                href="/modules/order-entry"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Pharmacy Calculations: 4.2
              </Link>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <p className="text-lg text-white">
            Note: This roadmap is based on a course I am taking, provided by
            Dallas College. I will be updating this page as I progress through
            the course.
          </p>
          <Link
            href="https://www.dallascollege.edu/cd/ce/training/health/pages/pharmacy-technician-retail.aspx"
            target="_blank"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Dallas College CE: Pharmacy Technician
          </Link>
        </section>

        <footer>
          <Link
            href="https://www.ptcb.org/guidebook/ptce-content-outline"
            target="_blank"
            className="text-blue-500 underline hover:text-blue-700"
          >
            PTCB content outline
          </Link>
        </footer>
      </div>
    </div>
  );
}
