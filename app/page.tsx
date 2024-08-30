export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Temporary Home</h1>
        <p className="text-lg">
          Welcome to my temporary homepage. This is where I will list all the
          resources I have available. I will update this page and the other
          sections as I progress.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Learning Objectives</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Fractions</li>
          <li>Decimals</li>
          <li>Percentages</li>
          <li>Ratio and Proportion</li>
          <li>Temperature</li>
          <li>Time</li>
          <li>Apothecary vs Avoirdupois</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Fractions</h2>
        <p className="text-lg mb-4">
          Understanding fractions involves knowing how to add, subtract,
          multiply, and divide them.
        </p>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <h3 className="font-semibold mb-2">Adding Fractions:</h3>
          <p>
            Ensure denominators are the same. If not, find the least common
            denominator (LCD).
          </p>
          <p>
            <em>Example:</em> <code>1/2 + 1/3 = 3/6 + 2/6 = 5/6</code>
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <h3 className="font-semibold mb-2">Subtracting Fractions:</h3>
          <p>After ensuring common denominators, subtract the numerators.</p>
          <p>
            <em>Example:</em> <code>3/4 - 1/4 = 2/4 = 1/2</code>
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <h3 className="font-semibold mb-2">Multiplying Fractions:</h3>
          <p>Multiply the numerators together and the denominators together.</p>
          <p>
            <em>Example:</em> <code>a/b * c/d = (a * c) / (b * d)</code>
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold mb-2">Dividing Fractions:</h3>
          <p>Flip the second fraction and then multiply.</p>
          <p>
            <em>Example:</em>{" "}
            <code>a/b ÷ c/d = a/b * d/c = (a * d) / (b * c)</code>
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Decimals</h2>
        <p className="text-lg">
          Convert decimals to fractions by removing the decimal point, counting
          the decimal places, and using that number as an exponent of 10.
          <br />
          <strong>Example:</strong> 0.25 = 25/100 = 1/4
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Percentages</h2>
        <p className="text-lg">
          Convert percentages to fractions by dividing by 100 or move the
          decimal point two places to the left. To convert to decimals, divide
          by 100.
          <br />
          <strong>Example:</strong> 25% = 25/100 = 1/4 = 0.25
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Ratio and Proportion</h2>
        <p className="text-lg">
          Equivalent ratios, called proportions, can be solved using cross
          multiplication.
          <br />
          <strong>Example:</strong> <code>a/b = c/d</code> then{" "}
          <code>a * d = b * c</code>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Time</h2>
        <p className="text-lg">
          Hospitals often use military time, where the first two digits
          represent hours, and the last two represent minutes.
          <br />
          <strong>Example:</strong> 6:00 AM = 0600, 6:00 PM = 1800
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Temperature</h2>
        <p className="text-lg">
          Convert between Celsius and Fahrenheit using the formulas:
          <br />
          <strong>To Fahrenheit:</strong> (C * 1.8) + 32
          <br />
          <strong>To Celsius:</strong> (F - 32) * 5/9
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">
          Apothecary vs Avoirdupois
        </h2>
        <p className="text-lg">
          Understand the difference between the Apothecary system (used for
          medication) and the Avoirdupois system (used for weight and volume).
          The Apothecary system is based on grains, and it&apos;s essential for
          precise medication measurements.
          <br />
          <strong>Example:</strong> 1 grain = 65 milligrams
        </p>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold mb-4">Household System Measurements</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>1 teaspoon = 5 mL</li>
            <li>1 tablespoon = 15 mL</li>
            <li>1 fluid ounce = 30 mL</li>
            <li>1 cup = 240 mL</li>
            <li>1 pint = 480 mL</li>
            <li>1 quart = 960 mL</li>
            <li>1 gallon = 3.8 liters</li>
            <li>1 oz = 30g</li>
            <li>1 lb = 454g</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Need to Know</h2>
        <p className="text-lg">
          Key measurements include: Meter, Centimeter, millimeter for length;
          liter and milliliter for volume; Gram, milligram, kilogram for weight.
        </p>
      </section>

      <section className="mt-8">
        <p className="text-lg">A method that greatly helps with conversions:</p>
        <p className="text-lg mb-4">
          Example: You need to make 35 mL of a solution with a concentration of
          2 grams sodium chloride per 7 mL of water (2 g:7 mL). How many grams
          of sodium are needed?
        </p>
        <pre className="bg-gray-100 p-4 rounded-md mb-4">
          <code>35 mL * 2 g / 7 mL = 10 g</code>
        </pre>
        <p className="text-lg">
          Explanation: List the amount you&apos;re converting, find the ratio,
          multiply by the ratio, and divide by the appropriate unit. This method
          applies to any conversion.
        </p>
      </section>
      <section className="mt-8">
        <p>
          Ok so the way I want to do things is by getting right into the
          problems.
        </p>
        <div>
          <p className="m-5 bg-slate-200 text-2xl font-semibold p-3">
            Dexamethasone is available as a 4 mg/mL injection solution. An
            infant is to receive 0.35 mg. The volume needed would be 0.08 mL,
            which is difficult to measure. To solve this, we need to prepare a
            dilution so that the final concentration is 1 mg/mL. We will
            calculate the amount of diluent required if the original product is
            in a 1 mL vial and the entire vial is diluted. We will also
            determine the volume of the final dose to be measured.
          </p>
          <p>
            First, let&apos;s rephrase the problem to better understand it: We have a
            drug with a concentration of 4 mg/mL, and we need to administer 0.35
            mg to an infant. The volume needed at the current concentration
            would be 0.08 mL, which is difficult to measure accurately. To make
            this easier, we want to dilute the solution to a concentration of 1
            mg/mL. Our task is to find the volume of diluent needed and the
            final volume to be measured for the dose.
            <br />
            Here&apos;s a summary of what we&apos;re working with:
            <ul className="list-disc list-inside">
              <li>Original Concentration: 4 mg/mL</li>
              <li>Desired Concentration: 1 mg/mL</li>
              <li>Volume of the original vial: 1 mL</li>
              <li>Required Dose: 0.35 mg</li>
              <li>Calculate the volume of diluent</li>
            </ul>
            Now, let&apos;s start solving the problem.
          </p>
          <p>
            Since the vial contains 1 mL of solution with a concentration of 4
            mg/mL, we need to determine the total amount of the drug in the
            vial.
            <a className="underline text-blue-400" href="https://www.wikihow.com/Calculate-the-Concentration-of-a-Solution">
              Using the concentration formula
            </a>
            , we can calculate the amount of drug as follows:
            <br />
            <strong>Concentration = Mass / Volume</strong>, so
            <br />
            <strong>
              Mass = Volume × Concentration = 1 mL × 4 mg/mL = 4 mg.
            </strong>
            <br />
            Now that we know there are 4 mg of the drug in the vial, we need to
            dilute the solution to achieve a concentration of 1 mg/mL. We can
            use the same formula to find the final volume needed for this
            concentration:
            <br />
            <strong>1 mg/mL = 4 mg / Final Volume.</strong>
            <br />
            Solving for the final volume, we get:
            <br />
            <strong>Final Volume = 4 mg / 1 mg/mL = 4 mL.</strong>
            <br />
            Since the original solution is 1 mL, we need to add 3 mL of diluent
            to reach a total volume of 4 mL with a concentration of 1 mg/mL.
            <br />
            Now, with the solution diluted to 1 mg/mL, we can calculate the
            volume of the final dose:
            <br />
            <strong>
              Volume of Dose = Required Dose / Concentration = 0.35 mg / 1 mg/mL
              = 0.35 mL.
            </strong>
            <br />
            Therefore, the final dose to be measured is 0.35 mL.
            <br />
            One challenge in this process is understanding that we are
            calculating the volume of the final dose because it contains the
            exact amount of 0.35 mg of the drug needed for the infant.
          </p>
        </div>
      </section>
      {/* <button className="bg-slate-400 h-[50px] w-[100px] rounded mt-5 text-white">Next Page</button> */}
    </div>
  );
}
