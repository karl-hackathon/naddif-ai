"use client";

import { Button } from "@/components/ui/button";
import {
    FileInput,
    FileUploader,
    FileUploaderContent,
    FileUploaderItem,
} from "@/components/ui/file-uploader";
import { Paperclip, Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

function FileIconUpload() {
    return (
        <div className="flex flex-col items-center justify-center h-[250px]">
            <div className="rounded-full border border-dashed shadow-sm border-gray flex items-center justify-center mb-3">
                <div className="p-4 text-gray">
                    <Upload className="text-gray" />
                </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                PDF only
            </p>
        </div>
    );
}

export default function DocumentUploader() {
    const [files, setFiles] = useState<File[] | null>(null);

    const onValueChange = (f: File[] | null) => {
        // restrict to only one file
        if (files && files.length === 1 && f && f.length > 0) {
            toast("Please upload one file at a time");
            return;
        }
        setFiles(f);
    };

    const dropZoneConfig = {
        maxFiles: 5,
        maxSize: 1024 * 1024 * 4,
        multiple: false,
        accept: {
            "application/pdf": [".pdf"],
        },
    };

    return (
        <FileUploader
            value={files}
            onValueChange={onValueChange}
            dropzoneOptions={dropZoneConfig}
            className="relative bg-background rounded-lg p-2"
        >
            <FileInput className="border  shadow-sm border-gray dark:hover:bg-muted/25 hover:bg-muted/35 transition-colors duration-200">
                <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
                    <FileIconUpload />
                </div>
            </FileInput>
            <FileUploaderContent>
                {files &&
                    files.length > 0 &&
                    files.map((file, i) => (
                        <FileUploaderItem key={i} index={i}>
                            <Paperclip className="h-4 w-4 stroke-current" />
                            <span>{file.name}</span>
                        </FileUploaderItem>
                    ))}
            </FileUploaderContent>
            {files && files.length > 0 && (
                <Button className="mt-2">Convert Now!</Button>
            )}
        </FileUploader>
    );
}
