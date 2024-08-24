import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default async function CodeHighlighter({ code }: {code: string}) {
    return (
        <SyntaxHighlighter language={'typescript'} style={darcula}>
            {code}
        </SyntaxHighlighter>
    )
}