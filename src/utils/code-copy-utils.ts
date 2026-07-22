


export function extractCodeText(codeElement: Element): string {
    const lineElements = codeElement.querySelectorAll('span.line');
    if (lineElements.length > 0) {
        const lines = [];
        for (let i = 0; i < lineElements.length; i++) {
            const lineElement = lineElements[i];
            const lineText = lineElement.textContent || '';
            lines.push(lineText);
        }
        return lines.join('\n');
    } else {
        const codeElements = codeElement.querySelectorAll('.code:not(summary *)');
        if (codeElements.length > 0) {
            const lines = [];
            for (let i = 0; i < codeElements.length; i++) {
                const el = codeElements[i];
                const lineText = el.textContent || '';
                lines.push(lineText);
            }
            return lines.join('\n');
        } else {
            return codeElement.textContent || '';
        }
    }
}


export function processEmptyLines(code: string): string {
    return code.replace(/\n\n\n+/g, function(match) {
        const newlineCount = match.length;
        const emptyLineCount = newlineCount - 1;
        
        let resultEmptyLines;
        if (emptyLineCount % 2 === 0) {
            resultEmptyLines = emptyLineCount / 2;
        } else {
            resultEmptyLines = Math.floor((emptyLineCount + 1) / 2);
        }
        
        if (resultEmptyLines < 1) resultEmptyLines = 1;
        
        return '\n'.repeat(resultEmptyLines + 1);
    });
}


export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (clipboardErr) {
        console.warn('Clipboard API 失败，尝试备用方案:', clipboardErr);
        
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (!successful) {
                throw new Error('execCommand 返回 false');
            }
            return true;
        } catch (execErr) {
            console.error('execCommand 也失败了:', execErr);
            throw new Error('所有复制方法都失败了');
        } finally {
            document.body.removeChild(textArea);
        }
    }
}


export async function handleCodeCopy(target: Element): Promise<void> {
    const preEle = target.closest("pre");
    const codeEle = preEle?.querySelector("code");
    
    if (!codeEle) {
        console.warn('未找到代码元素');
        return;
    }
    
    let code = extractCodeText(codeEle);
    
    code = processEmptyLines(code);
    
    try {
        await copyToClipboard(code);
        
        const timeoutId = target.getAttribute("data-timeout-id");
        if (timeoutId) {
            clearTimeout(parseInt(timeoutId));
        }

        target.classList.add("success");

        const newTimeoutId = setTimeout(() => {
            target.classList.remove("success");
        }, 1000);

        target.setAttribute("data-timeout-id", newTimeoutId.toString());
    } catch (err) {
        console.error('复制失败:', err);
    }
}
