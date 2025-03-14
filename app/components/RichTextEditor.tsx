import React, { useRef } from 'react';

const RichTextEditor = ({ value, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const handleFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleFontSize = (operation: 'increase' | 'decrease') => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const selectedText = selection.toString();
    if (!selectedText) return; // No text selected

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');

    // Get current font size of the selected text
    const currentSize = window.getComputedStyle(range.startContainer.parentElement!).fontSize;
    const currentSizeValue = parseInt(currentSize, 10);

    // Calculate new font size
    const newSize = operation === 'increase' ? currentSizeValue + 2 : currentSizeValue - 2;
    const clampedSize = Math.max(12, Math.min(newSize, 36)); // Limit between 12px-36px

    // Apply new font size to the selected text
    span.style.fontSize = `${clampedSize}px`;
    span.textContent = selectedText;

    // Replace selected text with the styled span
    range.deleteContents();
    range.insertNode(span);

    // Restore selection
    const newRange = document.createRange();
    newRange.selectNodeContents(span);
    selection.removeAllRanges();
    selection.addRange(newRange);

    editorRef.current?.focus();
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex gap-2 p-2 border-b bg-gray-50">
        {/* Bold Button */}
        <button
          type="button"
          onClick={() => handleFormat('bold')}
          className="px-3 py-1 hover:bg-gray-100 rounded"
        >
          <span className="font-bold">B</span>
        </button>

        {/* Italic Button */}
        <button
          type="button"
          onClick={() => handleFormat('italic')}
          className="px-3 py-1 hover:bg-gray-100 rounded"
        >
          <span className="italic">I</span>
        </button>

        {/* Underline Button */}
        <button
          type="button"
          onClick={() => handleFormat('underline')}
          className="px-3 py-1 hover:bg-gray-100 rounded"
        >
          <span className="underline">U</span>
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-300 my-1" />

        {/* Font Size Increase */}
        <button
          type="button"
          onClick={() => handleFontSize('increase')}
          className="px-3 py-1 hover:bg-gray-100 rounded"
        >
          A+
        </button>

        {/* Font Size Decrease */}
        <button
          type="button"
          onClick={() => handleFontSize('decrease')}
          className="px-3 py-1 hover:bg-gray-100 rounded"
        >
          A-
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-300 my-1" />
      </div>

      {/* Editor Area */}
      <div
        ref={editorRef}
        className="w-full p-4 min-h-[200px] focus:outline-none"
        contentEditable
        onInput={(e) => onChange(e.currentTarget.innerHTML)}
      />
       
    </div>
  );
};

export default RichTextEditor;