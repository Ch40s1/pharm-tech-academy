export function Metric() {
  return (
    <table>
      <caption>Metric Prefixes and Their Meanings</caption>
      <thead>
        <tr>
          <th>Prefix</th>
          <th>Symbol</th>
          <th>Multiplier</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Kilo-</td>
          <td>k</td>
          <td>1,000 times</td>
          <td>1 kilometer (km) = 1,000 meters (m)</td>
        </tr>
        <tr>
          <td>Hecto-</td>
          <td>h</td>
          <td>100 times</td>
          <td>1 hectoliter (hL) = 100 liters (L)</td>
        </tr>
        <tr>
          <td>Deca-</td>
          <td>da</td>
          <td>10 times</td>
          <td>1 decagram (dag) = 10 grams (g)</td>
        </tr>
        <tr>
          <td>(Base Unit)</td>
          <td>-</td>
          <td>1 time</td>
          <td>1 meter (m), 1 liter (L), 1 gram (g)</td>
        </tr>
        <tr>
          <td>Deci-</td>
          <td>d</td>
          <td>1/10th (0.1 times)</td>
          <td>1 decimeter (dm) = 0.1 meters (m)</td>
        </tr>
        <tr>
          <td>Centi-</td>
          <td>c</td>
          <td>1/100th (0.01 times)</td>
          <td>1 centimeter (cm) = 0.01 meters (m)</td>
        </tr>
        <tr>
          <td>Milli-</td>
          <td>m</td>
          <td>1/1,000th (0.001 times)</td>
          <td>1 milliliter (mL) = 0.001 liters (L)</td>
        </tr>
        <tr>
          <td>Micro-</td>
          <td>µ or mc</td>
          <td>1/1,000,000th (0.000001 times)</td>
          <td>1 microgram (µg) = 0.000001 grams (g)</td>
        </tr>
      </tbody>
    </table>
  );
}
