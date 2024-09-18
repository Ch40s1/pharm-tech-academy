export function Math() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section>
        <h2>Numbers</h2>
        <p>
          In pharamcy we use two different number systems
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Fractions</h2>
        <p className="text-lg mb-4">
          Understanding fractions involves knowing how to add, subtract,
          multiply, and divide them.
        </p>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Adding Fractions:</h3>
          <p>
            Ensure denominators are the same. If not, find the least common
            denominator (LCD).
          </p>
          <p>
            <em>Example:</em> <code>1/2 + 1/3 = 3/6 + 2/6 = 5/6</code>
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Subtracting Fractions:</h3>
          <p>After ensuring common denominators, subtract the numerators.</p>
          <p>
            <em>Example:</em> <code>3/4 - 1/4 = 2/4 = 1/2</code>
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Multiplying Fractions:</h3>
          <p>Multiply the numerators together and the denominators together.</p>
          <p>
            <em>Example:</em> <code>a/b * c/d = (a * c) / (b * d)</code>
          </p>
        </div>
        <div className="rounded-md">
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
      </section>
      {/* <button className="bg-slate-400 h-[50px] w-[100px] rounded mt-5 text-white">Next Page</button> */}
    </div>
  );
}
