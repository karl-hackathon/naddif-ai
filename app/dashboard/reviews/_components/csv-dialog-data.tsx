import { createServerClientWithCredentials } from "@/utils/supabase";
import { toast } from "sonner";
import CsvGrid from "./csv-grid";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function CsvDialogData() {
    const cookieStore = cookies();

    const supabase: any = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
        },
      }
    );

    const { data, error } = await supabase.storage
        .from("fiscus-flow")
        .download("csv/output.csv");

    if (!data || error) {
        toast.error("Couldn't fetched bank statement data, try again later.");
        return;
    }

    const csvData = await data.text();

    return (
        <div className="w-full">
            <CsvGrid data={csvData} />
        </div>
    );
}
