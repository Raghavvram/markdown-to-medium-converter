import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

const MarkdownPreview: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('# Hello World\n\nType some **Markdown** here!');
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    const parseMarkdown = async () => {
      const html = await marked.parse(markdown, { gfm: true, breaks: false });
      setHtmlContent(html as string);
    };
    parseMarkdown();
  }, [markdown]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="flex w-full h-screen dark:bg-gray-900 dark:text-gray-100">
      <textarea
        className="flex-1 p-5 border border-gray-300 dark:border-gray-700 overflow-auto resize-none font-mono bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        value={markdown}
        onChange={handleChange}
        placeholder="Enter Markdown here"
      />
      <div
        className="flex-1 p-5 border border-gray-300 dark:border-gray-700 overflow-auto bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default MarkdownPreview;