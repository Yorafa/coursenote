import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { useState, React } from 'react';
import { getCourseContent, getCourseDetail} from '../component/utils';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { List, ListItemButton, Button } from '@mui/material';


const Course = () => {
    const { courseId } = useParams();
    const [detail, setDetail] = useState(() => {
        getCourseDetail(courseId).then((res) => {
            setDetail(res.data);
        });
    });
    const [content, setContent] = useState(() => {
        getCourseContent(courseId, courseId).then((res) => {
            setContent(res.data);
        });
    });
    return (
        <List>
            <ReactMarkdown children={content} remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} />
            {detail && detail.map((item) => {
                let temp = item.split('.md')[0];
                return (
                    <Link to={`/${courseId}/${temp}`} key={courseId+temp} style={{
                        textDecoration: 'none',
                    }}
                    ><ListItemButton><Button variant="contained" style={{color: 'black', backgroundColor: "white"}}>{temp}</Button></ListItemButton></Link>
                );
            })}
        </List>
    );
};

export default Course;