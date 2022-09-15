function Ingredients (props)
{
  const ingredientsDisc = props.item.ingredientLine.split("\n")
  return (
    <div tabIndex={ 0 } className="collapse collapse-arrow group rounded-box border-2 border-primary hover:shadow-lg">
      <div className="collapse-title font-bold underline decoration-2 underline-offset-4 dark:text-accent group-focus:bg-primary group-focus:text-white dark:group-focus:text-neutral">
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
