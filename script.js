//your code here
const container = document.getElementById('container');
const elements = container.children;

        // Check display type of each element
        for (const el of elements) {
            const displayType = getComputedStyle(el).display;
            const elementType = el.tagName.toLowerCase();

            // Determine if element is block or inline
            const isBlock = displayType === 'block';
            const isInline = displayType === 'inline' || displayType === 'inline-block';

            // Output the result
            const answer = isBlock ? 'Block' : 'Inline';
            console.log(`${elementType} - Answer: ${answer}`);