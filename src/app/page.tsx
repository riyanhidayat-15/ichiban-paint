import { supabase } from "@/lib/supabase";

export default async function Page() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Products</h1>

      {data?.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
