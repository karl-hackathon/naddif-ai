import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import CodeHighlighter from "../../_components/code-highlighter";
import { CodeReview } from "@/types/types";

export default async function CodePage({ params }: { params: { id: string }}) {
    const cookieStore = cookies();

    const supabase = createServerClient(
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

    const { data: review } = await supabase.from('code_reviews').select('*').eq('id', params.id).single()


    return (
        <div>
            <CodeHighlighter code={review.code} />
        </div>
    )
}