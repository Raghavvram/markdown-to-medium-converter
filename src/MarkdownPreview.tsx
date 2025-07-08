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
    <div className="flex w-full h-screen dark:bg-gray-900 dark:text-gray-100 font-sans">
      <textarea
        className="flex-1 p-6 border-r border-gray-300 dark:border-gray-700 overflow-auto resize-none text-lg leading-relaxed bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={markdown}
        onChange={handleChange}
        placeholder="Enter Markdown here"
      />
      <div
        className="flex-1 p-6 overflow-auto prose dark:prose-invert lg:prose-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out text-left"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default MarkdownPreview;