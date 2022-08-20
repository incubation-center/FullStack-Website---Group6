function Ingredients ()
{
  return (
    <div className="collapse collapse-arrow rounded-box border-2 border-primary hover:shadow-lg">
      <input type="checkbox" className="peer" /> 
      <div className="collapse-title font-bold underline decoration-2 underline-offset-4 peer-checked:bg-primary peer-checked:text-white mb-2">
        INGREDIENTS
      </div>
      
      <div className="collapse-content"> 
        <ul>
          <li>2 tablespoons vegetable oil</li>
          <li>1 thumb size fresh ginger, peeled and grated</li>
          <li>1 apple such as Honeycrisp, peeled, cored, and grated</li>
          <li>1 large onion, thinly sliced</li>
          <li>5 cups water</li>
          <li>1 large carrot, peeled and chopped</li>
          <li>2 medium potatoes, peeled and chopped</li>
          <li>1 1/2 cup green beans, ends trimmed and stringy part removed</li>
          <li>1 Japanese or Chinese eggplant, chopped</li>
          <li>8 cherry tomatoes</li>
          <li>1 box Japanese curry roux mix (I&apos;m using Java Curry)</li>
          <li>Cooked Japanese short grain rice</li>
         </ul>
      </div>
    </div>
  )
}

export default Ingredients;
