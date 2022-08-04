import { useRouter } from "next/router";


export const DeleteRecipe = () => {
  const router = useRouter();
  const refreshData = () => router.replace(router.asPath);

  const deleteAllRecord = async () => {
    const res = await fetch("/api/recipe/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    refreshData();
  };

  return (
    <button
      onClick={async (e) => {
        e.preventDefault();
        await deleteAllRecord();
      }}
      className="mx-16 bg-purple-400 p-2 rounded-md text-white font-bold border-2 border-purple-500 outline-none cursor-pointer"
    >
      Delete all
    </button>
  );
};
