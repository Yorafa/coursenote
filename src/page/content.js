import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { useState, React } from 'react';
import {getCourseContent} from '../component/utils';
import { useParams } from 'react-router';


const Content = () => {
    const { courseId, contentId } = useParams();
    const [content, setContent] = useState(() => {
        getCourseContent(courseId, contentId).then((res) => {
            setContent(res.data);
        }).catch((err) => {
            console.log(err);
        });
    });
    return (
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} />
    );
};

export default Content;