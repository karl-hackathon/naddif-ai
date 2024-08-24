import { createServerClientWithCredentials } from "@/utils/supabase";
import { toast } from "sonner";
import CsvGrid from "./csv-grid";

export default async function CsvDialogData() {
    const supabase = createServerClientWithCredentials();
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
