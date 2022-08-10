function Instruction ()
{
  return (
    <div className="card w-1/3 h-screen outline text-primary bg-base-200">
      <div className="card-body p-5 text-neutral hover:underline-offset-2">
        <h2 className="card-title justify-center px-3 underline">HOW TO COOK</h2>

        <div className="flex flex-row">
          <ul className="font-bold"> 1. </ul>
          <ul className="indent-1">Submerge the chopped eggplant in cold water and leave for 15 minutes. This will remove some of the bitterness.</ul>
        </div>
        <div className="flex flex-row">
          <ul className="font-bold"> 2. </ul>
          <ul className="indent-1">In a large pot over medium high heat, add 1 tablespoon oil, grated ginger and apple. Stir and cook for 2 minutes.</ul>
        </div>
        <div className="flex flex-row">
          <ul className="font-bold"> 3. </ul>
          <ul className="indent-1">Add onion and cook for 3 minutes, or until the slices have softened and are translucent.</ul>
        </div>
        <div className="flex flex-row">
          <ul className="font-bold"> 4. </ul>
          <ul className="indent-1">Add water and stir. Add carrot, potatoes, and green beans and stir. Bring to a boil and lower the heat to a simmer. Cover and cook for 20 minutes.</ul>
        </div>
        <div className="flex flex-row">
          <ul className="font-bold"> 5. </ul>
          <ul className="indent-1">Drain the eggplant and pat dry with a paper towel. In a large pan over medium high heat, add 1 tablespoon vegetable oil and when the oil is hot, add the eggplant. Cook on each side for 2-3 minutes, until golden and tender. Turn the heat off and transfer to a plate covered with paper towel. Set aside.</ul>
        </div>
        <div className="flex flex-row">
          <ul className="font-bold"> 6. </ul>
          <ul>Break the curry roux and stir it into the pot until it’s completely melted.</ul>
        </div>
        <div className="flex flex-row">
          <ul className="font-bold"> 7. </ul>
          <ul className="indent-1">When there’s 10 minutes left to the cooking process, open the lid and add the eggplant and cherry tomatoes. Put the lid back on and simmer for the remaining 10 minutes.</ul>
        </div>
        <div className="flex flex-row">
          <ul className="font-bold"> 8. </ul>
          <ul className="indent-1">Serve with fukujinzuke (Japanese relish) and cooked Japanese rice.</ul>
        </div>
      </div>
    </div>
  )
}

export default Instruction;
