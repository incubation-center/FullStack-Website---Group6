function Instructions (props)
{
  const instructionDesc = props.item.instruction.split("\n")
  return (
    <div className="collapse collapse-arrow rounded-box border-2 border-primary hover:shadow-lg">
      <input type="checkbox" className="peer" />
      <div className="collapse-title font-bold underline decoration-2 underline-offset-4 dark:text-accent peer-checked:bg-primary peer-checked:text-white dark:peer-checked:text-neutral">
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
