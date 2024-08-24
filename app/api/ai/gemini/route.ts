import z from 'zod'
import { NextRequest, NextResponse } from "next/server";
import { google } from '@ai-sdk/google';
import { generateObject } from 'ai';

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();
    
    const { object } = await generateObject({
        model: google('gemini-1.5-flash-latest', { structuredOutputs: false }),
        schema: z.array(z.object({
            suggestion: z.string(),
            description: z.string(),
            severity: z.number(),
        }
        )),
        
        prompt: 
`Context:
Act as an experienced Software Engineer and an expert reviewer. Based on the code I will pass, generate for me a code review and give it a severity out of 10 (can be a float). be harsh with the severity rating.
look for common issues such as:
1. **Duplicated Code**: Identify any repetitive code segments that could be refactored into reusable functions or methods.
2. **Long Methods**: Highlight any methods or functions that are excessively long and suggest how they could be broken down into smaller, more manageable pieces.
3. **Large Classes**: Point out any classes that have too many responsibilities and propose ways to split them into more cohesive classes.
4. **Poor Naming Conventions**: Review the naming of variables, methods, and classes for clarity and suggest improvements where names are ambiguous or non-descriptive.
5. **Complex Conditionals**: Identify any complex conditional statements or logic that could be simplified or made more readable.
6. **Magic Numbers**: Spot any hardcoded values that should be replaced with named constants to improve code readability and maintainability.
7. **Dead Code**: Look for any code that is never executed or used and suggest its removal.
8. **Code Comments**: Evaluate the usage of comments to ensure they add value and are not redundant. Suggest where comments could be added for clarity or improved.
9. **Error Handling**: Assess how errors are managed and suggest improvements for more robust and graceful error handling.
10. **Performance Issues**: Highlight any parts of the code that could be optimized for better performance.
11. **Syntax Errors**: Check for syntax mistakes like incorrect keyword, no closing bracket, etc..

Code:
${code}
`,
    });
    return NextResponse.json({ status: 200, res: object });
  } catch (error: any) {
    return NextResponse.json({
        error,
        status: 500
    });
  }
}


// Examples:
// ### 1. **Duplicated Code**

// def calculate_area_of_circle(radius):
//     return 3.14159 * radius * radius

// def calculate_area_of_sphere(radius):
//     return 4 * 3.14159 * radius * radius


// **Issue:**
// Both functions use the value 3.14159 for π. This value should be defined as a constant to avoid duplication and make updates easier.


// ### 2. **Poor Naming Conventions**
// function calc(a, b) {
//     return a + b;
// }

// **Issue:**
// The function 'calc' does not clearly describe its purpose. The parameter names 'a' and 'b' are not descriptive.


// ### 3. **Complex Conditionals**

// **Code Snippet:**
// def process_order(order):
//     if order.status == 'pending' or (order.status == 'shipped' and order.priority == 'high'):
//         if order.amount > 1000:
//             apply_discount(order)
//         else:
//             process_regular(order)
//     else:
//         handle_other_cases(order)

// **Issue:**
// The conditional logic is complex and hard to read.

// **Suggestion:**
// Refactor to simplify conditions


// key={Date.now()}
// function sum(a, b) {
//   return a + b;
// }


// def calculate_area_of_circle(radius):
//     return 3.14159 * radius * radius

// def calculate_area_of_sphere(radius):
//     return 4 * 3.14159 * radius * radius