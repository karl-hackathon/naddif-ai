import CsvDialog from "./csv-dialog";

export default function CsvRow({ url }: { url: string }) {
    return (
        <div className="flex justify-start items-center gap-2">
            {/* <p
                className="cursor-pointer hover:underline"
                onClick={() => console.log("clicked")}
            >
                View
            </p> */}
            <CsvDialog />
            <a className="cursor-pointer hover:underline" href={url}>
                Download
            </a>
        </div>
    );
}
