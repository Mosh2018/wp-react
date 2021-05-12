import React, {useEffect, useState} from 'react';
import http from '../services/http.service'

function ForTest(props) {

    const [titles, setTitles] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const d = (await http.get(`/wp/v2/posts`)).data;
            console.log(d);
            const v = d.map( f => f.title.rendered)
            setTitles(v);
        }

        getData().then();
    }, [])

    return (
        <div>
            {
                titles.map( d => <p key={d.trim()}>{d}</p>)

            }
        </div>
    );
}

export default ForTest;
