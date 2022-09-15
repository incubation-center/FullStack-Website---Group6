function Instructions (props)
{
  const instructionDesc = props.item.instruction.split("\n")
  return (
    <div tabIndex={ 0 } className="collapse collapse-arrow group rounded-box border-2 border-primary hover:shadow-lg">
      <div className="collapse-title font-bold underline decoration-2 underline-offset-4 dark:text-accent group-focus:bg-primary group-focus:text-white dark:group-focus:text-neutral">
        INSTRUCTIONS
      </div>

      <div className="collapse-content dark:text-accent">
        <ol className="list-decimal p-3">
          {
            instructionDesc.map((i, index) => {
              return (
                <li key={index}>{i}</li>
              )
            })
          }
        </ol>
      </div>
    </div>
  )
}

export default Instructions;
