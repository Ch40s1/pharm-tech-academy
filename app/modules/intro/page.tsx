import Link from "next/link"

export default function Intro() {
  return (
    <>
      <div className=" text-gray-200 min-h-screen py-10 px-6">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white">Welcome to the Pharmacy Technician Training Program</h1>
            <p className="mt-4 text-lg text-gray-300">Your journey to becoming a certified Pharmacy Technician starts here.</p>
          </header>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-white">What is a Pharmacy Technician?</h2>
            <p className="mt-4 text-gray-300">
              Pharmacy Technicians play a crucial role in the healthcare industry, assisting pharmacists in dispensing medications, managing inventory, and providing essential support to patients. This role requires a strong attention to detail, knowledge of medications, and excellent communication skills.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-white">Responsibilities of a Pharmacy Technician</h2>
            <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
              <li>Preparing and dispensing prescription medications.</li>
              <li>Maintaining patient records and managing pharmacy inventory.</li>
              <li>Assisting with insurance claims and processing payments.</li>
              <li>Ensuring the accuracy and safety of medication orders.</li>
              <li>Providing customer service and answering patient questions.</li>
              <li>Following federal and state regulations regarding controlled substances.</li>
              <li>Supporting pharmacists with compounding medications and administering immunizations.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-white">Why Choose This Career?</h2>
            <p className="mt-4 text-gray-300">
              Becoming a Pharmacy Technician is a rewarding career path with numerous opportunities for growth and advancement.
              Whether you&apos;re looking to enter the healthcare field or enhance your current skills, this program will equip you
              with the knowledge and expertise needed to excel.
            </p>
          </section>

          <section className="text-center">
            <p className="mt-4 text-gray-300">
              Ready to start your journey? <Link href="/" className="text-blue-400 hover:text-blue-300 underline">Explore the Roadmap</Link> to see the steps you&apos;ll take in this training program.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
