function Ingredients (props)
{
  const ingredientsDisc = props.item.ingredientLine.split("\n")
  return (
    <div className="collapse collapse-arrow rounded-box border-2 border-primary hover:shadow-lg">
      <input type="checkbox" className="peer" />
      <div className="collapse-title font-bold underline decoration-2 underline-offset-4 dark:text-accent peer-checked:bg-primary peer-checked:text-white dark:peer-checked:text-neutral">
        INGREDIENTS
      </div>

      <div className="collapse-content dark:text-accent">
        <ul className="list-disc p-3">
          {
            ingredientsDisc.map((i, index) => {
              return (
                <li key={index}>{i}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Ingredients;
