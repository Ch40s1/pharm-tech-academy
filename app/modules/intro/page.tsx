import Link from "next/link";

export default function Intro() {
  return (
    <>
      <div className=" text-gray-200 min-h-screen py-10 px-6">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white">
              Welcome to the Pharmacy Technician Training Program
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Your journey to becoming a certified Pharmacy Technician starts
              here.
            </p>
          </header>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-white">
              What is a Pharmacy Technician?
            </h2>
            <p className="mt-4 text-gray-300">
              Pharmacy Technicians play a crucial role in the healthcare
              industry, assisting pharmacists in dispensing medications,
              managing inventory, and providing essential support to patients.
              This role requires a strong attention to detail, knowledge of
              medications, and excellent communication skills.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Why Choose This Career?
            </h2>
            <p className="mt-4 text-gray-300">
              Becoming a Pharmacy Technician is a rewarding career path with
              numerous opportunities for growth and advancement. Whether
              you&apos;re looking to enter the healthcare field or enhance your
              current skills, Pharmacy Technician can be a great starting point
              or a long-term career choice. Here are a few reasons to consider
              this career:
            </p>
            <h3 className="text-2xl font-semibold text-white mt-6">
              Place to work
            </h3>
            <ul className="list-disc list-inside text-gray-300 pl-4 mt-2 space-y-2">
              <li>Hospitals: Median Annual Salary: $47,940</li>
              <li>Pharmacies & Drug Stores: Median Annual Salary: $37,370</li>
            </ul>
            <h3 className="text-2xl font-semibold text-white mt-6">
              Factors for higher pay
            </h3>
            <ul className="list-disc list-inside text-gray-300 pl-4 mt-2 space-y-2">
              <li>IV certification</li>
              <li>Aseptic Processing</li>
              <li>Order Inventory</li>
              <li>Data Entry</li>
              <li>Microsoft Office</li>
              <li>Hospital Experience</li>
              <li>Years of Experience</li>
            </ul>
            <p className="mt-6 text-gray-300">
              <strong>Note:</strong> Something that they make clear in my
              current program is that as a pharmacy technician, it is
              recommended to seek advanced training and certification to
              increase your earning potential and job opportunities.
              &apos;Stacking&apos; certifications is a great way to do this. For
              example, you could start with a basic certification and then add
              on additional certifications such as preparing sterile IV
              products.
            </p>
            <p className="mt-4 text-gray-300">
              This program I designed will cover the PCTB certification
              (standard certification) and exam. Everything here will be things
              I learn and resources that have helped me. I will also post my
              exam results when I take the exam. If you are ready, proceed to
              the next section.
            </p>
          </section>

          <section className="p-6">
            <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
              Key Concepts:
            </h1>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-semibold text-blue-500">
                  MTM (Medication Therapy Management):
                </span>
                <p className="mt-2">
                  A service provided by pharmacists aimed at optimizing drug
                  therapy and improving therapeutic outcomes.
                </p>
                <ul className="list-inside list-disc pl-4 mt-2 space-y-2">
                  <li>
                    <span className="font-semibold">Medication Review:</span>{" "}
                    Assessment of all medications (prescription, OTC,
                    supplements) to ensure appropriateness, effectiveness,
                    safety, and proper use.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Personal Medication Record (PMR):
                    </span>{" "}
                    A complete list of all medications a patient is taking.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Medication Action Plan (MAP):
                    </span>{" "}
                    A plan to address issues identified during the medication
                    review.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Intervention and Referral:
                    </span>{" "}
                    Pharmacists may intervene if medication-related problems are
                    found or refer patients to other healthcare providers.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Documentation and Follow-Up:
                    </span>{" "}
                    Documenting findings and actions, with follow-up to monitor
                    progress.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-blue-500">
                  CPA (Collaborative Practice Agreement):
                </span>
                <p className="mt-2">
                  A formal agreement between pharmacists and healthcare
                  providers that allows pharmacists to manage medication
                  therapy.
                </p>
                <ul className="list-inside list-disc pl-4 mt-2 space-y-2">
                  <li>
                    <span className="font-semibold">Scope of Practice:</span>{" "}
                    Specifies conditions under which the pharmacist can manage
                    medication therapy.
                  </li>
                  <li>
                    <span className="font-semibold">Protocols:</span> Includes
                    guidelines that pharmacists must follow when managing a
                    patient&apos;s medication.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Supervision and Communication:
                    </span>{" "}
                    Requires ongoing communication between the pharmacist and
                    the supervising healthcare provider.
                  </li>
                </ul>
              </li>
            </ul>
            <br />
            <p>
              <span className="font-semibold text-blue-500">Note:</span> These
              concepts are essential for pharmacy technicians to understand, as
              they play a key role in supporting pharmacists in providing
              patient care. Also in how the general pharmacy operates.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white">
              Take a look at these.
            </h2>
            <h2 className="text-3xl font-semibold text-white">
              Responsibilities of a Pharmacy Technician
            </h2>
            <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
              <li>
                Input prescriptions in the computer system; check for accuracy.
              </li>
              <li>
                Prepare prescribed medications—retrieve, weigh, pour, count,
                measure, and sometimes mix, count tablets, and label bottles.
              </li>
              <li>Deliver medications to patients in some settings.</li>
              <li>
                Engage with customers by answering phones, handling patient
                questions (not prescription-related), and referring patients to
                the RPh for medication counsel.
              </li>
              <li>
                Contact physicians&apos; offices with refill requests and assist
                in safety/quality checks.
              </li>
              <li>Act as a cashier, stock shelves, and handle inventory.</li>
              <li>
                Assemble patient medication profiles and histories; check them
                for accuracy.
              </li>
              <li>
                Prepare insurance online claim forms, reconcile billing with
                copays, and meet other insurance requirements.
              </li>
              <li>
                Run automated equipment for high-volume drug processing and
                packaging.
              </li>
              <li>Prepare nonsterile, sterile, and hazardous medications.</li>
              <li>
                In hospitals, work with nursing staff, fill and deliver
                medication orders, repackage medications, and restock automated
                medication dispensing machines in hospital floor units.
              </li>
              <li>Prepare medication supplies in special packaging.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-white">
              Roles and Responsibilities of a Pharmacist
            </h2>
            <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
              <li>
                Assessing information on patient&apos;s medical, medication, and
                allergy history.
              </li>
              <li>
                Checking age-appropriate dosing for medication and potential
                duplications of therapy.
              </li>
              <li>
                Counseling patients on possible side effects and adverse
                reactions.
              </li>
              <li>Screening patients for hypertension and diabetes.</li>
              <li>
                Ensuring positive outcomes to therapy for hypertension (HTN),
                diabetes, asthma, and high cholesterol.
              </li>
              <li>
                Counseling patients on computer alerts for interactions with
                prescription and OTC drugs and dietary supplements.
              </li>
              <li>
                Screening and treating patients with illnesses that can be
                safely self-medicated.
              </li>
              <li>
                Assisting and supporting motivated patients to quit smoking.
              </li>
              <li>
                Providing consumers with recommendations on OTC drugs, vitamins,
                minerals, herbs, and dietary supplements.
              </li>
              <li>
                Providing up-to-date and accurate information to all prescribers
                as a drug therapy expert.
              </li>
              <li>
                Dispensing information on the proper use of medical supplies and
                equipment.
              </li>
              <li>
                Educating on and monitoring the safe use of controlled
                substances.
              </li>
              <li>
                Vaccinating high-risk patients for preventable diseases such as
                influenza, pneumonia, and shingles.
              </li>
            </ul>
          </section>

          <section>
            <p>
              Looking at the previous two sections, you can see that the roles
              of a pharmacy technician are mostly administrative and technical,
              while the roles of a pharmacist are more clinical and
              patient-focused. This is why it is important for pharmacy
              technicians to work closely with pharmacists to ensure that
              patients receive the best possible care. And why MTM and CPA are
              important concepts for pharmacy technicians to understand.
              Pharmacy technicians cannot provide clinical services like
              pharmacists, so something to understand is that the pharmacist
              will be mostly dealing with patient questions and assessing
              information on patient&apos;s medical history. Therefore, as a
              pharmacy technician, you will be tasked with preparing
              medications, managing inventory, and assisting the pharmacist in
              various ways so they can get their job done efficiently. In the
              end of the day it is a team effort to ensure that patients receive
              the best care possible.
            </p>
          </section>
          <Link href="/modules/laws" passHref>
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
              Next Page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
