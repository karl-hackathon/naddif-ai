import {
    createServerClientWithCredentials,
    getLoggedInUser,
} from "@/utils/supabase";
import EmptyDocuments from "./empty-documents";
import DocumentsTable from "./documents-table";

export default async function DocumentContainer() {
    const user = await getLoggedInUser();
    const supabase = createServerClientWithCredentials();

    const { data: documents, error } = await supabase
        .from("documents")
        .select("*")
        .eq("user_id", user?.user_id);

    return (
        <div className="flex flex-col gap-2 lg:gap-2 min-h-[90vh] w-full">
            {documents && documents.length > 0 ? (
                <DocumentsTable documents={documents} />
            ) : (
                <EmptyDocuments error={error} />
            )}
        </div>
    );
}
