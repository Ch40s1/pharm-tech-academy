export function Math() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section>
        <h2>Numbers</h2>
        <p>
          In pharamcy we use two different number systems the Arabic and Roman
          numerals. Arabic numerals are the numbers we use in everyday life, and
          Roman numerals are often used to indicate quatities in prescriptions
          order writting.
        </p>
        <ul>
          <li>ss = 1/2</li>
          <li>i = 1</li>
          <li>V = 5</li>
          <li>X = 10</li>
          <li>L = 50</li>
          <li>C = 100</li>
          <li>D = 500</li>
          <li>M = 1000</li>
        </ul>
        <div>
          <h3>Rules for positional notation</h3>
          <ul>
            <li>
              When roman numerals are repeated, their values are added together.
              Example: XXX = 30
            </li>
            <li>
              When a smaller number appears before a larger number, the smaller
              number is subtracted from the larger number. Example: IV = 4
            </li>
            <li>
              When a smaller number appears after a larger number, the smaller
              number is added to the larger number. Example: VI = 6
            </li>
            <li>
              When a number is placed between two larger numbers, the smaller
              number is subtracted from the larger number. Example: LIX = 59
            </li>
            <li>
              When a number is placed between two smaller numbers, the smaller
              number is added to the larger number. Example: XII = 12
            </li>
            <li>
              Roman numerals cannot be repeated more than three times in a row.
              Example: III = 3, IV = 4, V = 5
            </li>
            <li>
              V and L cannot be repeated. Example: VV and LL are incorrect.
            </li>
          </ul>
        </div>
        <div>
          <h3>Practice Problems</h3>
          <ul>
            <li>25: XXV</li>
            <li>49: iL</li>
            <li>99: iC</li>
            <li>100: C</li>
            <li>500: D</li>
            <li>1000: M</li>
          </ul>
          <ul>
            <li>xxxiii: 33</li>
            <li>lxxv: 75</li>
            <li>xcv: 95</li>
            <li>c: 100</li>
            <li>dx: 510</li>
            <li>m: 1000</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Significat Figures</h2>
        <p>
          In pharmacy we often deal with measurements and calculations that
          require precision. Significant figures are the digits in a number that
          carry meaning contributing to its precision. When we multiply or divide
          decimal fractions we must be careful to include only the significant
          figures in our calculations and answers. This is to ensure that our
          answers are accurate and precise. When a calculation involves several measurements,
          the answer should have the same number of decimal places as the measurement with the fewest decimal places.
          Also, if a calculation contains both measured and unmeasured numbers, the answer should have the
          same number of decimal places as the measured number. Numbers that are not measured are not affected by significant figures.
        </p>
        <ul>
          <li>Non Zero numbers are always significant</li>
          <li>Any zeros between two significant figures are significant</li>
          <li>Zeroes to the right of the decimal point and at the end of the number are always significant</li>
          <li>Zeroes to the left of the decimal point and in a number greater than or equal to 10 are always significant</li>
          <li>Zeroes used only to space the decimal are never significant</li>
        </ul>
        <div>
          <h3>Practice Problems</h3>
          <ul>
            <li>0.00025: 2</li>
            <li>0.000025: 2</li>
            <li>51.0: 3</li>
            <li>301.02: 5</li>
            <li>2,000,000: 1</li>
            <li>2.555: 4</li>
          </ul>
        </div>
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
          Measurements
        </h2>
        <p className="text-lg">
          In the pharmacy, we use the metric system for measurements. Technitians need to know
          metric systems for metric measures for both liquids and solids.
        </p>
        <div>
          <h3 className="font-semibold mb-2">Liquid Measures:</h3>
          <ul>
            <li>1 Liter (L) = 10dL = 1000 mL</li>
            <li>1 Deciliter (dL) = 0.1 L = 100 mL</li>
            <li>1 Milliliter (mL) = 0.001 L = 0.01 dL</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Solid Measures:</h3>
          <ul>
            <li>1 Kilogram (kg) = 1000 g</li>
            <li>1 Gram (g) = 0.001kg = 1000 mg</li>
            <li>1 Milligram (mg) = 0.001g = 1000 mcg</li>
            <li>1 Microgram (mcg) = 0.001mg = 0.000001 g</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Avoirdupois system</h3>
          <ul>
            <li>1 pound (lb) = 16 oz</li>
            <li>1 ounce (oz) = 437.5 gr</li>
            <li>1 grain (gr) = 64.8 mg</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Apothecary system</h3>
          <ul>
            <li>gallon (gal) = 4 qt</li>
            <li>quart (qt) = 2 pt</li>
            <li>pint (pt) = 16 fl oz</li>
            <li>fluid ounce (fl oz) = 8 fl dr</li>
            <li>fluid dram (fl dr) = 60 minims (m)</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Household Measures</h3>
          <ul>
            <li>1 teaspoon (tsp) = 5 mL</li>
            <li>1 tablespoon (tbsp) = 15 mL or 3 tsp</li>
            <li>1 cup (cup) = 8 fl oz</li>
          </ul>
        </div>
      </section>
      {/* <button className="bg-slate-400 h-[50px] w-[100px] rounded mt-5 text-white">Next Page</button> */}
    </div>
  );
}
