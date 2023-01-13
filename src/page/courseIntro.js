import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { useState, React } from 'react';
import { getCourses, getCoursesIntro } from '../component/utils';
import { Link } from 'react-router-dom';
import { List, ListItemButton, Button } from '@mui/material';


const CourseIntro = () => {
    const [detail, setDetail] = useState(() => {
        getCourses().then((res) => {
            setDetail(res.data);
        });
    });
    const [content, setContent] = useState(() => {
        getCoursesIntro().then((res) => {
            setContent(res.data);
        });
    });
    return (
        <List>
            <ReactMarkdown children={content} remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} />
            {detail && detail.map((item) => {
                let temp = item.split('.md')[0];
                return (
                    <Link to={`/${temp}`} key={"courses-"+temp} style={{
                        textDecoration: 'none',
                    }}
                    ><ListItemButton><Button variant="contained" style={{color: 'black', backgroundColor: "white"}}>{temp}</Button></ListItemButton></Link>
                );
            })}
        </List>
    );
};

export default CourseIntro;